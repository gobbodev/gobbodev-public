import React from "react";

import * as S from "./styles";

interface Option {
  label: string;
  value: string | number;
}

interface Select extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  optionsSelect: Option[];
  placeholder?: string;
}

export function Select({ name, label, optionsSelect, placeholder, ...rest }: Select) {

  return (
    <S.Input>
      <div className="input-content">
        {label && <label className="project-label" htmlFor={name}>{label}</label>}

        <select
          name={name}
          
          {...rest}
        >
          <option key ={"select Site Pessoal/Comercial"} value="Site Pessoal/Comercial">{placeholder ? placeholder : "ESQUECEU DE COLOCAR PLACEHOLDER"}</option>
          {optionsSelect.map((option) => {
            return (
              <option key={"select " + option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </S.Input>
  );
}
