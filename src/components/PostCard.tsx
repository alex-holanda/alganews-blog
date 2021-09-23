import { Post } from "alex-holanda-sdk";

interface PostCardProps {
  post: Post.Summary;
}

export default function PostCart(props: PostCardProps) {
  return <div>{props.post.title}</div>;
}
