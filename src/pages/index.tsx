import { GetServerSideProps } from "next";
import Router from "next/router";

import { Post, PostService } from "alex-holanda-sdk";

import FeaturedPost from "../components/FeaturedPost";
import PostCart from "../components/PostCard";

import sendToHomePage from "../core/utils/sendToHomePage";
import PostsGrid from "../components/PostsGrid";
import PageGrid from "../components/PageGrid";
import ReactPaginate from "react-paginate";

interface HomeProps {
  posts?: Post.Paginated & { number?: number };
}

function Home(props: HomeProps) {
  return (
    <PageGrid>
      {props.posts?.content && (
        <>
          <FeaturedPost postSummary={props.posts.content[0]} />
          <PostsGrid>
            {props.posts.content.slice(1).map((post) => {
              return <PostCart post={post} key={post.id} />;
            })}
          </PostsGrid>
          <ReactPaginate
            containerClassName={"Pagination"}
            pageCount={props.posts.totalPages}
            marginPagesDisplayed={0}
            pageRangeDisplayed={3}
            previousLabel={"<"}
            nextLabel={">"}
            hrefBuilder={(page) => `/?page=${page}`}
            onPageChange={(page) => {
              Router.push(`/?page=${page.selected + 1}`);
            }}
            initialPage={props.posts.number}
          />
        </>
      )}
    </PageGrid>
  );
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

  const posts: Post.Paginated & { number?: number } =
    await PostService.getAllPosts({
      page: Number(page) - 1,
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
