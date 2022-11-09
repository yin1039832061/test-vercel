import React, { useState } from 'react';
import styles from './index.module.less';
import { Button } from 'antd';
import getConfig from 'next/config';
import { useSelector } from 'react-redux';
const { publicRuntimeConfig } = getConfig();

const Index = (props) => {
  const { userInfo } = useSelector((state: any) => ({
    userInfo: state.common,
  }));
  console.log(userInfo, 'userInfo');
  const [list, setList] = useState([]);
  const clickHandle = () => {
    let random = Math.random() > 0.5;
    //@ts-ignore
    random && setList(undefined);
  };
  return (
    <div className={styles.test}>
      list page
      <br />
      <Button type="primary" onClick={clickHandle}>
        aaa
      </Button>
      <div>
        cur api address: <span>{props.API}</span>
      </div>
      <div>{JSON.stringify(props.headers, null, 2)}</div>
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};
Index.getInitialProps = (ctx: CTX = {}) => {
  // console.log(ctx.req.headers)
  console.log(ctx?.query?.id || undefined);
  return {
    API: publicRuntimeConfig.API_URL,
    headers: ctx?.req?.headers || '',
  };
};
export default Index;
