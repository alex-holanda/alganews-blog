import { Post, PostService } from "alex-holanda-sdk";
import { GetServerSideProps } from "next";

import styled from "styled-components";
import FeaturedPost from "../components/FeaturedPost";

interface HomeProps {
  posts?: Post.Paginated;
}

function Home(props: HomeProps) {
  return (
    <Wrapper>
      {props.posts?.content && (
        <FeaturedPost postSummary={props.posts.content[0]} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const { page } = context.query;
  const posts = await PostService.getAllPosts({ page: Number(page) - 1 });
  return {
    props: {
      posts,
    },
  };
};

export default Home;
