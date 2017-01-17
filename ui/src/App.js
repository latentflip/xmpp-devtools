import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageLog from './MessageLog';
import XMLViewer from './XMLViewer';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${props => props.open ? '150px' : '20px'};
  background: white;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <Wrapper open={this.state.open}>
        {this.state.open
          ? <MessageLog log={this.props.raw} />
          : `XMPP: Logged ${this.props.raw.length} messages`
        }
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  raw: state.raw
});


export default connect(
  (state) => ({ raw: state.raw })
)(App);
