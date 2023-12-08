import { cutAddress } from '../../../helpers/cutAddress';

const Card = ({ selectedCar }) => {
  console.log(selectedCar);
  return (
    <div className="max-w-[541px] max-h-[752px] relative bg-white rounded-3xl flex flex-col justify-center">
      <div className=" overflow-hidden rounded-lg">
        <img
          className=" object-cover w-[320px] sm:w-[380px] md:w-[450px] h-[250px]"
          src={selectedCar.img}
        />
      </div>
      <div className="mt-4 text-[14px]">
        <h2>
          {selectedCar.make}
          <span className="text-blue"> {selectedCar.model}, </span>
          {selectedCar.year}
        </h2>
      </div>
      <div className="w-[220px] sm:w-[380px] md:w-[450px]">
        <ul className="mt-2 flex flex-wrap gap-1 text-gray-400 text-[12px]">
          {cutAddress(selectedCar.address).map((el, index) => (
            <li key={index}>
              <p>
                {el}
                <span> |</span>
              </p>
            </li>
          ))}
          <li>
            <p>
              {selectedCar.rentalCompany}
              <span> |</span>
            </p>
          </li>
          <li>
            <p>
              {selectedCar.type}
              <span> |</span>
            </p>
          </li>
          <li>
            <p>
              {selectedCar.make}
              <span> |</span>
            </p>
          </li>
          <li>
            <p>{selectedCar.mileage}</p>
          </li>
        </ul>
      </div>
      <div className="mt-4 w-[220px] sm:w-[380px] md:w-[450px] text-[14px]">
        <p>{selectedCar.description}</p>
      </div>
      <div className="mt-4 w-[220px] sm:w-[380px] md:w-[450px]">
        <h3 className=" text-[14px]">Accessories and functionalities:</h3>
        <ul className="mt-2 flex flex-wrap gap-1 text-gray-400 text-[12px]">
          {selectedCar.functionalities.map((el, index) => {
            if (index !== selectedCar.functionalities.length - 1) {
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
      <div className="mt-4  text-[14px] w-[220px] sm:w-[380px] md:w-[450px]">
        <h3>Rental Conditions: </h3>
        <ul className="mt-2 flex flex-wrap text-[12px] gap-2 ">
          {selectedCar.rentalConditions.split('\n').map((el, index) => (
            <li className=" bg-slate-200 p-2 rounded-[12px]" key={index}>
              {el}
            </li>
          ))}
        </ul>
      </div>
      <a
       href='tel:+380730000000'
        className="mt-6 w-[200px] p-3 rounded-[10px] bg-blue text-white text-center"
      >
        Rental car
      </a>
    </div>
  );
};

export default Card;
