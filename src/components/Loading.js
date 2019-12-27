import React, { Component } from 'react';
import { Icon } from 'antd';

class Loading extends Component {
  render() {
    return (
      <Icon type="loading" style={{ width: '100%', padding: 16 }} />
    );
  }
}

export default Loading;
