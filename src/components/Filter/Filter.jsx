import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useGetCarsQuery } from '../../redux/carsApi';
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterPrice,
  setFilterBrand,
  setFilterMileageFrom,
  setFilterMileageTo
 } from '../../redux/filterSlice';

const hoverStyle =
  'transition duration-200 ease-in-out cursor-pointer hover:opacity-80';

const Filter = () => {
  const dispatch = useDispatch();

  const { data: cars, isLoading } = useGetCarsQuery();
  console.log(cars);


  const formik = useFormik({
    initialValues: {
      brand: '',
      price: '',
      mileageTo: '',
      mileageFrom: '',
    },
    validateOnChange: false,
    validateOnBlur: true,
    // validationSchema: userSchema,

    onSubmit: ({ brand, price, mileageFrom, mileageTo }) => {
      dispatch(setFilterPrice(price))
      dispatch(setFilterBrand(brand))
      dispatch(setFilterMileageFrom(mileageFrom))
      dispatch(setFilterMileageTo(mileageTo))

    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const resetFields = () => {
    formik.setFieldValue('brand', '');
    formik.setFieldValue('price', '');
    formik.setFieldValue('mileageTo', '');
    formik.setFieldValue('mileageFrom', '');
  };

  return (
    <div className="container">
      <form
        noValidate
        autoComplete="off"
        className="flex justify-center items-end gap-4 flex-wrap"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {/* brand */}
          <div className="mt-4">
            <div className="max-w-[200px] rounded-[20px]  ">
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-900"
              >
                Brand
              </label>
              <div className="rounded-[10px] w-[180px] mt-2 h-12 pr-3 bg-white flex justify-center">
                <select
                  className={` ${errors['brand'] && 'border-rose-400'}`}
                  id="brand"
                  name="brand"
                  value={formikValues['brand']}
                  onChange={formik.handleChange}
                >
                  <option value="">Enter the text</option>
                  {!isLoading && cars.filter((car, index, self) => (
    self.findIndex(c => c.make === car.make) === index
  )).map(car => {
                    return (
                  <option key={car.id} value={car.make}>{car.make}</option>)})}
                  {/* Add more options as needed */}
                </select>
                {errors['brand'] && (
                  <p className={errorTextStyle}>{errors['brand']}</p>
                )}
              </div>
            </div>
          </div>
          {/* price */}
          <div className="mt-4 gap-x-6 gap-y-8">
            <div className="max-w-[120px]">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-900"
              >
                Price/ 1 hour
              </label>
              <div className="rounded-[10px] w-[120px] mt-2 h-12 bg-white flex justify-center">
                <select
                  className={` p-3 ${errors['price'] && 'border-rose-400'}`}
                  id="price"
                  name="price"
                  value={formikValues['price']}
                  onChange={formik.handleChange}
                >
                  <option value="To 2$">To 2$</option>
                  <option value="To 15$">To 15$</option>
                  <option value="To 30$">To 30$</option>
                  <option value="To 50$">To 50$</option>
                  <option value="To 70$">To 70$</option>
                  <option value="To 100$">To 100$</option>
                  <option value="To 150$">To 150$</option>
                  <option value="To 500$">To 500$</option>
                </select>
                {errors['price'] && (
                  <p className={errorTextStyle}>{errors['price']}</p>
                )}
              </div>
            </div>
          </div>
          {/* Сar mileage / km */}
          <div className="mt-4">
            <div className=" max-w-[200px]">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-900"
              >
                Сar mileage / km
              </label>
              <div className="flex">
                <div className="mt-2">
                  <input
                    className={` rounded-l-[10px]  w-24 p-3 ${
                      errors['mileageFrom'] && 'border-rose-400'
                    }`}
                    type="text"
                    id="mileageFrom"
                    placeholder="From"
                    name="mileageFrom"
                    value={formikValues['mileageFrom']}
                    onChange={formik.handleChange}
                  />
                  {errors['mileageFrom'] && (
                    <p className={errorTextStyle}>{errors['mileageFrom']}</p>
                  )}
                </div>
                <div className="mt-2">
                  <input
                    className={`border-l-[2px] border-l-gray rounded-r-[10px] w-24 p-3 ${
                      errors['mileageTo'] && 'border-rose-400'
                    }`}
                    type="text"
                    id="mileageTo"
                    placeholder="To"
                    name="mileageTo"
                    value={formikValues['mileageTo']}
                    onChange={formik.handleChange}
                  />
                  {errors['mileageTo'] && (
                    <p className={errorTextStyle}>{errors['mileageTo']}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-end">
          <button
            className="w-[136px] h-12 px-11 bg-blue py-3.5 rounded-xl text-white"
            type="submit"
          >
            {' '}
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
