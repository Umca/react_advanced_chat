import React, {Component} from 'react';
import ws from 'util/ws'

export default (ChildComponent) => {
    return class HOC extends Component{
        auth(){
            if(localStorage.getItem('userName')){
                return true;
            }

            let name = prompt('Enter your name: ')

            if(!name || !name.trim().length){
                return false;
            }


            localStorage.setItem('userName', name);

            ws.emit(name);

            return true;
        }
        noName(){
                return(
                    <div>
                        Please, try one more time
                       <br/>
                        <button onClick={()=>location.reload()}>PUSH ME</button>
                    </div>
                )
        }
        render(){
            return(
                 this.auth() ? <ChildComponent /> : this.noName()
            )
        }
    }
}
