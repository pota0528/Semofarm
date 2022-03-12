import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; //리액트 라우터를 위한 링크 설정
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles'; //material-ui 직접 디자인 설정
import AppBar from '@material-ui/core/AppBar'; //네비게이션 바 생성
import Drawer from '@material-ui/core/Drawer'; //네비게이션을 보이게 해줌
import MenuItem from '@material-ui/core/MenuItem'; //네비게이션에 들어가는 아이템
import IconButton from '@material-ui/core/IconButton'; //Appbar의 왼쪽에 들어갈 아이콘
import MenuIcon from '@material-ui/icons/Menu'; //material-ui의 메뉴를 불러옴

const styles = { //위에서 withStyles를 import 했으므로 직접 만든 스타일 적용 가능
    root: {      //CSS와 같은 역할
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto' //네비게이션 바의 왼쪽에 메뉴버튼을 넣기 위해 왼쪽정렬
    }
}


class AppShell extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }; //리액트의 컴포넌트를 상속받아 state로 toggle이라는 변수를 생성
    }     //Drawer가 네비게이션이 현재 열려있는 상태인지 아닌지 알려주는 역할
    handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    // 이 함수가 수행되면 토글 변수 값을 switch 해줌
    render() {  //render 함수를 이용해 classes 안에 별도의 디자인을 넣을 수 있도록 설정
        const { classes } = this.props; 
        return ( //실제 네이게이션 바가 어떻게 보여지게 할지 설정
            <div>
                <div className={classes.root}> 
                <AppBar position="static">
                    <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                        <MenuIcon/>
                    </IconButton>
                </AppBar>
                <Drawer open={this.state.toggle}>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/">
                            Home
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/texts">
                            Texts
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/words">
                            Words
                        </Link>
                    </MenuItem>
                </Drawer>
                </div>
                <div id="content" style={{margin: 'auto', marginTop: '20px'}}>
                    {React.cloneElement(this.props.children)}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AppShell);