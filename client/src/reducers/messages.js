import constants from 'constants/index'

const initialState = [];

const messagesReducer = (state = initialState, action)=>{
    console.log(5000, action)
    switch(action.type){
        case constants.NEW_MESSAGE:
            return state.concat({  author: action.author, text:action.text, time: action.time, color: action.color})

    }
    return state;;
}

export default messagesReducer;