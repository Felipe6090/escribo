import { useState } from "react";
import * as S from "./styles";

export default function Home() {
  const [num, setNum] = useState(1);

  const intergerChecker = (num: number) => {
    let result = 0;

    for (let i = 0; i < num; i++) {
      if (Number.isInteger(i / 5) || Number.isInteger(i / 3)) {
        result += i;
      }
    }

    return result;
  };

  return (
    <S.MainDiv>
      <S.StyledText fontFamily="Roboto" fontWeight="bold" fontSize={32}>
        Escolha um número
      </S.StyledText>
      <S.Input type="number" onChange={(e) => setNum(Number(e.target.value))} />

      <S.StyledText fontFamily="Roboto" fontWeight="bold" fontSize={20}>
        Resultado: {intergerChecker(num)}
      </S.StyledText>
    </S.MainDiv>
  );
}
