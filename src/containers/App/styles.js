import React from 'react';
import styled from 'styled-components';
import {
  Layout,
  Row,
  Col,
  Input,
  Button,
} from 'antd';
const { Header, Content } = Layout;
const { Search } = Input;

const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0 15px;
`;

const ButtonWrapper = styled.div``;

export const HeaderContainer = () => (
  <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <Content style={{ padding: '0 50px' }}>
      <Row gutter={16} type="flex" align="middle">
        <Col className="gutter-row" lg={3} sm={4}>
          <div>
            <Logo />
          </div>
        </Col>
        <Col className="gutter-row" lg={18} sm={16}>
          <Search placeholder="Search products" />
        </Col>
        <Col className="gutter-row" lg={3} sm={4}>
          <ButtonWrapper>
            <Button icon="user" type="primary" block>Login</Button>
          </ButtonWrapper>
        </Col>
      </Row>
    </Content>
  </Header>
);

export const Container = styled.div`
  margin-top: 64px;
`;
