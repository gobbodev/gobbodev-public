
import ReactInputMask from "react-input-mask";

import * as S from "./styles";

interface Props {
  id?: string;
  name: string;
  label?: string;
  edit?: boolean;
  mask: string;
  placeholder?: string;
  onChangeInput?: React.Dispatch<string>;
}

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export function InputMask({
  id,
  name,
  mask,
  label,
  readOnly,
}: InputProps) {
  return (
    <S.Input>
      <div className="input-content">
        {label && (
          <label className="label-text" htmlFor={id}>
            {label}
          </label>
        )}

        <ReactInputMask
          name={name}
          mask={mask}
          id={id}
          type="text"
          readOnly={readOnly}
          placeholder="(DDD) 99999-9999"
        />
      </div>
    </S.Input>
  );
}
