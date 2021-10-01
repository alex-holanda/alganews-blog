import styled from "styled-components";
import { transparentize } from "polished";
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from "../../_constants";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Navbar />
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

  position: fixed;
  z-index: 10;

  @media screen and (max-width: 767px) {
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;

const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 848px;
  margin: auto;
  height: 100%;

  padding: 0 16px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;

    gap: 12px;
  }
`;
