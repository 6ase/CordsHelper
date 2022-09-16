import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';

export default function OneCord({ active, setActive }) {
  const [inputAccord, setInputAccord] = useState('');
  const [chordsArray, setChordsArray] = useState([]);
  const [error, setError] = useState(false);
  const imgUrl = 'https://guitar-chords-data.herokuapp.com/images/';
  const audioUrl = 'https://guitar-chords-data.herokuapp.com/audio/';

  const clickHandler = (e) => {
    e.preventDefault();
    setInputAccord('');
    setChordsArray([]);
    setActive(false);
  };
  const inputHandler = (e) => {
    setInputAccord(e.target.value);
  };

  const getChord = (obj, ind) => ({
    Audio_Position: audioUrl + obj[`Audio_Position${ind}`],
    Position: imgUrl + obj[`Position${ind}`],
    Chord_Name: obj.Chord_Name,
    Chord_Type: obj.Chord_Type,
  });

  const infoHandler = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'GET',
        url: 'https://guitar-chords.p.rapidapi.com/select/chord',
        params: { chord: `${inputAccord}` },
        headers: {
          'X-RapidAPI-Key': 'ee4312e066mshc1330721401dbb6p17edf3jsna969ee91fa89',
          'X-RapidAPI-Host': 'guitar-chords.p.rapidapi.com',
        },
      };

      const { data } = await axios.request(options);
      setChordsArray([1, 2, 3].map((el) => getChord(data[0], el)));
      setError(false);
    } catch (error) {
      setError('Такого аккорда не существует');
      setChordsArray([]);
    }
  };

  // console.log('Array:', chordsArray);

  return (
    <div>

      <div className={active ? 'modal active' : 'modal'}>

        <div className="background" style={{ display: 'flex', justifyContent: 'space-between' }} />
        <form>
          <h3>Введите данные</h3>

          <div className="mySearch">

            <label htmlFor="Accord">
              Какой аккорд вас интересует?

              <input type="text" value={inputAccord} onChange={inputHandler} name="Accord" placeholder="A,Fm,C,Dsus2?" id="Accord" />
            </label>
            <div className="btns">

              <button onClick={infoHandler} type="submit">Узнать!</button>
              <button onClick={clickHandler} type="submit">Закрыть</button>

            </div>

          </div>

          <div className="myContent">
            {error ? <h3>{error}</h3> : ''}
            {chordsArray ? chordsArray.map((chord) => <Card chord={chord} key={chord.Audio_Position} />) : ''}
          </div>
        </form>

      </div>

    </div>

  );
}
