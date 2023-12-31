import { cutAddress } from '../../helpers/cutAddress';
import { useGetCarsQuery } from '../../redux/carsApi';
import {
  getFilterBrand,
  getFilterPrice,
  getFilterMileageFrom,
  getFilterMileageTo,
} from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import LikeSvg from '../LikeSvg/LikeSvg';
import {
  deleteFavorite,
  getFavorite,
  setFavorite,
} from '../../redux/favoriteSlice';
import { useEffect, useState } from 'react';

const List = ({ handleSelectedCar, onTogleLeavingModal }) => {
  const [favoriteStyle, setFavoriteStyle] = useState(
    useSelector(getFavorite) || []
  );
  const [visibleCars, setVisibleCars] = useState(12);

  const { data: cars, isLoading } = useGetCarsQuery();
  const filterBrand = useSelector(getFilterBrand);
  const filterPrice = useSelector(getFilterPrice);
  const filterMileageTo = useSelector(getFilterMileageTo);
  const filterMileageFrom = useSelector(getFilterMileageFrom);
  const favorite = useSelector(getFavorite);
  const dispatch = useDispatch();

  useEffect(() => {
    setFavoriteStyle(favorite);
  }, [favorite]);

  const filteredCars = () => {
    let filtered;

    if (!cars) return;
    if (
      filterBrand.trim() === '' &&
      filterPrice.trim() === '' &&
      filterMileageTo.trim() === '' &&
      filterMileageFrom.trim() === ''
    )
      return cars;

    filtered = cars.filter((el) => el.make.includes(filterBrand));

    if (filterPrice.trim() !== '') {
      filtered = filtered.filter((el) => {
        const carPrice = parseFloat(el.rentalPrice.replace(/\D/g, ''));
        const filterPriceValue = parseFloat(filterPrice.replace(/\D/g, ''));
        return carPrice < filterPriceValue;
      });
    }

    if (filterMileageTo.trim() !== '') {
      filtered = filtered.filter(
        (el) => el.mileage <= +filterMileageTo.replace(/\D/g, '')
      );
    }

    if (filterMileageFrom.trim() !== '') {
      filtered = filtered.filter(
        (el) => +filterMileageFrom.replace(/\D/g, '') <= el.mileage
      );
    }

    return filtered;
  };

  const handleSubmit = (car) => {
    handleSelectedCar(car);
    onTogleLeavingModal();
  };

  const handleFavorite = (car) => {
    if (favorite.some((item) => item.id === car.id)) {
      dispatch(deleteFavorite(car.id));
      setFavoriteStyle(favoriteStyle.filter((el) => el.id !== car.id));
    } else {
      dispatch(setFavorite(car));
      setFavoriteStyle([...favoriteStyle, car]);
    }
    favorite;
  };

  const handleLoadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 12);
  };

  return (
    <>
      {filteredCars() && filteredCars().length > 0 ? (
        <div className="">
          {isLoading ? (
            'Loading...'
          ) : (
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {filteredCars()
                  .slice(0, visibleCars)
                  .map((product, index) => (
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
                              favoriteStyle.some(
                                (item) => item.id === product.id
                              )
                                ? '#005eb6'
                                : 'transparent'
                            }`}
                            stroke={`${
                              favoriteStyle.some(
                                (item) => item.id === product.id
                              )
                                ? '#005eb6'
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
                              if (
                                index !==
                                product.functionalities.length - 1
                              ) {
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
              {visibleCars < filteredCars().length && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleLoadMore}
                    className="px-4 py-2 mt-6 bg-green text-white rounded-md hover:opacity-75"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex justify-center mt-10">
          There are no cars matching the specified search filter
        </div>
      )}
    </>
  );
};

export default List;
