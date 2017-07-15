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
                <br/>
                Time: {this.props.timeDiff}
            </div>
        )
    }
}

export default hocLoader('currency')("https://media1.giphy.com/media/3o6Zt5eJWfaJEUKYbm/200w.webp#17-grid1")(HocChild)
