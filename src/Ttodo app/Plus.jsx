function Plus({...obj}){

    console.log(obj.show)
    return(
        
        <li className="plus">
            <i onClick={()=> obj.setShow(obj.show = true)} className='fa-solid fa-plus'></i>    
        </li>
            
        
        
    )
}

export default Plus;