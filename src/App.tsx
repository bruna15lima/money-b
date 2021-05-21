import { useState } from 'react'
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransictionModalOpen, setIsNewTransictionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal() {
    setIsNewTransictionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransictionModalOpen(false);
  }

  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

    <Dashboard />

    <Modal 
      isOpen={isNewTransictionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrat Transação</h2>
      </Modal>

    <GlobalStyle/>
    </>
  );
}


