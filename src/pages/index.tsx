import React from 'react';
import '../styles/home.scss';
import Loadable from 'react-loadable';

const loader = () => <div></div>;

const HomeLazy = Loadable({
  loader: () => import('../containers/Main'),
  loading: loader,
});

const Index = () => {
  return <HomeLazy />;
};
export default Index;
