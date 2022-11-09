import React from 'react';
import { initStore } from './index';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';
function getOrCreateStore(initialState = {}) {
  if (isServer) {
    return initStore(initialState);
  }
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}
const withRedux = (Comp) => {
  return class AppWithRedux extends React.Component {
    reduxStore: any;
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore();
      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};
      if (typeof Comp.getInitialProps === 'function') {
        appProps = await Comp.getInitialProps(appContext);
      }
      return {
        ...appProps,
        isServer,
        initailReduxState: reduxStore.getState(),
      };
    }
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initailReduxState);
    }
    render(): React.ReactNode {
      return <Comp {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
export default withRedux;
