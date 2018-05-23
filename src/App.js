import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import GraphiQLBody from './GraphiQLBody';
import Dialog from './dialog/Dialog';

const App = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default class Foo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogVisible: true
    }
  }

  closeDialog() {
    this.setState({dialogVisible: false})
  }

  openDialog() {
    this.setState({dialogVisible: true})
  }

  render() {
    return(
      <App>
        <Header openDialog={() => this.openDialog()} />
        {false && <GraphiQLBody />}
        {this.state.dialogVisible && <Dialog closeDialog={() => this.closeDialog()} />}
      </App>
    )
  }

}
