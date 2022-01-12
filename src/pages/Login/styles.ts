import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  height: 100vh;
`;

export const BannerContainer = styled.div`
  background: rgb(239, 4, 145);
  background: linear-gradient(
    191deg,
    rgba(239, 4, 145, 1) 0%,
    rgba(239, 4, 145, 0.2721463585434174) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 84px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  color: #f8f8f8;
  margin-bottom: 10px;
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
  transition: 0.2s ease;
  &:focus {
    border: 1px solid ${colors.linearStart};
  }
`;

export const EnterButton = styled.button`
  height: 50px;
  width: 340px;
  background-color: ${colors.linearStart};
  color: #fff;
  border-radius: 8px;
  outline: none;
  border: none;
  transition: 0.2s ease;
  &:hover {
    opacity: 0.8;
  }
`;

export const WrapperLines = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.hr`
  width: 76px;
  height: 1px;
  background-color: #a8a8b3;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #a8a8b3;
  padding: 15px;
`;
