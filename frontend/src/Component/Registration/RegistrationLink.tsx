import React from 'react';
import {useHistory} from "react-router-dom";

export const RegistrationLink = () => {
  const history = useHistory();
  const navigateTo = () => history.push('/registration');//eg.history.push('/login');

  return (
    <div>
      <button onClick={navigateTo}>Регистрация</button>
    </div>
  )
}