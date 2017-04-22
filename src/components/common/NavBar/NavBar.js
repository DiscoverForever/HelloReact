import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import  './NavBar.scss';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleTab = this.handleTab.bind(this);
    }
    /**
     * tab点击事件
     * @param {Number} tabId 
     */
    handleTab(tabId) {
        hashHistory.push({pathname:'login', state: {username:'1111', password: '2222'}});
        console.log(tabId);
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {this.handleTab(0)}}>主页</li>
                    <li onClick={() => {this.handleTab(1)}}>分类</li>
                    <li onClick={() => {this.handleTab(2)}}>购物车</li>
                    <li onClick={() => {this.handleTab(3)}}>我的</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;