import React from 'react';
import Modal from './Modal';

export default function Video({ setActive }) {
  const clickHandler = () => setActive(true);

  return (
    <div className="body_video">
      <div className="full-screen__body">
        <div className="full-screen__title">Cords Helper</div>
        <div className="full-screen__text">Википедия аккордов</div>
      </div>
      <video poster="video/preVideo.png" autoPlay muted loop preload="auto" className="full-screen__video">
        <source type="video/mp4" src="/video/Cord.webm" />
      </video>
      <div className="btn reg from-left">Регистрация</div>
      <div onKeyPress={clickHandler} tabIndex={0} role="button" className="btn in from-right open-btn">Войти</div>

    </div>

  );
}
