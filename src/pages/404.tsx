import Image from "next/image";
import Link from "next/link";

import NotFoundImage from "/public/not-found.svg";

import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../_constants";

import styled from "styled-components";

export default function NotFound() {
  return (
    <Wrapper>
      <Image
        src={NotFoundImage}
        width={200}
        height={200}
        alt={"Não encontrado"}
        objectFit="contain"
      />
      <h1>Página não encontrada</h1>
      <Link href={"/"} passHref>
        <BackToHome>Voltar para home</BackToHome>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`;

const BackToHome = styled.a`
  color: ${(props) => props.theme.primaryBackground};
  text-decoration: none;
`;
