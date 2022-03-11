import React from 'react'; //React 라이브러리에서 react 컴포넌트를 불러오게 설정
import ReactDOM from 'react-dom'; //설치한 React-dom에 react-dom 컴포넌트를 불러오게 설정
import App from './components/App'; //components 폴더에 있는 App 컴포넌트를 불러오게 설정

ReactDOM.render(<App/>, document.getElementById('app'));
//실제 사용자가 보게 될 화면에서 app이라는 공간에 App 컴포넌트를 그리게끔 설정