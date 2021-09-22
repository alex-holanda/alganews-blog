import styled from "styled-components";
import { transparentize } from "polished";
import { FOOTER_HEIGHT } from "../../_constants";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <span>logo</span>
        <span>créditos</span>
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
