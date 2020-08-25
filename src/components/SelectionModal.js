import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SelectionModal = ({ show, setShow, setCharacterInfo, characterList }) => {
  const handleSelect = (e) => {
    let chosenOne = characterList.find((item) => item.id === e.target.id);
    setCharacterInfo(chosenOne);
    setShow(false);
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Which one?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {characterList
          ? characterList.map((character) => {
              return (
                <a id={character.id} onClick={handleSelect}>
                  {character.biography['full-name']}
                </a>
              );
            })
          : null}
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default SelectionModal;
