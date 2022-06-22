import React from "react";
import * as S from '../main.styled';
import { useSelector } from 'react-redux';
import { StoreInterface } from "../../../store/store.interface";

const UserView = () => {
    const newsStore = useSelector((store: StoreInterface) => store.news)

    return (
        <>
          {newsStore.news.length > 0 ?
          <S.TextEdtor></S.TextEdtor>
          : <S.TextEdtor placeholder='No news added for now'></S.TextEdtor>}
        </>
    )
}

export default UserView;