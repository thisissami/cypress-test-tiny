import React, { useState } from 'react';
import ModalForm from './ModalForm';

export default () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModalVisibility = () => { setModalIsOpen(!modalIsOpen) };

  return (
    <main>
      <h1>Ruh-roh! It's a Cypress bug!</h1>
      <ModalForm modalIsOpen={modalIsOpen} closeModal={toggleModalVisibility} />

      <button onClick={toggleModalVisibility}>Toggle Modal Visibility</button>

      {/* Comment out the rest of this component to test without the background jumping.
        It's also buggy! The click is not centered on the `div` that should be clicked! */}

      <br /><br />
      {
        Array(42).fill(1).map((_, i) => (
          <h2 key={i}>Helping make the Y dimension long! {i+1}</h2>
        ))
      }
    </main>
  );
};
