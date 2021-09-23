import { Post, PostService } from "alex-holanda-sdk";
import { GetServerSideProps } from "next";

import styled from "styled-components";
import FeaturedPost from "../components/FeaturedPost";
import PostCart from "../components/PostCard";
import sendToHomePage from "../core/utils/sendToHomePage";

interface HomeProps {
  posts?: Post.Paginated;
}

function Home(props: HomeProps) {
  return (
    <Wrapper>
      {props.posts?.content && (
        <>
          <FeaturedPost postSummary={props.posts.content[0]} />
          {props.posts.content.slice(1).map((post) => {
            return <PostCart post={post} key={post.id} />;
          })}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  gap: 16px;
`;

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  query,
  res,
}) => {
  const { page: _page } = query;

  const page = Number(_page);

  if (isNaN(page) || page < 1) {
    return sendToHomePage(res);
  }

  const posts = await PostService.getAllPosts({
    page: Number(page) - 1,
    showAll: true,
  });

  if (!posts.content?.length) {
    return sendToHomePage(res);
  }

  return {
    props: {
      posts,
    },
  };
};

export default Home;
