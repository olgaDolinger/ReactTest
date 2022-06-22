import { News } from './newsReducer';
import { LOGIN } from './types';

export const login = (payload: News) => {
    return{
        type: LOGIN,
        payload: payload,
    }
}