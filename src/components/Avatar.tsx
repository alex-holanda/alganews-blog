import Image from "next/image";

import avatar from "/public/avatar.png";

import styled from "styled-components";
import { useState } from "react";

interface AvatarProps {
  src: string;
}

export default function Avatar(props: AvatarProps) {
  const [src, setSrc] = useState(props.src);
  return (
    <Wrapper>
      <StyledAvatar
        src={src}
        width={40}
        height={40}
        onError={(e) => {
          setSrc(avatar.src);
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 40px;
  width: 40px;

  border-radius: 20px;
  box-shadow: 0 0 0 4px ${(props) => props.theme.primaryForeground};
  overflow: hidden;
`;

const StyledAvatar = styled(Image)`
  object-fit: cover;
`;
