import React from 'react';
import Router from 'next/router';
// import store from "@/store";
import { useSelector } from 'react-redux';
import { SET_USER_INFO } from '@/reducers/common/constants';

function Home(props) {
  const { userInfo } = useSelector((state: any) => ({
    userInfo: state.common,
  }));
  console.log(userInfo, 'userInfo');
  const goToListPage = () => {
    Router.push({
      pathname: '/list',
      query: {
        id: '1',
      },
    });
    // props.router.push('http://localhost:3000/list')
  };
  return (
    <div>
      home page
      <br />
      测试自动部署3
      <div onClick={goToListPage}>list page</div>
      <div onClick={() => Router.push('/list')}>list page2</div>
    </div>
  );
}
Home.getInitialProps = ({ reduxStore, query }) => {
  // console.log(reduxStore)
  reduxStore.dispatch({
    type: SET_USER_INFO,
    payload: {
      name: 'test',
      id: query?.id || '',
    },
  });
  return {};
};
export default Home;
