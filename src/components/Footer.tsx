import { FOOTER_HEIGHT } from "../../_constants";

import styled from "styled-components";

import Logo from "./Logo";
import { transparentize } from "polished";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Credits>todos os direitos reservados</Credits>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.activeElementBackground};
  color: ${(props) => props.theme.activeElementForeground};

  width: 100%;
  height: ${FOOTER_HEIGHT}px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  max-width: 848px;
  margin: auto;
  height: 100%;
`;

const Credits = styled.p`
  font-size: 18px;
  color: ${(props) => transparentize(0.6, props.theme.activeElementForeground)};
`;
