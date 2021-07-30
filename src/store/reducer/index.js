const INITIAL_STATE = {
    name: "expertizo",
    age:""
}

export default (state = INITIAL_STATE,action)=>{

    console.log("action",action)


    switch(action.type) {
        case "userage": {
          return { ...state, age: action.payload }
        }
     
        default: {
          return state
        }
      }

    

}