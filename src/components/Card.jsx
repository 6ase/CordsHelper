import React from 'react';

export default function Card({ chord }) {
  return (
    <div className="card" style={{ width: '23rem' }}>
      <h4 className="card-title d-flex">
        Аккорд:
        {' '}
        {chord.Chord_Name}
        , тип:
        {' '}
        {chord.Chord_Type}
      </h4>
      <img crossOrigin="anonymous" src={chord.Position} className="card-img-top" alt="Chord_possition" />
      <div className="card-body">

        <audio crossOrigin="anonymous" controls="controls">
          Ваш браузер не поддерживает
          {' '}
          <code>audio</code>
          {' '}
          элемент.
          <source src={chord.Audio_Position} type="audio/mpeg" />
        </audio>
      </div>

    </div>
  );
}
