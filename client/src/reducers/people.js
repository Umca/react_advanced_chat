import constants from 'constants/index';

const initialState = [
    {name: "Darth", src: ""},
    {name: "Lucke", src: ""},
    {name: "Obi van Kenoby", src: ""},
    {name: "Leya", src: ""},
    {name: "R2D2", src: ""},
    {name: "Han Solo", src: ""},
    {name: "Chubacka", src: ""}

];
const peopleReducer = (state = [], action)=>{
    switch(action.type){
        case constants.CONNECTED_NEW_USER:
            return state.concat({name: action.username, src:"", id: action.userId})
        case constants.DISCONNECTED_USER:
            return state.filter((user) => user.id !== action.userId)
    }
    return state;
}



export default peopleReducer;