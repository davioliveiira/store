import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Icon } from 'antd';
const { Meta } = Card;
const { Paragraph } = Typography;

class CardContainer extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const { data } = this.props;
    return (
      <Card
        style={{
          width: '100%',
          maxWidth: 300,
          margin: '0 auto'
        }}
        actions={[
          <Icon type="heart" />,
          'Add to Cart',
        ]}
      >
        <Meta
          title={data.name}
          description={data.description}
        />
        <Paragraph style={{ marginTop: 16, textAlign: 'right' }}>$ <strong>{data.price}</strong></Paragraph>
      </Card>
    );
  }
}

export default CardContainer;
