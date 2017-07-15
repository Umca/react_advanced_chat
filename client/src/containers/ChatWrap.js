import React , {Component} from 'react';
import MessagesList from './MessagesList';
import PeopleList from './PeopleList'
import authHOC from './authHOC';

class ChatWrap extends Component{
    render(){
        return(
            <div>

                <PeopleList />
                <MessagesList />

            </div>
        )
    }
}

export default authHOC(ChatWrap)
