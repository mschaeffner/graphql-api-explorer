import React from 'react';
import styled from 'styled-components';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import 'graphiql/graphiql.css';

const GraphiQLBody = styled.div`
  flex: 1;
`;

const transformHeaders = headers => {
  const result = {}
  headers.forEach(header => result[header.key] = header.value)
  return result
}

const graphQLFetcher = (graphQLParams, config) => {
  const method = config.method.toLowerCase()
  const headers = transformHeaders(config.headers)

  if(config.method === 'POST') {
    return fetch(config.url, {
      method,
      headers,
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  } else {
    const url = config.url + '?query=' + encodeURIComponent(JSON.stringify(graphQLParams))
    return fetch(url, {
      method,
      headers
    }).then(response => response.json());
  }
}

export default ({config}) =>
  <GraphiQLBody>
    <GraphiQL fetcher={graphQLParams => graphQLFetcher(graphQLParams, config)} />
  </GraphiQLBody>
