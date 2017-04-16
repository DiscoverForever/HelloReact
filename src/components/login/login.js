import React, { Component } from 'react';
import Title from '../common/title';

class login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optionValue: 1
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        console.log('will mount');
    }
    componentDidMount() {

    }
    componentWillUnmount() {
        consoe.log('will unmount');
    }
    componentDidUpdate(prevProps, prevState) {

    }
    handleChange(event) {
        this.setState({ optionValue: event.target.value });
        console.log(this.state.optionValue);
    }
    render() {
        const list = ['1', '2', '3', '1'];
        const listItem = list.map((number, index) => {
            // key 防止数组item重复
            return <li key={index}>{number}</li>;
        });
        return (
            <div>
                <Title name="我是登录页"></Title>
                <div className="base" {...this.props}>{listItem}</div>
                <select name="" id="" onChange={this.handleChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
        );
    }
}

export default login;