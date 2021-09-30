import Image from "next/image";

import { Post } from "alex-holanda-sdk";

import styled from "styled-components";
import { transparentize } from "polished";
import formatPostDate from "../core/utils/formatPostDate";

interface PostHeaderProps {
  thumbnail: string;
  editor: Post.Detailed["editor"];
  createdAt: string;
  title: string;
}

export default function PostHeader(props: PostHeaderProps) {
  return (
    <Wrapper>
      <Thumbnail>
        <Image
          src={props.thumbnail}
          width={848}
          height={256}
          alt={props.title}
          objectFit="cover"
        />
      </Thumbnail>

      <Editor>
        <Image
          src={props.editor.avatarUrls.small}
          height={64}
          width={64}
          alt={props.editor.name}
          objectFit={"cover"}
        />
      </Editor>

      <PublishDate>{formatPostDate(props.createdAt)}</PublishDate>

      <Title>{props.title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;

  pointer-events: none;

  text-align: center;
`;

const Thumbnail = styled.div`
  width: 100%;

  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};

  overflow: hidden;
  object-fit: cover;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Editor = styled.div`
  position: relative;

  margin-top: -52px;
  border-radius: 32px;

  height: 64px;
  width: 64px;

  box-shadow: 0 0 0 4px ${(props) => props.theme.pageBackground};

  img {
    border-radius: 32px;
  }
`;

const PublishDate = styled.p`
  color: ${(props) => transparentize(0.5, props.theme.pageForeground)};
  font-size: 12px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;
