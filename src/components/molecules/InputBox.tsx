import React from 'react';

import BoxWrapper from '@atoms/BoxWrapper';
import Divider from '@atoms/Divider';
import Input from '@atoms/Input';
import SubWrapper from '@atoms/SubWrapper';
const InputBox = () => {
  return (
    <BoxWrapper>
      <SubWrapper>
        <Input name="제목" style={{ fontSize: 30, borderBottom: '2px solid #5ec59a', width: 280 }}></Input>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <Input name="부제목" style={{ fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 }}></Input>
        <Input name="태그" style={{ fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 }}></Input>
      </SubWrapper>
    </BoxWrapper>
  );
};

export default InputBox;