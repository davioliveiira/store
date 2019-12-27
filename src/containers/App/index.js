import React, { Component } from 'react';
import { Layout } from 'antd';
import { HeaderContainer, Container } from './styles';
import { Products } from 'components';

class App extends Component {
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <HeaderContainer />
        <Container>
          <Products />
        </Container>
      </Layout>
    );
  }
}

export default App;