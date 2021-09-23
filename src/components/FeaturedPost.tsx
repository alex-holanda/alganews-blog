import Link from "next/link";

import { Post } from "alex-holanda-sdk";

import styled from "styled-components";
import Avatar from "./Avatar";
import { transparentize } from "polished";

interface FeaturedPostProps {
  postSummary: Post.Summary;
}
export default function FeaturedPost(props: FeaturedPostProps) {
  return (
    <Link
      href={`/posts/${props.postSummary.id}/${props.postSummary.slug}`}
      passHref
    >
      <Wrapper>
        <BgImage bg={props.postSummary.imageUrls.medium} />
        <Content>
          <Tags>
            {props.postSummary.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <Editor>
            <Avatar src={props.postSummary.imageUrls.small} />
            <EditorDescription>
              <EditorName>{props.postSummary.editor.name}</EditorName>
              <PostDate>há 3 dias</PostDate>
            </EditorDescription>
          </Editor>

          <Title>{props.postSummary.title}</Title>
        </Content>
      </Wrapper>
    </Link>
  );
}

const Content = styled.div`
  position: relative;
  z-index: 1;

  gap: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BgImage = styled.div<{ bg: string }>`
  background-image: url(${(props) => props.bg});

  position: absolute;
  inset: 0;
  background-color: blue;
  z-index: 0;

  opacity: 0.05;
`;

const Wrapper = styled.a`
  position: relative;

  text-decoration: none;

  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryForeground};
  border-radius: ${(props) => props.theme.borderRadius};

  padding: 32px;

  width: 100%;
  min-height: 256px;

  display: flex;
  align-items: center;

  overflow: hidden;

  transition: box-shadow 0.25s ease;

  &:hover,
  &:focus {
    outline: none;

    box-shadow: 0 0 0 4px
      ${(props) => transparentize(0.7, props.theme.primaryBackground)};
  }
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Tag = styled.li`
  background-color: ${(props) => props.theme.activeElementBackground};
  color: ${(props) => props.theme.activeElementForeground};
  border-radius: ${(props) => props.theme.borderRadius};

  text-transform: lowercase;
  padding: 4px 8px;
  cursor: default;

  font-size: 12px;
`;

const Editor = styled.div`
  display: flex;
  gap: 16px;
`;

const EditorDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PostDate = styled.p`
  font-size: 12px;
`;

const EditorName = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;
