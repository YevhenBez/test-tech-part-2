import CarsListElement from '../carsListElement/CarsListElement';
import css from './css/carsList.module.css';
// import { useSelector } from 'react-redux';
// import { selectCars } from '../../redux/selectors';

const CarsList = ({ data }) => {
//   const cars = useSelector(selectCars);

//  console.log(cars);


  return (
    <ul className={css.list}>
      {data.map(car => (
        <CarsListElement
          key={car.id}
          id={car.id}
          year={car.year}
          make={car.make}
          model={car.model}
          type={car.type}
          img={car.img}
          description={car.description}
          fuelConsumption={car.fuelConsumption}
          engineSize={car.engineSize}
          accessories={car.accessories}
          functionalities={car.functionalities}
          rentalPrice={car.rentalPrice}
          rentalCompany={car.rentalCompany}
          address={car.address}
          rentalConditions={car.rentalConditions}
          mileage={car.mileage}    
        />
      ))}
    </ul>
  );
};

export default CarsList;