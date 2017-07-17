/**
 * Created by Horizone on 15.07.2017.
 */
import React, {Component} from 'react';
import ws from 'util/ws';

export default class ChatControl extends Component{

    handleClick(){
        let text = this.textarea.value;
        console.log(text);
        ws.emit(text);
        this.textarea.value='';
    }

    render(){
        return(
            <div class="chat-message clearfix">
                <textarea name="message-to-send"
                          id="message-to-send"
                          placeholder ="Type your message"
                          rows="3"
                          ref = {(textarea) => this.textarea = textarea}
                >

                </textarea>

                <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                <i class="fa fa-file-image-o"></i>

                <button onClick={this.handleClick.bind(this)}>Send</button>

            </div>
        )
    }
}