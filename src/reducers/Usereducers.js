export const initialState = []

export const reducer = (state,action)=>{
    if(action.type=="USER"){
        return action.payload
    }
    if(action.type=="CLEAR"){
        return null
    }
    if(action.type=="ADD"){
        return [
            ...state,
            action.payload
        ]
    }
    if(action.type=="FIRST"){
        return [
            ...state,
            ...action.payload
        ]
    }
    if(action.type=="UPDATE"){
        return [
            ...action.payload
           
        ]
    }
    return state
}