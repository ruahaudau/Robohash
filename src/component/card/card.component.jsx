import "./card.style.scss";

const Card = ({monster}) => {
    const {name, email,id} = monster
  
    return(
    <>
      <div className='card-container'>
        <div className="card-body-container">
          <img src={`https://robohash.org/${id}/?set=set2`}/>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>  
    </>
    )
  }

export default Card;