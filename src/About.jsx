
function About({downloadPDF}) {
  
    return(
        <>
         <div className="personal__data" style={{display:"flex", justifyContent:"center" , alignItems:"center"}}>
              <h1>Resume Maker</h1>
              <div style={{display:"flex" , flexDirection:"row"}}>
              <p style={{marginTop:"20px"}}>Created by &nbsp;<a href="https://github.com/KK-Karan/">KK-Karan</a></p>
              <button style={{marginLeft:"32px"}} onClick={downloadPDF}>⬇️</button>
              </div>
         </div>
        </>
    )
}


export default About