import { useDispatch, useSelector } from 'react-redux';
import { cutAddress } from '../../helpers/cutAddress';

import {
  deleteFavorite,
  getFavorite,
  setFavorite,
} from '../../redux/favoriteSlice';
import LikeSvg from '../../components/LikeSvg/LikeSvg';
import { useState } from 'react';
import { BasicModal } from '../../components/Modals/BasicModal/BasicModal';
import Card from '../../components/Modals/Card/Card';

const Favorite = () => {
  const [favoriteStyle, setFavoriteStyle] = useState(
    useSelector(getFavorite) || []
  );
  const [isModalOpen, setisModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});
  const favorite = useSelector(getFavorite);
  const dispatch = useDispatch();

  const onTogleLeavingModal = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleFavorite = (car) => {
    if (favorite.some((item) => item.id === car.id)) {
      dispatch(deleteFavorite(car.id));
      setFavoriteStyle(favoriteStyle.filter((el) => el.id !== car.id));
    } else {
      dispatch(setFavorite(car));
      setFavoriteStyle([...favoriteStyle, car]);
    }
  };

  const handleSubmit = (car) => {
    setSelectedCar(car);
    setisModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="container">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {favorite.map((product, index) => (
              <div
                key={`${product.id}${index}}`}
                className=" flex flex-col justify-between"
              >
                <div className="group relative">
                  <div
                    onClick={() => handleFavorite(product)}
                    className="absolute top-4 right-4 hover:cursor-pointer hover:opacity-75"
                  >
                    <LikeSvg
                      size={24}
                      fill={`${
                        favoriteStyle.some((item) => item.id === product.id)
                          ? 'blue'
                          : 'transparent'
                      }`}
                      stroke={`${
                        favoriteStyle.some((item) => item.id === product.id)
                          ? 'blue'
                          : 'white'
                      }`}
                    />
                  </div>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                    <img
                      src={product.img}
                      alt={product.model}
                      className="h-[200px] w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <p className="flex gap-1">
                            {product.make}
                            <span className="text-[#3470FF]">
                              {product.model}
                            </span>
                          </p>
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.rentalPrice}
                    </p>
                  </div>
                  <div className="w-full">
                    <ul className="flex flex-wrap gap-1 text-gray-400 text-[10px]">
                      {cutAddress(product.address).map((el, index) => (
                        <li key={index}>
                          <p>
                            {el}
                            <span> |</span>
                          </p>
                        </li>
                      ))}
                      <li>
                        <p>
                          {product.rentalCompany}
                          <span> |</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          {product.type}
                          <span> |</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          {product.make}
                          <span> |</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          {product.mileage}
                          <span> |</span>
                        </p>
                      </li>
                      {product.functionalities.map((el, index) => {
                        if (index !== product.functionalities.length - 1) {
                          return (
                            <li key={index}>
                              <p>
                                {el}
                                <span> |</span>
                              </p>
                            </li>
                          );
                        } else {
                          return (
                            <li key={index}>
                              <p>{el}</p>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                  <div className="flex justify-center items-center  mt-4 "></div>
                </div>
                <button
                  onClick={() => {
                    handleSubmit(product);
                  }}
                  className="w-full mx-auto p-3 rounded-[10px] bg-blue text-white"
                >
                  Rental car
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BasicModal isOpen={isModalOpen} onCloseModal={onTogleLeavingModal}>
        <Card selectedCar={selectedCar} />
        <div className="w-40 h-49 bg-black"></div>
      </BasicModal>
    </>
  );
};

export default Favorite;
