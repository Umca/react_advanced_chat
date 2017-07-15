/**
 * Created by Horizone on 15.07.2017.
 */
import React, {Component} from 'react';

export default class SearchPeople extends Component{
    render(){
        return(
            <div class="search">
                <input type="text" placeholder="search" />
                <i class="fa fa-search"></i>
            </div>
        )
    }
}