import styled from "styled-components";

interface StyledProps {
  fontFamily: "Poppins" | "Roboto";
  fontWeight: "black" | "bold" | "regular" | "light";
  fontSize: number;
  align?: string;
  dark?: boolean;
}

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;

  height: 70vh;
`;

export const Input = styled.input`
  width: 25%;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.white};

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.silver_light};

  &::placeholder {
    ${({ theme }) => theme.colors.silver_light};

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.silver_light};
  }

  outline: none;

  border: 1px solid ${({ theme }) => theme.colors.silver_light};
  border-radius: 8px;

  padding: 0 20px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const StyledText = styled.p<StyledProps>`
  font-family: "${(props) => props.fontFamily}";
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;

  text-align: ${(props) => props.align || "center"};

  color: ${({ theme, dark }) =>
    !dark ? theme.colors.black : theme.colors.white};
`;
