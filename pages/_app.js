import React, { Fragment } from 'react';
// import { store, persistor } from '../redux';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// global styles
import 'rc-slider/assets/index.css';
import '../assets/Scss/styles.scss';
import '../assets/Scss/mediaStyle.css';
import '../assets/Scss/main.scss';
// import '../assets/Scss/main.css';

import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';




const MyApp = ({ Component, pageProps }) => (



  <Fragment>
    {/* <Provider store ={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Component {...pageProps} />
    {/* </PersistGate> */}
    {/* </Provider> */}
  </Fragment>
);

export default MyApp;
// export default wrapper.withRedux(MyApp);