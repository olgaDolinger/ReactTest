
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User{
    currentUserId: Number,
    isUserLoggenIn: Boolean,
    userData: UserData,
}

const initUserData: UserData = {
  user: '0',
  password: '',
  isAdmin: true
}

// TODO: temp:
// isUserLoggenIn: false - correct;

const initialState: User = {
  currentUserId: 0,
  isUserLoggenIn: true,
  userData: initUserData
}

export interface UserData {
    user: string;
    password: string;
    isAdmin: boolean;
}

export const usersSlice = createSlice(
  {
    name: 'userReducer',
    initialState,
    reducers: {
      userLogin: (state: any, action: PayloadAction<UserData>) => {
        const { user, password, isAdmin } = action.payload
        return { ...state, userData: { user, password, isAdmin }, isUserLoggenIn: true }
      }
    }
  }
)

const { actions, reducer } = usersSlice

export { actions }
export default reducer
