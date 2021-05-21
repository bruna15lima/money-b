import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import Modal from 'react-modal';
import { Container, Content } from './styles'


export function Header() {
  const [isNewTransictionModalOpen, setIsNewTransictionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal() {
    setIsNewTransictionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransictionModalOpen(false);
  }


  return(
    <Container>  
      <Content>
      <img src={logoImg} alt="dtmoney"/>
      <button type="button" onClick={handleOpenNewTransactionModal}>
        Nova transação
      </button>
 
      <Modal isOpen={isNewTransictionModalOpen}>
        <h2>Cadastrat Transação</h2>
      </Modal>
      </Content>
    </Container>
  )
}