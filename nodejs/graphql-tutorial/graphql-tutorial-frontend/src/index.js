import { Fragment, React } from 'react';
import reactDom from 'react-dom';
import App from './App';

reactDom.render((
  <Fragment>
    <App />
  </Fragment>
), document.getElementById('root'))