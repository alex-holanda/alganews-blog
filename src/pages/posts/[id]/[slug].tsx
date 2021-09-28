import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import { Post, PostService, ResourceNotFoundError } from "alex-holanda-sdk";

import { ParsedUrlQuery } from "querystring";

interface PostPageProps extends NextPageProps {
  post?: Post.Detailed;
  host?: string;
}

const PostPage: NextPage<PostPageProps> = (props) => {
  const { post } = props;
  if (!post) {
    return <>Carregando...</>;
  }
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`http://${props.host}/${post.id}/${post.slug}`}
        />
      </Head>
      <div>
        <header>
          <Image
            src={post?.imageUrls.large}
            width={200}
            height={200}
            alt={post?.title}
          />

          <Image
            src={post.editor.avatarUrls.small}
            width={64}
            height={64}
            alt={post.editor.name}
          />

          <p>há 3 horas</p>

          <h1>{post.title}</h1>
        </header>
      </div>
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
