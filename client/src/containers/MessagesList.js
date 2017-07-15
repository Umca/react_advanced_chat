import React, {Component} from 'react';
import ChatHeader from 'components/ChatHeader';
import MessageItem from 'components/Messageitem';
import ChatControl from 'components/ChatControl';
import {connect} from 'react-redux';

class MessagesList extends Component{
    render(){
        return(
               <div class="chat">
                   <ChatHeader />
                <div class="chat-history">
                    <ul>
                        {this.props.messages.map((message)=> {
                            return <MessageItem  key={message.time}{...m}/>
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