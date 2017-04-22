'use strict';


import React from 'react';
import ReactDom from 'react-dom';
import Title from './common/title';
import { Router, Route, hashHistory, Link } from 'react-router';
import Login from './login/login';
import NavBar from './common/navBar/NavBar';
import '../styles/reset.scss';
import '../styles/rem.scss';


var App = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><Link to="/list">list page</Link></div>
                <div><Link to="/detail">detail page</Link></div>
                <div><Link to="/title">My page</Link></div>
                <div><Link to="/login">Login Page</Link></div>
            </div>
        );
    }
});

var List = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="/">返回首页</a></div>
                <div>这是列表页</div>
            </div>
        );
    }
});

var Detail = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
    }
});

//最终渲染
ReactDom.render((
    <div>
        <Router history={hashHistory}>
            <Route path='/' component={App}></Route>
            <Route path='/list' name="list" component={List} />
            <Route path='/detail' component={Detail} />
            <Route path='/title' component={Title}/>
            <Route path='/login' component={Login}/>
        </Router>
        <NavBar></NavBar>
    </div>
), document.getElementById('app'));
