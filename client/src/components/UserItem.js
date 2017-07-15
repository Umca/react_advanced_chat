import React, {Component} from 'react';

export default class UserItem extends Component{
    render(){
        console.log(500, this.props.user.id)
        return (
            <li class="clearfix" key={this.props.user.id}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                <div class="about">
                    <div class="name">{this.props.user.name}</div>
                    <div class="status">
                        <i class="fa fa-circle online"></i> online
                    </div>
                </div>
            </li>
        )
    }
}