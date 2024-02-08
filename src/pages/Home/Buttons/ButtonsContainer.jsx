import React, { useState } from "react";
import styled from "styled-components";

import { BlueButton as ListMeetingsButton } from "./buttonComposition";
import { BlueButton as JoinMeetingButton } from "./buttonComposition";

import { NewMeetingButton } from "./InstantMeetingButton";
// import { JoinMeetingButton } from "../Dialogs/JoinMeetingModal";

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 80px;
  padding: 1;
  width: 50%;
  height: 200px;
  flex-direction: row | row-reverse | column | column-reverse;
`;

export default function ButtonsContainer(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  // Handle data received from child component table switch button
  const handleListMeetingsClick = (event) => {
    event.preventDefault();
    try {
      props.onDataReceived(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>

        <DivContainer>
          <NewMeetingButton />

          <ListMeetingsButton text="list" label="List" onClick={handleListMeetingsClick} />

          <JoinMeetingButton text="add" label="Join" onClick={openModal} />

          {showModal ? <JoinMeetingModal setShowModal={setShowModal} /> : null}

        </DivContainer>

    </>
  );
}