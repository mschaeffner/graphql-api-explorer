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
      dialogVisible: false,
      graphiqlVisible: false,
      config: {
        method: 'GET',
        url: '',
        headers: []
      }
    }
  }

  componentDidMount() {
    const configStr = localStorage.getItem('config')
    if(configStr) {
      const config = JSON.parse(configStr)
      this.setState({config, dialogVisible: true})
    } else {
      this.setState({dialogVisible: true})
    }
  }

  openDialog() {
    this.setState({dialogVisible: true})
  }

  closeDialog() {
    this.setState({dialogVisible: false})
  }

  submitDialog(config) {
    this.setState({config, graphiqlVisible: true})
    localStorage.setItem('config', JSON.stringify(config))
    this.closeDialog()
  }

  render() {
    return(
      <App>

        <Header
          openDialog={() => this.openDialog()}
          config={this.state.config}
        />

        {this.state.graphiqlVisible && <GraphiQLBody config={this.state.config} />}

        {this.state.dialogVisible &&
          <Dialog
            config={this.state.config}
            closeDialog={() => this.closeDialog()}
            submitDialog={(config) => this.submitDialog(config)}
          />
        }

      </App>
    )
  }

}
