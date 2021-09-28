import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { Post, PostService, ResourceNotFoundError } from "alex-holanda-sdk";

import { ParsedUrlQuery } from "querystring";
import PostHeader from "../../../components/PostHeader";

interface PostPageProps extends NextPageProps {
  post?: Post.Detailed;
  host?: string;
}

const PostPage: NextPage<PostPageProps> = (props) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`http://${props.host}/${props.post?.id}/${props.post?.slug}`}
        />
      </Head>
      <>
        {props.post && (
          <PostHeader
            thumbnail={props.post.imageUrls.large}
            editor={props.post.editor}
            createdAt={props.post.createdAt}
            title={props.post.title}
          />
        )}
      </>
    </>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps<PostPageProps, Params> =
  async ({ params, req }) => {
    try {
      if (!params) return { notFound: true };

      const { id, slug } = params;
      const postId = Number(id);

      if (isNaN(postId)) return { notFound: true };

      const post = await PostService.getExistingPost(postId);

      return {
        props: {
          post,
          host: req.headers.host,
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
