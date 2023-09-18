import css from './css/carsListElement.module.css';
import iconHeart from '../../images/heart.svg';

function CarsListElement({ id, year, make, model, type, img, accessories, rentalPrice, rentalCompany, address }) {

  const location = address.split(',');
  const country = location[2];
  const city = location[1];
  const feature = accessories[2];
  const featureWords = feature.split(' ', 2);

  return (
    <li className={css.item}>
      <button type="button" className={css.favoriteBtn}>
        <svg className={css.heartSvg}>
              <use href={iconHeart + '#heart'}></use>
            </svg>
      </button>
      <img src={img} alt={`${make} ${model}`} width="274" height="268"  className={css.photo}/>
      <div className={css.titleCar}>
        <div className={css.nameCar}>
          {make} <span className={css.nameCarAccent}>{model}</span>, {year}
        </div>
        <div className={css.nameCar}>
          {rentalPrice}      
        </div>
      </div>
      <ul className={css.infoList}>
        <li className={css.infoItem}>{city} |</li>
        <li className={css.infoItem}>{country} |</li>
           
        <li className={css.infoItem}>
          {rentalCompany}      
        </li>
      </ul>
      <ul className={css.infoList}>
        <li className={css.infoItem}>
          {type} |      
        </li>
        <li className={css.infoItem}>
          {make} |      
        </li>
        <li className={css.infoItem}>
          {id} |      
        </li>
        <li className={css.infoItem} >
          {featureWords}      
        </li>
      </ul>
      <button type="button" className={css.btnLearnMore}>Learn more</button>
    </li>
  );
}



export default CarsListElement;