import React from 'react';
import {useHistory} from "react-router-dom";

export const LoginLink = () => {
  const history = useHistory();
  const navigateTo = () => history.push('/login');//eg.history.push('/login');

  return (
    <div>
      <button onClick={navigateTo}>Войти</button>
    </div>
  )
}