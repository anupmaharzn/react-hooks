import React from 'react';

import App1 from './usestate';
import App2 from './useeffect';
import App3 from './usememo';
import App4 from './useref';
//import App5 from './usecontext/usecontext';
import App6 from './customhook';
function App() {

  return (
    <>
      <p>lets start</p>
      <App1 />
      <br />
      <App2 />
      <br />
      <App3 />
      <br></br>
      <App4 />
      <br />
      {/* / <App5 /> */}
      <App6 />
    </>


  );
}

export default App;
