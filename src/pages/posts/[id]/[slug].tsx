import { GetServerSideProps, NextPage } from "next";

import { Post, PostService, ResourceNotFoundError } from "alex-holanda-sdk";

import { ParsedUrlQuery } from "querystring";

interface PostPageProps extends NextPageProps {
  post?: Post.Detailed;
}

const PostPage: NextPage<PostPageProps> = (props) => {
  return <div>{props.post?.title}</div>;
};

interface Params extends ParsedUrlQuery {
  id: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps<PostPageProps, Params> =
  async ({ params, res }) => {
    try {
      if (!params) return { notFound: true };

      const { id, slug } = params;
      const postId = Number(id);

      if (isNaN(postId)) return { notFound: true };

      const post = await PostService.getExistingPost(postId);

      if (slug !== post.slug) {
        res.statusCode = 301;
        res.setHeader("Location", `/posts/${post.id}/${post.slug}`);
        // return { props: {} };
      }

      return {
        props: {
          post,
        },
      };
    } catch (err: any) {
      if (err instanceof ResourceNotFoundError) {
        return { notFound: true };
      }

      return {
        props: {
          error: {
            message: err.message,
            statusCode: err.data?.status || 500,
          },
        },
      };
    }
  };

export default PostPage;
