import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')

  const [commentsList, setCommentsList] = useState([])

  const onChangeCommentText = event => {
    setCommentText(event.target.value)
  }

  const onChangeNameInput = event => {
    setName(event.target.value)
  }

  const onAddComment = event => {
    event.preventDefault()

    const newComment = {
      id: uuidV4(),
      name,
      commentText,
    }
    setCommentsList(prevCommentList => [...prevCommentList, newComment])

    setName('')
    setCommentText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeNameInput}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={eachComment.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
