import React, {Component} from 'react';
import ChatHeader from 'components/ChatHeader';
import MessageItem from 'components/Messageitem';
import ChatControl from 'components/ChatControl';
import {connect} from 'react-redux';

class MessagesList extends Component{

    componentDidUpdate(){
        this.chatWrapper.scrollTop = this.ul.scrollHeight;
    }

    render(){
        return(
               <div class="chat">
                   <ChatHeader />
                <div class="chat-history" ref={(div) => this.chatWrapper = div} >
                    <ul ref={(ul)=> this.ul = ul}>
                        {this.props.messages.map((message)=> {
                            return <MessageItem  key={message.time}{...message}/>
                        })}

                    </ul>
                    
                </div>
                
                <ChatControl />
                
                </div>
        )
    }
}
function mapStateToProps(state){
    return {
        messages: state.messagesReducer
}
}
function mapDispatchToProps(dispatch){
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList)