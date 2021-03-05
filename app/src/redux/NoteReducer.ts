export interface noteState{
    notes:string[]
}
const initState = {
    notes:[]
}
type Action = {type:"ADD_NOTE",payload:string};

export const NoteReducer = (state:noteState = initState,action:Action)=>{
    switch (action.type) {
        case "ADD_NOTE":
            return {...state,notes:[...state.notes,action.payload]}; 
            //...state.note -> như vậy dữ liệu mới không bị đè lên thành undefined
        default:
            return state;
    }
}