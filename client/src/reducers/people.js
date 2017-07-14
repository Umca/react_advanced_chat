const initialState = [
    {name: "Darth", src: ""},
    {name: "Lucke", src: ""},
    {name: "Obi van Kenoby", src: ""},
    {name: "Leya", src: ""},
    {name: "R2D2", src: ""},
    {name: "Han Solo", src: ""},
    {name: "Chubacka", src: ""},

]
const peopleReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_NEW_USER": 
            return state.concat({name:'CTriPO', src:""})
    }
    return state;
}

export default peopleReducer;