import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const KeyInput = styled.input`
  box-sizing: border-box;
  padding: 5px;
  font-size: 16px;
  flex: 1;
`;

const ValueInput = styled.input`
  box-sizing: border-box;
  padding: 5px;
  font-size: 16px;
  flex: 1;
  margin: 0 10px;
`;

const RemoveButton = styled.div`
  display: inline-block;
  font-size: 24px;
  cursor: pointer;
  width: 20px;
`;

const AddLink = styled.div`
  display: inline-block;
  font-size: 12px;
  margin-left: 5px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  padding-top: ${props => props.noHeaderInputs ? '7px' : '0px'};
`;

export default ({headers, addHeader, removeHeader, updateHeader}) =>
  <div>

    {headers.map((header, index) =>
      <Row key={index}>
        <KeyInput value={header.key} onChange={event => updateHeader(index, event.target.value, header.value)} />
        <ValueInput value={header.value} onChange={event => updateHeader(index, header.key, event.target.value)} />
        <RemoveButton onClick={() => removeHeader(index)}>×</RemoveButton>
      </Row>
    )}

    <AddLink onClick={() => addHeader()} noHeaderInputs={!headers.length}>
      Add header
    </AddLink>

  </div>


//  onChange={(key, value) => this.updateHeader(key, value)}
//  headers={this.state.headers}
