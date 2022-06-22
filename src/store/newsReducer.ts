import { ADD_NEWS } from "./types";

export type News= {
    news: string,
    date: string
}

export type ActionNews = {
    type: string,
    payload: News
}

const initialState: Array<News> = new Array<News>();

export const newsReducer = (state: any = initialState, action: ActionNews)=>{
    switch(action.type){
        case ADD_NEWS:{
            const {date, news} = action.payload;
            return state.concat({news, date});
        }
        default:{
            return state;
        }
    }

    return state;

}