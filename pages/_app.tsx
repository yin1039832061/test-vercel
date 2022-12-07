import React from 'react';
import App, { AppContext, AppInitialProps } from 'next/app';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
// import { initStore } from '@/store';
import { config } from '@/utils';
import HOC from '@/components/HOC';
import Layout from '@/layouts/BasicLayout';
import withRedux from '@/store/withRedux';

class MyApp extends App<any, any> {
  // static async getInitialProps({ Component, ctx, }: AppContext) {
  //   let pageProps = {};
  //   console.log(ctx,Component.getInitialProps)
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   return { pageProps };
  // }
  render(): React.ReactElement {
    const { pageProps, Component, reduxStore, isServer } = this.props;
    console.log(config , '===');
    const HOCComponent = HOC(Component);
    return (
      <ConfigProvider locale={zh_CN}>
        <Provider store={reduxStore}>
          <Layout>
            <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <HOCComponent {...pageProps} isServer={isServer} />
            </AnimatePresence>
          </Layout>
        </Provider>
      </ConfigProvider>
    );
  }
}
export default withRedux(MyApp);
