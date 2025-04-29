import Card from '../card/card.component';
import './card-list.style.scss';

const CardList = ({monsters}) => {
    return (
        <div className='card-list-container'>
            {monsters.map((monster) => {
                return (
                <Card key={monster.id} monster={monster}></Card>
                )
            })}
        </div>
    )

};
export default CardList;


