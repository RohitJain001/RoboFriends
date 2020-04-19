import { CHANGE_SEARCH_FIELD , REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED} from "./constants";

export const setSearchField =(text) =>({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})

//dispatch() is the method used to dispatch actions and trigger state changes to the store. react-redux is simply trying to give you convenient access to it. Note, however, that dispatch is not available on props if you do pass in actions to your connect function

export const requestRobots = () => (dispatch) =>{
    dispatch({type : REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json())
        .then(data => dispatch({ type:REQUEST_ROBOTS_SUCCESS , payload : data}))
        .then(error => dispatch({ type : REQUEST_ROBOTS_FAILED , payload : error}))
}
