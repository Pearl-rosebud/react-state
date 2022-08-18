import React from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileForm from './components/ProfileForm'

function App(useState) {

  const [allprofiles, setAllprofiles] = useState([

    {
      firstname:"Pearl",
      lastname: "Rosebud",
      email: "rosebudpearl37@gmail.com",
      phone:"0248118133"
    }
  ])

    
  const updateallprofiles = (profiles) => {
    let arr = allprofiles;
    arr.push()
    setAllprofiles([...arr])
  };
  return (
    <>
    <div classname="app" >
  <h1>Our profile maker</h1>   
    </div>
    <ProfileForm submit={updateallprofiles} />
    <hr />
    <div className="list">
      {allprofiles.map((person, index) =>(
        <ProfileCard key={index} card={person} />
      ))}

    </div>
    </>
  )
}

export default App