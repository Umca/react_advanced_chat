import React, {Component} from 'react';
import {connect} from 'react-redux';

class PeopleList extends Component{
    render(){
        return(
                                        <div class="people-list" id="people-list">
                <div class="search">
                    <input type="text" placeholder="search" />
                    <i class="fa fa-search"></i>
                </div>
                <ul class="list">
                    {this.props.people.map((p)=>{
                        return(
                            <li class="clearfix" key={p.name}>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                                <div class="about">
                                    <div class="name">{p.name}</div>
                                    <div class="status">
                                        <i class="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                        )
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