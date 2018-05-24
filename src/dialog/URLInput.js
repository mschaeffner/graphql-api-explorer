import React from 'react';
import styled from 'styled-components';

const URLInput = styled.input`
  width: calc(100% - 30px);
  box-sizing: border-box;
  padding: 5px;
  font-size: 16px;
`;

export default ({value, onChange}) =>
  <URLInput
    type='text'
    onChange={event => onChange(event.target.value)}
    value={value}
    placeholder='https://api.example.com/graphql'
  />
