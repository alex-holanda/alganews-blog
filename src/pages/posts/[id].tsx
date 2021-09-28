import { GetServerSideProps, NextPage } from "next";

import { Post, PostService, GenericError } from "alex-holanda-sdk";

import { ParsedUrlQuery } from "querystring";

interface PostPageProps {
  post?: Post.Detailed;
  error?: {
    message: string;
  };
}

const PostPage: NextPage<PostPageProps> = (props) => {
  if (props.error)
    return <div style={{ color: "red" }}>{props.error.message}</div>;
  return <div>{props.post?.title}</div>;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<PostPageProps, Params> =
  async ({ params }) => {
    try {
      if (!params) return { notFound: true };

      const { id } = params;
      const postId = Number(id);

      if (isNaN(postId)) return { notFound: true };

      const post = await PostService.getExistingPost(postId);

      return {
        props: {
          post,
        },
      };
    } catch (err: any) {
      return {
        props: {
          error: {
            message: err.message,
          },
        },
      };
    }
  };

export default PostPage;
