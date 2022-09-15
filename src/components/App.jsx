import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Modal from './Modal';
import Video from './Video';

export default function App({ initState }) {
  const [modalActive, setModalActive] = useState(false);
  console.log('APP:', modalActive);
  return (
    <>
      <Routes>
        <Route path="/" element={<Video path="/" setActive={setModalActive} />} />
      </Routes>

      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}
