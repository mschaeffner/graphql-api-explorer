import React from 'react';
import styled from 'styled-components';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import 'graphiql/graphiql.css';

const GraphiQLBody = styled.div`
  flex: 1;
`;

const graphQLFetcher = (graphQLParams) => {
  return fetch('https://api.github.com/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

export default () =>
  <GraphiQLBody>
    <GraphiQL fetcher={graphQLFetcher} />
  </GraphiQLBody>
