import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";
import { GET_PRODUCTS, Products } from '../components/products';

configure({ adapter: new Adapter() });

const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
    },
    result: {
      data: {
        products: [
          {
            id: 1,
            name: 'Product',
            description: 'Product Description',
            price: 0
          }
        ],
      },
    },
  },
];

it('renders without crashing', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Products />
    </MockedProvider>
  );
});