import React, { Component } from 'react';
import Header from '../common/Header/Header';
import './home.scss';
class Home extends Component {
    
    render() {
         return (
            <div className="home">
                <Header>首页</Header>
                <h1>home</h1>
            </div>
        );
    }
}

export default Home;