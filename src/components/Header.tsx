import styled from "styled-components";
import { transparentize } from "polished";
import { HEADER_HEIGHT } from "../../_constants";
import Logo from "./Logo";

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <span>navbar</span>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.activeElementBackground};
  color: ${(props) => props.theme.activeElementForeground};
  box-shadow: 0 3px 10px
    ${(props) => transparentize(0.9, props.theme.pageForeground)};

  width: 100%;
  height: ${HEADER_HEIGHT}px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 848px;
  margin: auto;
  height: 100%;
`;