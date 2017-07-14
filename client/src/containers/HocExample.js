import React , {Component} from 'react';
import HocChild from './HocChild';

export default class HocExample extends Component{
    constructor(){
        super();

        this.state = {
            currency: {}
        }
    }

    componentWillMount(){
        setTimeout(() => {
            fetch('http://api.fixer.io/latest?base=USD')
                .then((res) => res.json())
                .then((data) => this.setState({currency : data}))
        }, 1500)
    }

    render(){
        return(
            <HocChild currency = {this.state.currency}/>
        )
    }
}