/**
 * Created by Horizone on 15.07.2017.
 */
import React, {Component} from 'react';
 export default class MessageItem extends Component {
    render(){
        const {author, text, color} = this.props;
        return(
            <ul>
                <li class="clearfix">
                    <div class="message-data align-right">
                        <span class="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                        <span class="message-data-name" >{author}</span> <i class="fa fa-circle me"></i>

                    </div>
                    <div class="message other-message float-right" style={{backgroundColor: color }}>
                        {text}
                    </div>
                </li>

            </ul>
        )
    }
}