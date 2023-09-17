import CarsList from '../../components/carsList/CarsList';
import { useSelector, useDispatch } from 'react-redux';
import { selectCars } from '../../redux/selectors';
import React, { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';

const Catalog = () => {
  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log(cars)
    return (
        <div>
        <h2>Catalog</h2>
        <CarsList data={cars} />
      </div>
    )
}

export default Catalog;