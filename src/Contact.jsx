function Contact({setEmail , setPhone , setAddress}) {

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  function handlePhoneChange(e){
    setPhone(e.target.value)
  }

  function handleAddressChange(e){
    setAddress(e.target.value)
  }
  
    return (
      <>
      <section>
        <div className="personal__data">
          <h2>📱Contact</h2>
           <div className="fullname individual__data">
            <input type="email" placeholder="Email" onChange={handleEmailChange}/>
            <input type="number" placeholder="Phone Number" onChange={handlePhoneChange}/>
           <input type="text" placeholder="Address" onChange={handleAddressChange}/>
           </div>
        </div>
     </section>
      </>
    )
  }
  
  export default Contact
  