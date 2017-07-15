import React, {Component} from 'react';


export default function hocLoader (propName){

   return (loaderPath) => {

       return (ChildComponent) => {

           return class extends Component{

               componentDidMount(){
                   this.startTime = Date.now()
               }

               componentWillReceiveProps(){
                   this.endTime = Date.now()
               }

               timeDifference(){
                   return this.endTime - this.startTime;
               }

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
                       <div><img src={loaderPath} alt="loader"/></div>
                   )
               }

               render(){

                   const newProp =  {
                       timeDiff: this.timeDifference()
                   }

                   return(
                       <div style={{background: '#fff', color:'black', padding: '50px', }}>
                           {this.propsIsEmpty() ? this.loaderComponent() : <ChildComponent {...this.props}  {...newProp} />}
                       </div>
                   )
               }
           }
       }
   }




}
