import React from 'react';
import styled from 'styled-components';

const MethodSelect = styled.select`
  width: 100px;
  font-size: 18px;
`;

const methods = ['GET', 'POST']

export default ({selectedValue, onChange}) =>
  <MethodSelect onChange={event => onChange(event.target.value)} value={selectedValue}>
    {methods.map(x => <option key={x} value={x}>{x}</option>)}
  </MethodSelect>
