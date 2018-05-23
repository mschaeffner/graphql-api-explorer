import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  height: 48px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Item = styled.div`
  font-size: 16px;
  display: inline-block;
`;

const Icon = styled.div`
  display: inline-block;
  font-size: 24px;
  background: white;
  color: black;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`;

export default ({openDialog}) =>
  <Header>

    <Item>
      Endpoint: {'https://api.github.com/graphql'} (2 Headers)
    </Item>

    <Item>
      <Icon onClick={() => openDialog()}>✎</Icon>
    </Item>

  </Header>

// <Icon>☰</Icon>
