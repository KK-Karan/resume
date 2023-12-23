function Personal({setFirstName , setLastName , setRole , setIntro}) {

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }
  
  const handleRoleChange = (e) => {
    setRole(e.target.value)
  }

  const handleIntroChange = (e) => {
    setIntro(e.target.value)
  }
  

    return (
      <>
      <section>
        <div className="personal__data">
          <h2>🗃️Personal Data</h2>
          <div className="individual__data">
           <div className="fullname">
            <input type="text" placeholder="First Name" onChange={handleFirstNameChange}/>
            <input type="text" placeholder="Last Name" onChange={handleLastNameChange}/>
           </div>
           <input type="text" placeholder="Role applying for" onChange={handleRoleChange}/>
           <textarea name="" id="" cols="15" rows="5" placeholder="Tell something about yourself" onChange={handleIntroChange}></textarea>
          </div>
        </div>
     </section>
      </>
    )
  }
  
  export default Personal
  