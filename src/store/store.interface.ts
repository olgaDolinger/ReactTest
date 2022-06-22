import { News } from "./news/news.slice";
import { User } from "./users/users.slice";

interface WithUser{
    user: User
}

interface WithNews{
    news: News
}

export interface StoreInterface extends WithUser, WithNews {}