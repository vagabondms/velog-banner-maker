import React, { ReactElement } from 'react';

import BoxWrapper from '@atoms/BoxWrapper';
import Label from '@atoms/Label';
import styled from '@emotion/styled';

interface ILabeledInputProps {
  name: string;
  children: ReactElement | ReactElement[];
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 10px;
  background-color: white;
`;

const LabeledBoxWrapper = ({ name, children }: ILabeledInputProps): ReactElement => {
  return (
    <StyledDiv>
      <Label htmlFor={name} style={{ fontSize: 20 }}>
        {name}
      </Label>
      <BoxWrapper name={name}>{children}</BoxWrapper>
    </StyledDiv>
  );
};

export default LabeledBoxWrapper;