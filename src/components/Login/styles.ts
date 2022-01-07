import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  height: 100vh;
`;

export const BannerContainer = styled.div`
  background-color: #835afd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 84px;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #fff;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  color: #f8f8f8;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  height: 45px;
  width: 320px;
  border-radius: 8px;
  border: 1px solid #a8a8b3;
  margin-bottom: 20px;
  outline: none;
  padding: 0px 10px;
`;

export const EnterButton = styled.button`
  height: 50px;
  width: 340px;
  background-color: #835afd;
  color: #fff;
  border-radius: 8px;
  outline: none;
  border: none;
`;

export const GoogleButton = styled.button`
  height: 50px;
  width: 340px;
  background-color: #ea4335;
  color: #fff;
  border-radius: 8px;
  outline: none;
  border: none;
  margin-bottom: 32px;
  margin-top: 56px;
`;

export const WrapperLines = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.hr`
  width: 76px;
  height: 3px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #a8a8b3;
  padding: 15px;
`;
