import React from 'react';

export default function Modal(active, setActive) {
  const clickHandler = () => setActive(false);
  console.log('MODAL:', active);
  return (
    <div>

      <div className={!active ? 'modal active' : 'modal'} onKeyPress={clickHandler} tabIndex={0} role="button">

        <div className="modal__content" role="button" tabIndex={0} onKeyPress={(e) => e.stopPropagation()}>123</div>

      </div>
    </div>
  );
}
