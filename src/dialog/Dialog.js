import React from 'react';
import styled from 'styled-components';
import MethodSelect from './MethodSelect'
import URLInput from './URLInput'
import HeadersInput from './HeadersInput'

const DialogBackground = styled.div`
  background-color: rgba(0, 0 ,0 ,0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const DialogContainer = styled.div`
  width: 800px;
  position: absolute;
  top: 75px;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

const DialogHead = styled.div`
  border-radius: 5px 5px 0 0;
  background-color: #DDD;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  padding-left: 15px;
`;

const DialogBody = styled.div`
  background-color: white;
  padding: 20px 15px;
  height: 300px;
  overflow: auto;
`;

const DialogFooter = styled.div`
  border-radius: 0 0 5px 5px;
  background-color: white;
  height: 50px;
  text-align: center;
  padding-top: 10px;
  border-top: 1px solid #EEE;
`;

const CloseIcon = styled.span`
  float: right;
  font-size: 24px;
  padding: 0 15px;
  cursor: pointer;
`;

const ConfigRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  > h4 {
    padding: 0;
    margin: 0;
    margin-top: 5px;
    width: 100px;
  }
  > div {
    flex: 1
  }
`;


const Button = styled.div`
  background-color: blue;
  color: white;
  width: 150px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;


export default class Dialog extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.config
  }

  addHeader() {
    const headers = this.state.headers
    headers.push({key: '', value: ''})
    this.setState({headers})
  }

  removeHeader(index) {
    const headers = this.state.headers
    headers.splice(index, 1)
    this.setState({headers})
  }

  updateHeader(index, key, value) {
    const headers = this.state.headers
    headers[index] = {key, value}
    this.setState({headers})
  }

  render() {
    return(
      <DialogBackground>
        <DialogContainer>
          <DialogHead>
            <CloseIcon onClick={() => this.props.closeDialog()}>×</CloseIcon>
            GraphQL API
          </DialogHead>

          <DialogBody>

            <ConfigRow>
              <h4>Method</h4>
              <div>
                <MethodSelect
                  onChange={method => this.setState({method})}
                  selectedValue={this.state.method}
                />
              </div>
            </ConfigRow>

            <ConfigRow>
              <h4>URL</h4>
              <div>
                <URLInput
                  onChange={url => this.setState({url})}
                  value={this.state.url}
                />
              </div>
            </ConfigRow>

            <ConfigRow>
              <h4>Headers</h4>
              <div>
                <HeadersInput
                  addHeader={() => this.addHeader()}
                  removeHeader={index => this.removeHeader(index)}
                  updateHeader={(index, key, value) => this.updateHeader(index, key, value)}
                  headers={this.state.headers}
                />
              </div>
            </ConfigRow>

          </DialogBody>

          <DialogFooter>
            <Button onClick={() => this.props.submitDialog(this.state)}>Explore</Button>
          </DialogFooter>

        </DialogContainer>
      </DialogBackground>
    )
  }

}
