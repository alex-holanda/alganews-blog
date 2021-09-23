import Image from "next/image";
import { Post } from "alex-holanda-sdk";
import { transparentize } from "polished";
import styled from "styled-components";

interface PostCardProps {
  post: Post.Summary;
}

export default function PostCart(props: PostCardProps) {
  return (
    <Wrapper>
      <Thumbnail bg={props.post.imageUrls.small} />
      <Info>
        <Editor>
          <EditorImage
            src={props.post.editor.avatarUrls.small}
            width={64}
            height={64}
          />
        </Editor>

        <PublishDate>há 3 dias</PublishDate>

        <Title>{props.post.title}</Title>
      </Info>
    </Wrapper>
  );
}

const Thumbnail = styled.div<{ bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-image: url(${(p) => p.bg});
  background-position: center;
  background-size: cover;
  border-top-left-radius: ${(p) => p.theme.borderRadius};
  border-top-right-radius: ${(p) => p.theme.borderRadius};
`;

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 50%;
  width: 100%;
  z-index: 2;
  margin-top: -32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const Editor = styled.div`
  position: relative;
  z-index: 2;
  border-radius: 32px;
  width: 64px;
  height: 64px;
  box-shadow: 0 0 0 4px ${(p) => p.theme.activeElementBackground};
`;

const EditorImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

const PublishDate = styled.p`
  font-size: 12px;
  color: ${(p) => transparentize(0.5, p.theme.activeElementForeground)};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 14px;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 256px;
  background-color: ${(p) => p.theme.activeElementBackground};
  color: ${(p) => p.theme.activeElementForeground};
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: 0 3px 6px
    ${(p) => transparentize(0.9, p.theme.activeElementForeground)};
`;
