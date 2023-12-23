import { useState } from 'react'
import PropTypes from 'prop-types'

function Work({setExpInput}) {

  const initialItems = [{
    id:0,
    visible:true,
    cardVisible:true,

  }]
  let [items , setItems] = useState(initialItems)
  let [nextId , setNextId] = useState(1)
  function deleteItem(itemId){
    setItems(
      items.filter(item => item.id !== itemId)
    )
    setExpInput(prevInput => prevInput.filter(item => item.id !== itemId))

    }
    function addItem(){
      setNextId(nextId => nextId + 1)
      setItems([
        ...items,
        {
          id:nextId,
          visible:true,
          cardVisible:true,
        }
      ])

      setExpInput(prevInput=> [
        ...prevInput,
        {
          id:nextId,
          school:'',
        }
      ])
      
    }

    function handleChange(e , ItemId){
       setExpInput(schoolInput => schoolInput.map((item) => {
        if(item.id === ItemId){
          return{
            ...item,
            [e.target.name]:e.target.value,
          }
        }else{
          return item
        }
       }))
    }

    
  Work.propTypes = {
    deleteItem:PropTypes.func.isRequired,
    setExpInput:PropTypes.func.isRequired

  }
  return (
     <>
      <div className="personal__data">
      <h2>💼Work</h2>
      {items.map(item =>{
        return(

      item.cardVisible ? <div className="individual__data" key={item.id}>
        <div className="info__title">
        <h3>Experience</h3>
          { item.visible ? <button onClick={() => deleteItem(item.id)}>❌</button> : null}
        </div>
            <input name = 'position' type="text" placeholder="Position" onChange={(e) => handleChange(e, item.id)}/>
            <input name = 'company' type="text" placeholder="Company" onChange={(e) => handleChange(e, item.id)}/>
            <input name = 'startDate' type="number" placeholder="Start Date" onChange={(e) => handleChange(e, item.id)}/>
            <input name = 'endDate' type="number" placeholder="End Date" onChange={(e) => handleChange(e, item.id)}/>
        </div>
      : null
      
        )
      })}     

      <button onClick={addItem}>+ New</button>
      </div>
     </>
    )
  }

  
  export default Work