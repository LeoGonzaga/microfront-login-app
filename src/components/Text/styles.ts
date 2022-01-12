import styled from "styled-components";

type Props = {
  color?: string;
  size?: number;
  bold?: boolean;
};
export const Container = styled.p<Props>`
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
  font-weight: ${(props) => (props.bold ? "bold" : "initial")};
  padding: 10px 5px;
`;
