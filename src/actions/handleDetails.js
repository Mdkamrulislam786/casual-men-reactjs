import {HANDLE_DETAILS} from './types'

const handleDetails = (id) => {
    return (dispatch) => {
        console.log("handling details");
    
        dispatch({
          type: HANDLE_DETAILS,
          payload: id
        });
      };
}
export default handleDetails


