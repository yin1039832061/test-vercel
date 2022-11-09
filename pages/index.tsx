// import Home from './home';
// export default Home;

const Index = () => {
  return <></>;
};
Index.getInitialProps = ({ res }) => {
  res.statusCode = 302;
  res.setHeader('location', '/home');
  res.end();
  return {};
};
export default Index;
