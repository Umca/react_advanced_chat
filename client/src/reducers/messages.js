import constants from 'constants/index'

const initialState = [];

const messagesReducer = (state = initialState, action)=>{
    switch(action.type){
        case constants.NEW_MESSAGE:
            return state.concat({ text:action.text, author: action.author, time: action.time})

    }
    return state;;
}

export default messagesReducer;