import React from 'react';
import ErrorPage from '../ErrorPage';

interface IState {
  hasError: boolean;
}
const HOC = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
  return class wrapperCom extends React.Component<P, IState> {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
      };
    }
    static getDerivedStateFromError(error) {
      console.log(error);
      return { hasError: true };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      console.log(errorInfo, '===================');
    }
    render(): React.ReactNode {
      if (this.state.hasError) return <ErrorPage />;
      return (
        <div className="hoc">
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};
export default HOC;
