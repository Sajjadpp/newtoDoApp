import React,{useState} from 'react'
import Addlist from './Addlist'
import Card from './Card'
import Plus from './Plus';


export default function Base() {

    let [show, setShow] = useState(false);
    let [cards, setCard] = useState([]);
   
    console.log(cards)
  return (
    <div className='container'>

        <ul>
            {
            
                cards.map((card)=>{
                    console.log(card);
                    return <Card {...card} cards={cards} setCard={setCard}/>
                })
            }
                    

            {show ? <Addlist card={cards} setCard={setCard} show={show} setShow={setShow}/> : 
                    <Plus show = {show} setShow = {setShow} />}
            
            
        </ul>
        
    </div>
    
  )
}

