import React from "react";
import banner from "../../../assets/capa.svg";

import Text from "../../components/Text";
import {
  BannerContainer,
  Container,
  EnterButton,
  Input,
  Line,
  LoginContainer,
  SubTitle,
  Title,
  WrapperLines,
} from "./styles";
const Login: React.FC = () => {
  return (
    <Container>
      <BannerContainer>
        <img src={banner} width={313} alt="" />
        <Text size={50} bold color="#fff">
          CONECTE-SE,
          <br />
          CONHEÇA E <br />
          COMPARTILHE
        </Text>
        <Text color="#fff">
          Conecte-se aos seus <strong> amigos</strong> e{" "}
          <strong>familiares</strong> usando recados e mensagens instantâneas
        </Text>
        <Text color="#fff">
          Conheça <strong>novas pessoas</strong> através de amigos de seus
          amigos e comunidades
        </Text>
        <Text color="#fff">
          Compartilhe seus <strong>vídeos</strong>, <strong>fotos</strong> e{" "}
          <strong>paixôes</strong> em um só lugar
        </Text>
      </BannerContainer>
      <LoginContainer>
        <Title>
          Junta-se a mais de 20 <br />
          milhões de pessoas
        </Title>
        <SubTitle>Já tem conta? Só preencher e entrar</SubTitle>

        <Input placeholder="Digite seu email" />
        <Input placeholder="Digite sua senha" />
        <EnterButton>
          <p>Entrar</p>
        </EnterButton>
        <Text color="#fff" size={14}>
          Esqueci minha senha
        </Text>
        <WrapperLines>
          <Line />
          <Text color="#fff" size={14}>
            Ou acesse sua conta pelo
          </Text>
          <Line />
        </WrapperLines>
      </LoginContainer>
    </Container>
  );
};

export default Login;
