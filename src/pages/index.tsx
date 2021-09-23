import { Post, PostService } from "alex-holanda-sdk";
import { GetServerSideProps } from "next";
import { ServerResponse } from "http";

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

function sendToHomePage(res: ServerResponse) {
  res.statusCode = 302;
  res.setHeader("Location", "/?page=1");
  return { props: {} };
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  query,
  res,
}) => {
  const { page: _page } = query;

  const page = Number(_page);

  if (isNaN(page) || page < 1) {
    return sendToHomePage(res);
  }

  const posts = await PostService.getAllPosts({ page: Number(page) - 1 });

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
