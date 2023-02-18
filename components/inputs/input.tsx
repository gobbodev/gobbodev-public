import React from "react";

import * as S from "./styles";

interface Props {
  name: string
  label?: string
}
type InputProps = JSX.IntrinsicElements['input'] & Props

export function Input({ name, label, ...rest }: InputProps) {

  return (
    <S.Input>
      {label && <label htmlFor={name}>{label}</label>}
      
      <input
        name={name}
        {...rest}
      />
    </S.Input>
  );
}
