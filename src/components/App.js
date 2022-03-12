import React from 'react';
import AppShell from './AppShell'; //화면에 AppShell.js에서 설정한 내용을 보이게 설정

//React.Component를 상속받아 기본함수인 render함수 안에 실제 화면에 출력될 내용을 나타냄
class App extends React.Component {
    render() {
        return (
            <AppShell/> //사용자가 메인페이지인 App.js에 접속하면 AppShell의 내용 출력
        );
    }
}

export default App;
//App 컴포넌트를 main.js에서 사용할 수 있게 설정