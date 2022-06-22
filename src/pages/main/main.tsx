import React from 'react';
import { useSelector } from 'react-redux';
import { StoreInterface } from '../../store/store.interface';
import AdminView from './adminView/adminView';
import UserView from './userView/userView';


const Main = () => {

  const isUserLoggedIn = useSelector((store: StoreInterface) => store.user.isUserLoggenIn);
  const isAdmin = useSelector((store: StoreInterface) => store.user.userData.isAdmin);

  return (
    <>  
      {isUserLoggedIn && isAdmin ? AdminView() : UserView()}
    </>
    )
  }
export default Main;