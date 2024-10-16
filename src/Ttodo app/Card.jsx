function Card(card){
    
    const deleteCard=(e)=>{

    
        console.log(card.cards,"card.cardssss",e.target.id)
        
        const deletedCard = card.cards.filter(obj => obj.id != e.target.id)


        console.log(deletedCard,"deleted carddss")

        card.setCard(deletedCard); 
    }
    return(

        <li style={{backgroundColor:card.color}} id={card.id} className="card">
            
            <h3>{card.heading}</h3>
            <p>{card.content}</p>
            <div className="delete">
                <i onClick={deleteCard} id={card.id} className="fa-solid fa-trash"></i>
            </div>
        </li>
    )
}

export default Card;