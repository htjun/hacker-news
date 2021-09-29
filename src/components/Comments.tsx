import useSWR from "swr"
import { CommentContainer } from "src/styles/Comments.style"

const baseUrl = `https://hacker-news.firebaseio.com/v0/item/`

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Comment = ({ commentId }: any) => {
  const { data, error } = useSWR(`${baseUrl}${commentId}.json`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <CommentContainer dangerouslySetInnerHTML={{ __html: data.text }} />
}

const Comments = (props: any) => {
  const { data } = props

  return (
    <>
      <ul>
        {data &&
          data.map((commentId: any) => {
            return <Comment commentId={commentId} />
          })}
      </ul>
    </>
  )
}

export default Comments
