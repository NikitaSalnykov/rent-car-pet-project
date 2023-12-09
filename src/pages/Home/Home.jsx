import { useState } from 'react';
import List from '../../components/List/List';
import Filter from '../../components/Filter/Filter';
import { BasicModal } from '../../components/Modals/BasicModal/BasicModal';
import Card from '../../components/Modals/Card/Card';
const Home = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});

  const onTogleLeavingModal = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleSelectedCar = (car) => {
    setSelectedCar(car);
  };

  return (
    <>
      <div className="container">
        <Filter />
        <List
          handleSelectedCar={handleSelectedCar}
          onTogleLeavingModal={onTogleLeavingModal}
        />
      </div>
      <BasicModal isOpen={isModalOpen} onCloseModal={onTogleLeavingModal}>
        <Card selectedCar={selectedCar} />
        <div className="w-40 h-49 bg-black"></div>
      </BasicModal>
    </>
  );
};

export default Home;
