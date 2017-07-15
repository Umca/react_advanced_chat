import constants from 'constants/index'

export const connectedNewUser = (userName, userId)=>{
    return{
        type: constants.CONNECTED_NEW_USER,
        username: userName,
        userId: userId
    }
}

export const disconnectedUser = (userId)=>{
    return{
        type: constants.DISCONNECTED_USER,
        userId: userId
    }
}

export const newMessage = ( author, text, time) => {
    return{
        type: constants.NEW_MESSAGE,
        author: author,
        text: text,
        time: time
    }
}