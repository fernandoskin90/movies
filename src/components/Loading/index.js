import React from 'react';
import { Spin } from 'antd';
import './styles.scss';

export const Loading = () => (
  <div className="loading">
    <Spin size="large" />
  </div>
);
