import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Loading } from 'components';
import CardContainer from './components/Card';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

export const GET_PRODUCTS = gql`
  {
    products(limit: 8) {
      id
      name
      description
      price
    }
  }
`;

const ProductsList = ({ products }) => {
  return (
    <Content style={{ padding: '50px 100px' }}>
      <Row gutter={[16, 16]}>
        {products.map(product => (
          <Col key={`product_${product.id}`} className="gutter-row" lg={6} sm={12}>
            <CardContainer data={product} />
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Loading />;
  if (error) return `Error! ${error}`;

  return <ProductsList products={data.products} />;
};
