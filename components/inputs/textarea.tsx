import React from 'react'

import * as S from './styles'

export function TextArea({ name, ...rest }: any) {
  return (
    <S.Input>
      <textarea name={name} {...rest} />
    </S.Input>
  )
}
