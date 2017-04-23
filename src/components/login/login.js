import React, { Component } from 'react';
import Title from '../common/Title/title';
import store from '../../store';
class login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            optionValue: 1,
            isLogin: false,
            text: 'login'
        };
    }
    componentDidMount() {
        console.log(this.props.location);
        store.subscribe(this.listenChange.bind(this));
    }
    handlerChange(event, id) {
        // console.log(id);
    }
    listenChange() {
        console.log('state was change');
        this.setState({ isLogin: store.getState().loginState });
    }
    getStore() {
        store.dispatch({ type: 'UPDATE_LOGIN_STATE' });
        console.log(store.getState());
    }
    login() {
        console.log(this.state.optionValue);
    }
    render() {
        return (
            <div>
                <Title name="test"></Title>
                <form action="">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <label htmlFor="">用户名</label>
                        <input type="text" onChange={(event) => this.handlerChange(event, 1)} />
                    </div>
                    <div>
                        <label htmlFor="">密码</label>
                        <input type="password" />
                    </div>
                    <input type="submit" />
                    <button onClick={this.login}>login</button>
                    <button onClick={this.getStore}>getStore</button>
                    <button>{store.getState().loginState ? '已登录' : '未登录'}</button>
                </form>
            </div>
        );
    }
}

export default login;