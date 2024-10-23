import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Produtos</h1>
    <div className='produto'>
      <img className='img' src="https://t3.ftcdn.net/jpg/06/27/23/56/360_F_627235669_iz0O2leKYRzjxAKdFP7odpp9eCOZREtN.jpg" alt="" />
      <p className='nome'>pizza</p>
    </div>

    <div className='produto'>
      <img className='img' src="https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-na-churrasqueira.jpg" alt="" />
      <p className='nome'>hamburguer</p>
    </div>


    <div className='produto'>
      <img className='img' src="https://cdn.prod.website-files.com/5edf7b44b7a4f6000913a233/669906a1a1d568ab50da617b_Nomes-de-Sushi_.webp" alt="" />
      <p className='nome'>sushi</p>
    </div>

     
    </>
  )
}

export default App
