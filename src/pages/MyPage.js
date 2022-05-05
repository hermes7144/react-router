import {Navigate} from 'react-router-dom';

import React from 'react'

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn){
    return <Navigate to="/login" replace={true}></Navigate>
  }
  return <div>마이 페이지</div>;
}

export default MyPage