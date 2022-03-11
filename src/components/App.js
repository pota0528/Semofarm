import React from 'react';

//React.Component를 상속받아 기본함수인 render함수 안에 실제 화면에 출력될 내용을 나타냄
class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Hellow World!</h2>
            </div>
        );
    }
}

export default App;
//App 컴포넌트를 main.js에서 사용할 수 있게 설정