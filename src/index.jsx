import React from 'react';  
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './Components/App.jsx';

import '../assets/styles/index.scss';

function renderApp() {  
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  );
}

renderApp();

if (module.hot) {  
  module.hot.accept('./components/app/App.jsx', renderApp);
}
