import { createSlice, PayloadAction, Store } from "@reduxjs/toolkit";

export interface Article{
    title: string,
    content: string,
    image?: string,
    author?: string,
    date?: string,
}


const articleTemplate: Article = {
    title: 'new article',
    content: 'Here you can post your updte',
    author: '',
}

export interface News{
    news:Array<Article>;
    template: Article;
}

const initialState:News = {
    news: [],
    template: articleTemplate
} 

export const newsSlice = createSlice({
    name: 'newsSlice',
    initialState: initialState,
    reducers:{
        publishArticle: (state: News, payload: PayloadAction<Article> ) => {
            const article = payload.payload as Article;
            state.news.push(article);
        }
    }
});

const {actions, reducer} = newsSlice;

export {actions};
export default reducer;


