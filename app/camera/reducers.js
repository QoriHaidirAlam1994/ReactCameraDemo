const initialState = {
    results: [], //GET ALL
    Getdata: {},  //GET by ID
    add:{},
    isLoading: false
}

const cameraReducer = ( state = initialState , action )=>{
    switch (action.type) {
      case "FETCH_Camera_PENDING":
        return { ...state, isLoading: true };
        case "FETCH_Camera_FULFILLED":
        return { ...state, isLoading: false, results: action.payload.data };
        case "GET_Camera_PENDING":
        return { ...state, isLoading: true };
        case "GET_Camera_FULFILLED":
        return { ...state, isLoading: false, Getdata: action.payload.data };
        case "GET_Camera_REJECTED":
        alert("REJECTED");
        return { ...state, isLoading: false, Getdata: action.payload.data };
        case "ADD_Camera_PENDING":
        return { ...state, isLoading: true };
        case "ADD_Camera_FULFILLED":
        state.results.push(action.payload.data);
        return { ...state, isLoading: false };
        case "ADD_Camera_REJECTED":
        return { ...state, isLoading: false, add: action.payload.data };

      default:
        return state;
    }
}

export default cameraReducer