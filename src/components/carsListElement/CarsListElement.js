import css from './css/carsListElement.module.css';
import iconHeart from '../../images/heart.svg';

function CarsListElement({ id, year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address }) {

  const location = address.split(',');
  const country = location[2];
  const city = location[1];

  return (
    <li className={css.item}>
      <button type="button" className={css.favoriteBtn}>
        <svg >
              <use href={iconHeart + '#heart'}></use>
            </svg>
      </button>
      <img src={img} alt={`${make} ${model}`} width="274" height="268"  className={css.photo}/>
      <div className={css.titleCar}>
        <div className={css.nameCar}>
          {make} <span className={css.nameCarAccent}>{model}</span>, {year}
        </div>
        <p>
          {rentalPrice}      
        </p>
      </div>
      <ul className={css.infoList}>
        <li>{city} |</li>
        <li>{country} |</li>
           
        <li>
          {rentalCompany}      
        </li>
      </ul>
      <p>
        {type}      
      </p>
      <p>
        {model}      
      </p>
      <p>
        {id}      
      </p>
      <p>
        {functionalities}      
      </p>
      <button type="button">Learn more</button>
    </li>
  );
}



export default CarsListElement;