import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Video from './Video';
import OneCord from './OneCord';
import About from './About';

export default function App({ initState }) {
  const [modalRegActive, setModalRegActive] = useState(false);
  const [modalInActive, setModalInActive] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Video path="/" setActiveIn={setModalInActive} activeIn={modalInActive} activReg={modalRegActive} setActiveReg={setModalRegActive} />} />
      </Routes>

      <About active={modalRegActive} setActive={setModalRegActive} />
      <OneCord active={modalInActive} setActive={setModalInActive} />
    </>
  );
}
