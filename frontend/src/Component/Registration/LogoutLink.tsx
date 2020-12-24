import React from 'react';
import {useHistory} from "react-router-dom";

export const LogoutLink = () => {
  const history = useHistory();
  const navigateTo = () => history.push('/logout');//eg.history.push('/login');

  return (
    <div>
      <button onClick={navigateTo}>Выйти</button>
    </div>
  )
}