import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { actions } from "../../store/users/users.slice";
import * as S from './login.styled'

const LoginView = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const onLoginClicked = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(actions.userLogin({ user: userName, password, isAdmin: false}));
        setPassword('');
        setUserName('');
        navigate('/user');
    }

    const handleUserNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handlePasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return(
        <S.LofginForm onSubmit={onLoginClicked}>
                <label>User name</label>
                <input onChange={handleUserNameChanged} value={userName}/>
                <label>Password</label>
                <input type='password' onChange={handlePasswordChanged} value={password}/>
                <S.Submit  type='submit' >Submit</S.Submit>
        </S.LofginForm>
    )
}

export default LoginView;