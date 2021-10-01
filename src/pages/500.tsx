import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import InternalServerErrorImage from "/public/internal-server-error.svg";

import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../_constants";

import styled from "styled-components";

export default function InternalServerError() {
  return (
    <>
      <Head>
        <title>Erro interno - 500</title>
      </Head>
      <Wrapper>
        <Image
          src={InternalServerErrorImage}
          width={200}
          height={200}
          alt={"Não encontrado"}
          objectFit="contain"
        />
        <h1>Erro interno</h1>
        <p>O estagiário desconectou um cabo errado...</p>
        <Link href={"/"} passHref>
          <BackToHome>Tentar acessar a home</BackToHome>
        </Link>
      </Wrapper>
    </>
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
