const baseUrl = `https://hacker-news.firebaseio.com/v0/item/`

const Comments = () => {
  return <></>
}

const Comment = () => {
  return <></>
}

const CommentsContainer = (props: any) => {
  const { data } = props

  return (
    <>
      <div>
        {data.map((comment: any) => {
          return <div>{comment}</div>
        })}
      </div>
    </>
  )
}

export default CommentsContainer
