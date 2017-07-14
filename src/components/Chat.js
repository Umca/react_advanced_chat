import React , {Component} from 'react';
import PeopleList from 'containers/PeopleList'
import MessagesList from 'containers/MessagesList';
import {Provider} from 'react-redux';
import chatStore from 'store/index';

window.store = chatStore;

export default class Chat extends Component{
    render(){
        return(
                <Provider store = {chatStore} key={Date.now()}>
                    <div class="container clearfix">
                        <PeopleList />
                        <MessagesList />
                    </div>
                </Provider>
        )
    }
}