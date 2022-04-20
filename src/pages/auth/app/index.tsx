import React from "react";
import { Header, Modal, NavBar } from "../../../components";
import { useDashboardContext } from "../../../contexts/Dashboard";

const App = () => {
  const { settingsIsOpen, handleToggleModal } = useDashboardContext();
  return (
    <>
      <Header />
      <NavBar />
      {settingsIsOpen && (
        <Modal onClose={handleToggleModal} overlay>
          <h1>Modal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quibusdam, doloremque quisquam quisquam quisquam quisquam quisquam
          </p>
        </Modal>
      )}
    </>
  );
};
export default App;
