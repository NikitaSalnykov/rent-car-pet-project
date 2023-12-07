import { cutAddress } from '../../helpers/cutAddress';

const cars = [
  {
    id: 9582,
    year: 2008,
    make: 'Buick',
    model: 'Enclave',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg',
    description:
      'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
    fuelConsumption: '10.5',
    engineSize: '3.6L V6',
    accessories: ['Leather seats', 'Panoramic sunroof', 'Premium audio system'],
    functionalities: [
      'Power liftgate',
      'Remote start',
      'Blind-spot monitoring',
    ],
    rentalPrice: '$40',
    rentalCompany: 'Luxury Car Rentals',
    address: '123 Example Street, Kiev, Ukraine',
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 5858,
  },
  {
    id: 9584,
    year: 2019,
    make: 'Volvo',
    model: 'XC90',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg',
    description:
      'The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.',
    fuelConsumption: '8.3',
    engineSize: '2.0L 4-cylinder',
    accessories: [
      'Nappa leather seats',
      'Bowers & Wilkins premium sound system',
      'Head-up display',
    ],
    functionalities: [
      'IntelliSafe advanced safety features',
      'Pilot Assist semi-autonomous driving',
      'Four-zone automatic climate control',
    ],
    rentalPrice: '$50',
    rentalCompany: 'Premium Auto Rentals',
    address: '456 Example Avenue, Lviv, Ukraine',
    rentalConditions:
      "Minimum age: 21\nValid driver's license\nProof of insurance required",
    mileage: 5352,
  },
  {
    id: 9586,
    year: 2020,
    make: 'Volvo',
    model: 'XC60',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc60.webp',
    description:
      'The Volvo XC60 is a compact luxury SUV with a beautiful interior, strong performance, and advanced safety features.',
    fuelConsumption: '7.9',
    engineSize: '2.0L 4-cylinder',
    accessories: [
      'Premium leather seats',
      'Harman Kardon audio system',
      'Hands-free power tailgate',
    ],
    functionalities: [
      'City Safety collision avoidance technology',
      'Pilot Assist with adaptive cruise control',
      '9-inch Sensus touchscreen infotainment system',
    ],
    rentalPrice: '$45',
    rentalCompany: 'Luxury Car Rentals',
    address: '789 Example Boulevard, Odessa, Ukraine',
    rentalConditions:
      "Minimum age: 23\nValid driver's license\nCredit card required",
    mileage: 5966,
  },
  {
    id: 9587,
    year: 2006,
    make: 'HUMMER',
    model: 'H2',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/hummer_h2.webp',
    description:
      'The HUMMER H2 is a rugged and powerful SUV that stands out with its imposing presence and off-road capabilities.',
    fuelConsumption: '19.8',
    engineSize: '6.0L V8',
    accessories: [
      'Heated leather seats',
      'Bose premium sound system',
      'Off-road package',
    ],
    functionalities: [
      'Electronic locking front and rear differentials',
      'Stabilitrak stability control',
      'Tire pressure monitoring system',
    ],
    rentalPrice: '$55',
    rentalCompany: 'Adventure Car Rentals',
    address: '321 Example Road, Kharkiv, Ukraine',
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 4771,
  },
  {
    id: 9590,
    year: 2016,
    make: 'Subaru',
    model: 'Outback',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/subaru_outback.jpg',
    description:
      'The Subaru Outback is a versatile and reliable SUV that combines off-road capability with a comfortable and spacious interior.',
    fuelConsumption: '8.7',
    engineSize: '2.5L 4-cylinder',
    accessories: [
      'Leather upholstery',
      'Power moonroof',
      'Harman Kardon premium audio system',
    ],
    functionalities: [
      'Symmetrical All-Wheel Drive',
      'X-Mode off-road assist',
      'Subaru EyeSight driver-assist system',
    ],
    rentalPrice: '$35',
    rentalCompany: 'Adventure Car Rentals',
    address: '987 Example Street, Kyiv, Ukraine',
    rentalConditions:
      "Minimum age: 21\nValid driver's license\nCredit card required",
    mileage: 4061,
  },
  {
    id: 9591,
    year: 2010,
    make: 'Mitsubishi',
    model: 'Outlander',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/mitsubishi_outlander.jpg',
    description:
      'The Mitsubishi Outlander is a practical and fuel-efficient SUV with a stylish design and a range of modern features.',
    fuelConsumption: '7.9',
    engineSize: '2.4L 4-cylinder',
    accessories: [
      'Heated front seats',
      'Rockford Fosgate premium audio system',
      'Power liftgate',
    ],
    functionalities: [
      'Super All-Wheel Control',
      'Multi-View camera system',
      'Bluetooth hands-free system',
    ],
    rentalPrice: '$30',
    rentalCompany: 'City Car Rentals',
    address: '654 Example Avenue, Lviv, Ukraine',
    rentalConditions:
      "Minimum age: 21\nValid driver's license\nProof of insurance required",
    mileage: 5374,
  },
  {
    id: 9593,
    year: 2014,
    make: 'Nissan',
    model: 'Pathfinder',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/nissan_pathfinder.jpg',
    description:
      'The Nissan Pathfinder is a versatile and family-friendly SUV that offers a comfortable ride and generous cargo space.',
    fuelConsumption: '9.5',
    engineSize: '3.5L V6',
    accessories: [
      'Tri-Zone Automatic Climate Control',
      'Bose premium audio system',
      'Rear-seat entertainment system',
    ],
    functionalities: [
      'Intelligent 4x4 system',
      'Advanced Drive-Assist Display',
      'Nissan Intelligent Key with push-button ignition',
    ],
    rentalPrice: '$40',
    rentalCompany: 'Luxury Car Rentals',
    address: '321 Example Road, Odessa, Ukraine',
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 6282,
  },
  {
    id: 9596,
    year: 2009,
    make: 'Lincoln',
    model: 'Navigator L',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/lincoln_navigator_l.webp',
    description:
      'The Lincoln Navigator L is a luxurious and spacious SUV with a refined interior and advanced technology features.',
    fuelConsumption: '18.2',
    engineSize: '5.4L V8',
    accessories: [
      'Premium leather seats',
      'THX II Certified audio system',
      'Power-deployable running boards',
    ],
    functionalities: [
      'AdvanceTrac with Roll Stability Control',
      'Voice-Activated Navigation System',
      'Power liftgate',
    ],
    rentalPrice: '$50',
    rentalCompany: 'Elite Car Rentals',
    address: '123 Example Boulevard, Kharkiv, Ukraine',
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nInsurance coverage required",
    mileage: 6173,
  },
  {
    id: 9597,
    year: 2000,
    make: 'GMC',
    model: 'Yukon Denali',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/gmc_yukon_denali.jpg',
    description:
      'The GMC Yukon Denali is a full-size luxury SUV that offers a powerful engine, a comfortable and spacious interior, and a host of advanced features.',
    fuelConsumption: '14.5',
    engineSize: '6.0L V8',
    accessories: [
      'Heated and ventilated front seats',
      'BOSE premium sound system',
      'Power-folding third-row seats',
    ],
    functionalities: [
      'All-Wheel Drive',
      'Adaptive suspension',
      'Advanced safety features',
    ],
    rentalPrice: '$45',
    rentalCompany: 'Premium Car Rentals',
    address: '789 Example Square, Dnipro, Ukraine',
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 4989,
  },
  {
    id: 9598,
    year: 2007,
    make: 'Hyundai',
    model: 'Tucson',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/hyundai_tucson.jpg',
    description:
      'The Hyundai Tucson is a reliable and fuel-efficient SUV that combines practicality with a stylish design and a comfortable ride.',
    fuelConsumption: '8.2',
    engineSize: '2.0L 4-cylinder',
    accessories: [
      'Apple CarPlay and Android Auto integration',
      'Blind Spot Detection',
      'Hands-free smart liftgate',
    ],
    functionalities: [
      'Front-Wheel Drive',
      'Hillstart Assist Control',
      'LED headlights',
    ],
    rentalPrice: '$25',
    rentalCompany: 'Economy Car Rentals',
    address: '456 Example Lane, Zaporizhzhia, Ukraine',
    rentalConditions:
      "Minimum age: 21\nValid driver's license\nCredit card required",
    mileage: 4591,
  },

  // More products...
];

const List = ({ handleSelectedCar, onTogleLeavingModal }) => {
  const handleSubmit = (car) => {
    handleSelectedCar(car);
    onTogleLeavingModal();
  };

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cars.map((product) => (
            <div key={product.id} className=" flex flex-col justify-between">
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
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
  );
};

export default List;
