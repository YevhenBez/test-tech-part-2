import CarsList from '../../components/carsList/CarsList';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';

const Catalog = () => {
  const cars = useSelector(selectCars);

  console.log(cars)
    return (
        <div>
        <h2>Catalog</h2>
        <CarsList data={cars} />
      </div>
    )
}

export default Catalog;