import React from 'react';
import Modal from './About';

export default function Video({
  setActiveIn, setActiveReg,
}) {
  const clickHandlerIn = () => {
    setActiveIn(true);
  };
  const clickHandlerReg = () => {
    setActiveReg(true);
  };

  return (
    <div className="body_video">
      <div className="full-screen__body">
        <div className="full-screen__title">Cords Helper</div>
        <div className="full-screen__text">Википедия аккордов</div>
      </div>
      <video poster="video/preVideo.png" autoPlay muted loop preload="auto" className="full-screen__video">
        <source type="video/mp4" src="/video/Cord.webm" />
      </video>
      <div onClick={clickHandlerReg} className="btn reg from-left">Контакты</div>
      <div onClick={clickHandlerIn} className="btn in from-right open-btn">Найти аккорд</div>

    </div>

  );
}
