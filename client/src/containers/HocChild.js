import React , {Component} from 'react';
import hocLoader from './HocLoader';

class HocChild extends Component{

    render(){

        //const {currency} = this.props.currency;

        return(
            <div>
                Date: { this.props.currency.date }
                <br/>
                1 USD = { this.props.currency.rates['EUR']} USD
            </div>
        )
    }
}

export default hocLoader('currency')(HocChild)
