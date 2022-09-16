import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';

export default function About({ active, setActive }) {
  const clickHandler = (e) => {
    e.preventDefault();

    setActive(false);
  };

  return (
    <div>

      <div className={active ? 'modal active' : 'modal'}>

        <div className="background" style={{ display: 'flex', justifyContent: 'space-between' }} />
        <form>
          <h3>Свяжитесь с нами!</h3>

          <div className="mySearch">
            <a href="http://qrcoder.ru" target="_blank" rel="noreferrer" />
            <img
              src="http://qrcoder.ru/code/?https%3A%2F%2Fgithub.com%2F6ase%2F&6&0"
              width="198"
              height="198"
              border="0"
              title="QR код"
            />

            <div className="btns">

              <button onClick={clickHandler} type="submit">Закрыть</button>

            </div>

          </div>

          <div className="myContent" />
        </form>

      </div>

    </div>

  );
}
