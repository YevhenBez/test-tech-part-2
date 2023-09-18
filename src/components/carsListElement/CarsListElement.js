import css from './css/carsListElement.module.css';
import iconHeart from '../../images/heart.svg';

function CarsListElement({ id, year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address }) {

  

  return (
    <li className={css.item}>
      <button type="button" className={css.favoriteBtn}>
        <svg >
              <use href={iconHeart + '#heart'}></use>
            </svg>
      </button>
      <img src={img} alt={`${make} ${model}`} width="274" height="268"  className={css.photo}/>
      <p>
        {make} {model}, {year}
      </p>
      <p>
        {rentalPrice}      
      </p>
      <p>
        {address}      
      </p>    
      <p>
        {rentalCompany}      
      </p>
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