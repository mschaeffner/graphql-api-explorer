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

const Url = styled.a`
  display: inline-block;
  margin-left: 10px;
  color: white;
`;

const HeadersInfo = styled.div`
  display: inline-block;
  margin-left: 30px;
  font-size: 12px;
  font-style: italic;
  border-bottom: 1px dashed white;
  cursor: pointer;
  position: relative;
  > div {
    position: absolute;
    top: 20px;
    left: 0;
    display: none;
    background-color: #DDD;
    color: black;
    border: 1px solid #999;
    font-size: 16px;
    padding: 10px;
    border-radius: 4px;
    font-style: normal;
    z-index: 300;
  }
  :hover > div {
    display: block;
  }
`;

const HeadersInfoRow = styled.div`
  white-space: nowrap;
  padding-bottom: 10px;
  > span {
    font-weight: bold;
  }
`;


export default ({openDialog, config}) =>
  <Header>

    <Item>
      Endpoint:
      <Url href={config.url} target='_blank'>{config.url}</Url>
      {config.headers.length &&
        <HeadersInfo>
          {config.headers.length} custom header
          <div>
            {config.headers.map(x =>
              <HeadersInfoRow key={x.key}>
                <span>{`${x.key}:`}</span> {x.value}
              </HeadersInfoRow>
            )}
          </div>
        </HeadersInfo>
      }
    </Item>

    <Item>
      <Icon onClick={() => openDialog()}>✎</Icon>
    </Item>

  </Header>

// <Icon>☰</Icon>
