import React from "react";
import {RegistrationLink} from './RegistrationLink';
import {LoginLink} from './LoginLink';
import {LogoutLink} from './LogoutLink';

export type RegistrationActionsType = {
  isAuth: boolean;
  changeIsAuth: (isAuth: boolean) => void
}

export const RegistrationActions = ({isAuth, changeIsAuth}: RegistrationActionsType) => {
  return (
    <div className={'registrationActions'} style={{color: 'green'}}>
      {isAuth ? <div>
        <button>личный кабинет</button>
        |
        {/*<button onClick={() => {*/}
        {/*  changeIsAuth(false)*/}
        {/*}}>выйти</button>*/}
        <button onClick={() => {
          changeIsAuth(false)
        }}>
          <LogoutLink/>

        </button>

      </div> : <div>
        <RegistrationLink/>
        |
        {/*<button onClick={() => {*/}
        {/*  changeIsAuth(true)*/}
        {/*}}>войти</button>*/}
        <button onClick={() => {
          changeIsAuth(true)
        }}>
          <LoginLink/>

        </button>
      </div>}
    </div>
  )
}