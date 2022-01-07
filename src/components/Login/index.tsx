import React from "react";
import banner from "../../../assets/capa.svg";
import logo from "../../../assets/Logo.svg";
import {
  BannerContainer,
  Container,
  EnterButton,
  GoogleButton,
  Input,
  Line,
  LoginContainer,
  SubTitle,
  Text,
  Title,
  WrapperLines,
} from "./styles";
const Login: React.FC = () => {
  return (
    <Container>
      <BannerContainer>
        <img src={banner} width={313} alt="" />
        <Title>
          Toda pergunta tem <br />
          uma resposta.
        </Title>
        <SubTitle>
          Aprenda e compartilhe conhecimento <br />
          com outras pessoas
        </SubTitle>
      </BannerContainer>
      <LoginContainer>
        <img src={logo} width={154} alt="" />
        <GoogleButton>Crie sua conta com o Google</GoogleButton>
        <WrapperLines>
          <Line />
          <Text>ou entre em uma sala</Text>
          <Line />
        </WrapperLines>
        <Input placeholder="Digite o código da sala" />
        <EnterButton>
          <p>Entrar na sala</p>
        </EnterButton>
      </LoginContainer>
    </Container>
  );
};

export default Login;
