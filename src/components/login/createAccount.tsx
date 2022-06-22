import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/users/users.slice";
import * as S from './login.styled'

const CreateAccount = () => {
    const dispatch = useDispatch();

    const onCreateAccountClicked = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(actions.userLogin({ user: 'test', password: 'pass', isAdmin: false}));
    }

    return(

        <S.LofginForm onSubmit={onCreateAccountClicked}>
            <label>User name</label>
            <input></input>
            <label>Password</label>
            <input type='password'></input>
            <label>Confirm password</label>
            <input type='password'></input>
            <S.Submit type='submit' >Submit</S.Submit>
        </S.LofginForm>

    )
}

export default CreateAccount;

