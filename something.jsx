import { useState} from "react"
import PropTypes from 'prop-types'

function Work() {
  const initialItems = [{
    id:0,
    visible:true,
    cardVisible:true,
    positionInput:'',
    companyInput:'',
    joiningInput:'',
    leavingInput:'',
    roleInput:'',
  }]
  let [items , setItems] = useState(initialItems)
  let [ nextId , setNextId] = useState(1)
 
  function deleteItem(itemId){
    setItems(
      items.filter(item => item.id !== itemId)
    )

    }
    function addItem(){
      setNextId(nextId => nextId + 1)
      setItems([
        ...items,
        {
          id:nextId,
          visible:true,
          cardVisible:true,
          companyInput: '',
          positionInput:'',
          joiningInput:'',
          leavingInput:'',
          roleInput:'',
        }
      ])
      
    }

    function changePositionInput(positionId , e){
   let positionUpdated =   items.map(item => {
        if(positionId === item.id){
          return{
            ...item,
            positionInput:e.target.value,
          }        
        } else {
          return item
        }
      });
    setItems(positionUpdated)
    }

    function changeCompanyInput(companyId , e){
      let companyUpdated =   items.map(item => {
           if(companyId === item.id){
             return{
               ...item,
               companyInput:e.target.value,
             }        
           } else {
             return item
           }
         });
       setItems(companyUpdated)
       }
    
    function WorkInfo({deleteItem , changePositionInput , changeCompanyInput}){
    return(
   
      <div>
      {items.map(item =>{
        return(

      item.cardVisible ? <div className="individual__data" key={item.id}>
        <div className="info__title">
          <h3>Experience</h3>
          { item.visible ? <button onClick={() => deleteItem(item.id)}>❌</button> : null}
        </div>
            <input type="text" placeholder="Position" onChange={(e) => changePositionInput(item.id , e)} value={item.positionInput} />
            <input type="text" placeholder="Company" onChange={(e) => changeCompanyInput(item.id, e)} value={item.companyInput}/>
            <input type="text" placeholder="Joining Date"/>
            <input type="text" placeholder="Leaving Date"/>
           <textarea name="" id="" cols="15" rows="5"  placeholder="Describe your role and responsibilities"></textarea>
        </div>
      : null
      
        )
      })}     
        </div>

    )
  }

  WorkInfo.propTypes = {
    deleteItem:PropTypes.func.isRequired,
    changePositionInput:PropTypes.func.isRequired,
    changeCompanyInput:PropTypes.func.isRequired,

  }
  
  return (
     <>
      <div className="personal__data">
      <h2>💼Work Experience</h2>
      <WorkInfo deleteItem = {deleteItem} changePositionInput={changePositionInput} changeCompanyInput={changeCompanyInput}/>
      <button onClick={addItem}>+ New</button>
      </div>
     </>
    )
  }

  
  export default Work