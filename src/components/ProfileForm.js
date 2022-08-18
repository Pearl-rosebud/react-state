import React, { useState} from 'react'

function ProfileForm({submit}) {
    const [profile, setProfiles] = useState({
        firstname: "",
        lastname: "",
        email:"",
        phone:""
    });

    const handler = (event) => {
        setProfiles((prev) => ({
            ...prev,
            [event.target.name]:event.target.value
        }));
    }
    const handleForm = (e) => {
        e.preventDefault();
        submit (profile)

    }



  return (
    <div className="formContainer">
        <h3>Profile form</h3>
        <form onSubmit={handleForm}>
            <fieldset>
                <legend>Bio data</legend>
                <div className="names">
                    <label>First Name
                        <input name="fisrtname" value =
                        {profile.firstname} type="text" onChange={handler}/>
                        
                    </label>
                    <label>First Name
                        <input name="fisrtname" value =
                        {profile.firstname} type="text" onChange={handler}/>
                        
                    </label>

                </div>
                <div className="Email">
                    <label>Email
                        <input name="email" value =
                        {profile.firstname} type="email" onChange={handler}/>
                        
                    </label>
                    <label>Phone
                        <input name="phone" value =
                        {profile.firstname} type="tel" onChange={handler}/>
                        
                    </label>

                </div>
                
            </fieldset>
            <button className='form' type="submit">
                Add Profile

            </button>
        </form>
    </div>

    
  )
}

export default ProfileForm