import { useState } from 'react'
import PropTypes from 'prop-types'

function Education({setSchoolInput}) {

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
    setSchoolInput(prevInput => prevInput.filter(item => item.id !== itemId))

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

      setSchoolInput(prevInput=> [
        ...prevInput,
        {
          id:nextId,
          school:'',
        }
      ])
      
    }

    function handleChange(e , ItemId){
       setSchoolInput(schoolInput => schoolInput.map((item) => {
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

    
  Education.propTypes = {
    deleteItem:PropTypes.func.isRequired,
    setSchoolInput:PropTypes.func.isRequired

  }
  return (
     <>
      <div className="personal__data">
      <h2>🎓Education</h2>
      {items.map(item =>{
        return(

      item.cardVisible ? <div className="individual__data" key={item.id}>
        <div className="info__title">
        <h3>School/College</h3>
          { item.visible ? <button onClick={() => deleteItem(item.id)}>❌</button> : null}
        </div>
            <input name = 'school' type="text" placeholder="School" onChange={(e) => handleChange(e, item.id)}/>
            <input name = 'degree' type="text" placeholder="Degree" onChange={(e) => handleChange(e, item.id)}/>
            <input name = 'startYear' type="number" placeholder="Start Year" onChange={(e) => handleChange(e, item.id)}/>
            <input name = 'endYear' type="number" placeholder="End Year" onChange={(e) => handleChange(e, item.id)}/>
        </div>
      : null
      
        )
      })}     

      <button onClick={addItem}>+ New</button>
      </div>
     </>
    )
  }

  
  export default Education