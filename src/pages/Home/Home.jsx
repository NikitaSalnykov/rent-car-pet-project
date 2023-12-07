import React, { useState } from 'react'
import List from '../../components/List/List'
import Filter from '../../components/Filter/Filter'
import {BasicModal} from '../../components/Modals/BasicModal/BasicModal'
import Card from '../../components/Modals/Card/Card'
const Home = () => {

  const [isModalOpen, setisModalOpen] = useState(true);

  const onTogleLeavingModal = () => {
    setisModalOpen(!isModalOpen);
  };



  return (
    <div className='container'>
      <Filter/>
      <List/>
      <BasicModal
        isOpen={isModalOpen}
        onCloseModal={onTogleLeavingModal}
      >
        <Card/>
        <div className="w-40 h-49 bg-black"></div>
      </BasicModal>
    </div>
  )
}

export default Home