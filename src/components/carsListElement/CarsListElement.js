function CarsListElement({id, year, make, model, type, functionalities, rentalPrice, rentalCompany, address }) {

  

  return (
      <li >
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