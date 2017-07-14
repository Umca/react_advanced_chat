import React, {Component} from 'react';


export default function hocLoader (propName){

    return (ChildComponent) => {

        return class extends Component{

            propsIsEmpty(){

                const prop = this.props[propName];

                if(!prop ||
                    (prop.hasOwnProperty('length') && !prop.length) ||
                    !Object.keys(prop).length){
                    return true;
                }
                return false;
            }

            loaderComponent(){
                return(
                    <div><img src="https://media1.giphy.com/media/3o6Zt5eJWfaJEUKYbm/200w.webp#17-grid1" alt="loader"/></div>
                )
            }

            render(){

                return(
                    <div style={{background: '#fff', color:'black', padding: '200px', }}>
                        {this.propsIsEmpty() ? this.loaderComponent() : <ChildComponent {...this.props} />}
                    </div>
                )
            }
        }
    }


}
