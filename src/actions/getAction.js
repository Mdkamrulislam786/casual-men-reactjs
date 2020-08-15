import {GET_NUMBERS_BASKET} from './types'

const getNumbers = () => {
    return (dispatch) => {
        console.log("getting all to basket");
    
        dispatch({
          type: GET_NUMBERS_BASKET
        });
      };
}

export default getNumbers

