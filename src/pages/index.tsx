import { Post, PostService } from "alex-holanda-sdk";

import styled from "styled-components";
import FeaturedPost from "../components/FeaturedPost";

interface HomeProps {
  posts: Post.Paginated;
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

export async function getServerSideProps() {
  const posts = await PostService.getAllPosts({ page: 0 });
  return {
    props: {
      posts,
    },
  };
}

export default Home;
