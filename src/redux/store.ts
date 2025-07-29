import { legacy_createStore } from "redux";

const reducer = (state= 0, action:any)=>{
switch(action.type){
    case '+' : return state + 1
    case '-' : return state -1
    default : return state 
}
}
export const store = legacy_createStore(reducer)