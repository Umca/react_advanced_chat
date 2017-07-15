import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserItem from 'components/UserItem'
import SearchPeople from 'components/SearchPeople'

class PeopleList extends Component{
    render(){
        console.log(this.props)
        return(
                <div class="people-list" id="people-list">
                    <SearchPeople />
                    <ul class="list">
                        {this.props.people.map((p)=>{
                            return <UserItem user = {p} />
                        })}
                    </ul>
                </div>
        )
    }
}
function mapStateToProps(state){
    return{
        people: state.peopleReducer
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)