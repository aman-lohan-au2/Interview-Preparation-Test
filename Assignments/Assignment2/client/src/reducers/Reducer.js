function Reducer(state={data:[]},action){

    switch(action.type){
        case "Details":
            return Object.assign({}, state, { 
               data:action.payload
            });

                default : return state;
    }
}
export default Reducer;