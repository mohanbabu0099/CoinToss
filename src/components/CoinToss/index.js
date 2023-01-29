// Write your code here
import {useState} from 'react'
import './index.css'

const CoinToss = () => {
  const [head, setHead] = useState(0)
  const [tails, setTails] = useState(0)
  const [count, setCount] = useState(0)
  const [image, setImage] = useState(
    'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  )

  const getCount = () => {
    setCount(count + 1)
    setImage(Math.floor(Math.random())

    if (image === 'https://assets.ccbp.in/frontend/react-js/heads-img.png') {
      setHead(head + 1)
    } else {
      setTails(tails + 1)
    }
  }

  return (
    <div className="main-container">
      <div className="container">
        <h1 className="head">Coin Toss Game</h1>
        <p className="para">Heads (or) Tails</p>
        <img src={image} alt="toss result" className="img" />
        <div>
          <button onClick={getCount} type="button" className="btn btn1">
            Toss Coin
          </button>
        </div>
        <div className="para-container">
          <p className="p1">Total: {count}</p>
          <p className="p1">Heads: {head}</p>
          <p className="p1">Tails: {tails}</p>
        </div>
      </div>
    </div>
  )
}

export default CoinToss
