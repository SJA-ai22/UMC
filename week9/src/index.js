import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode는 굳이 없어도 실행되는데 이상 없고, 나중에 배포했을 경우 자동으로 없는 것처럼 취급
  // 그럼에도 개발 단계에서 사용하는 이유는 혹시 모를 부작용을 방지하기 위해 사용한다고 함
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
