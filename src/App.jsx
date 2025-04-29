import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import CardList from './component/card-list/card-list.component'


function App() {

  const [monsters, setMonster] = useState([]);

  useEffect(() => {
    const response = fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) =>setMonster(data))
    }, []);
  console.log(monsters);

  return (
    <CardList monsters={monsters}></CardList>
  )
}

export default App
