import React from 'react';
import style from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={style.notification}>
      <p className={style.notification__message}>{message}</p>
    </div>
  );
};
export default Notification;
