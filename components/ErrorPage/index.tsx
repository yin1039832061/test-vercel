import { Button, Result } from 'antd';
import React from 'react';
const ErrorPage = () => {
  const refreshHandle = () => {
    window.location.reload();
  };
  return (
    <div>
      <Result
        status={'error'}
        title="出错了"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" onClick={refreshHandle}>
            刷新页面
          </Button>
        }
      />
    </div>
  );
};

export default ErrorPage;
