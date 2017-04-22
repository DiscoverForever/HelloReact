import React, { Component } from 'react';
import Title from '../common/title';

class login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optionValue: 1
        };
    }
    componentDidMount() {
       console.log(this.props.location);
        
    //    console.log(this.props.location.state.username);
    }
    handlerChange(event, id) {
        console.log(id);
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
                        <input type="text" onChange={(event) => this.handlerChange(event,1)} />
                    </div>
                    <div>
                        <label htmlFor="">密码</label>
                        <input type="password" />
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default login;