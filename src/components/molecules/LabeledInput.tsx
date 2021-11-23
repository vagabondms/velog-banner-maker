import React, { ReactElement } from 'react';

import Input, { IInputProp } from '@atoms/Input';
import Label from '@atoms/Label';
import Wrapper from '@atoms/Wrapper';

interface ILabeledInputProps extends IInputProp {
  name: string;
}

const LabeledInput = ({ name, ...rest }: ILabeledInputProps): ReactElement => {
  return (
    <Wrapper wrapperType="label">
      <Label htmlFor={name}>{name}</Label>
      <Input id={name} {...rest}></Input>
    </Wrapper>
  );
};

export default LabeledInput;
