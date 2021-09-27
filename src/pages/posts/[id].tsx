import { Post, PostService } from "alex-holanda-sdk";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface PostPageProps {
  post?: Post.Detailed;
}

export default function PostPage(props: PostPageProps) {
  return <div>{props.post?.title}</div>;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<PostPageProps, Params> =
  async ({ params }) => {
    try {
      if (!params) {
        return { notFound: true };
      }

      const { id } = params;
      const postId = Number(id);

      if (isNaN(postId)) {
        return { notFound: true };
      }

      const post = await PostService.getExistingPost(postId);

      return {
        props: {
          post,
        },
      };
    } catch (err) {
      return {
        props: {},
      };
    }
  };
