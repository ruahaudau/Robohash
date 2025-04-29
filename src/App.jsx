import { useState, useEffect } from 'react'
import './App.scss';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';

function App() {

  const [monsters, setMonster] = useState([]);
  const [searchMonster, setSearchMonster] = useState([]);

  useEffect(() => {
    const response = fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) =>{
        setMonster(data)
        setSearchMonster(data)})
    }, []);

  const onChangeHandler = (event)=>{
    const filterString= event.target.value.toLowerCase();
    const newFilterMonster = monsters.filter((monster)=>
      monster.name.toLowerCase().includes(filterString)
    );
    setSearchMonster(newFilterMonster);
  }


  return (
    <>
      <SearchBox onChangeHandler={onChangeHandler}/>
      <CardList monsters={searchMonster}></CardList>
    </>
  )
}

export default App
