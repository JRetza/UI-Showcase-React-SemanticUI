import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './Components/App.jsx';

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
  module.hot.accept('./Components/App.jsx', renderApp);
}
