import React , {Component} from 'react';
import PeopleList from 'containers/PeopleList'
import MessagesList from 'containers/MessagesList'

export default class Chat extends Component{
    render(){
        return(
            <div class="container clearfix">
                <PeopleList />
                <MessagesList />
            </div> 
        )
    }
}