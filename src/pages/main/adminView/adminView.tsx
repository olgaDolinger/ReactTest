
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "../../../store/store.interface";
import * as S from '../main.styled';
import { actions, Article } from '../../../store/news/news.slice';
import { useRef } from "react";

const AdminView = () => {
  const dispatch = useDispatch();
  const news = useSelector((store: StoreInterface) => store.news.news)

  const editableNews = useRef(null);

  const renderNews = () => {
    return(news.map((item: Article) => <S.TextEdtor value={item.content } disabled={true}/>))
  }

  const addNews = () => {
    if(editableNews.current.value.length === 0){
      return;
    }

    dispatch(actions.publishArticle({
      title: 'test',
      content: editableNews.current.value,
      })
    )
    editableNews.current.value = '';
  }

    return (
        <>
          {renderNews()}
          <S.TextEdtor ref={editableNews} placeholder='Type your text here'></S.TextEdtor>
          <S.AddArticleButton onClick={addNews}>Publish</S.AddArticleButton>
        </>
    )
}

export default AdminView;