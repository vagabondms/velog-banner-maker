import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
export interface IBoxWrapperProps {
  children: ReactElement | ReactElement[];
  name?: string;
  direction?: string;
}

const StyledDivWrapper = styled.div<IBoxWrapperProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 500px;
  border: 1px solid lightgrey;
  padding: 10px;
`;

const BoxWrapper = ({ children, name, ...rest }: IBoxWrapperProps): ReactElement => {
  return (
    <StyledDivWrapper id={name} {...rest}>
      {children}
    </StyledDivWrapper>
  );
};

export default BoxWrapper;
