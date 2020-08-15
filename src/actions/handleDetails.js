import {HANDLE_DETAILS} from './types'

const handleDetails = () => {
    return (dispatch) => {
        console.log("handling details");
    
        dispatch({
          type: HANDLE_DETAILS
        });
      };
}
export default handleDetails


