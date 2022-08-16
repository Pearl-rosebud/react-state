import { render } from '@testing-library/react'
import React, {Component} from 'react'
import ProfileCard from './components/ProfileCard'

class App extends Component  {
  constructor() {
  supper();

this.handleclick=this.handleclick.bind(this)

  this.state= {
    writers: {
      loading: false,
      list:[]
    }
  };

  this.handleclick(){
    this.setState({
      writers:{
        loading: true,
      }
    });
    setTimeout(async() => {
      let resp = await("writers.json");
      let result =await resp.json()
    })

    this.setState({
      writers: {
        loading: false,
        list:result

      }
    });
    
  }
}

render() {
  const{
    Writers:{loading, list}
  } = this.state;
}
if(loading) {
  return (
    
 
    <div>
      <h1>writers profile</h1>
      <div className='container'>
        <div className='card action'>
          <p className='infotext'>loading...</p>

        </div>
      </div>
    </div>
  )

  }
}
return 
  <div>
    <h1>Writers Profile</h1>
    <div className='container'>
      {}list.length === 0 ? (

        <div className='card action'>
          <p className='infoText'>opps...no writer profile found</p>
          <button className='actionBtn' onClick={this.handleclick}>Get Writers</button>
           
           </div>
      ):(

    </div>
    list.map((writer)=>)
    <ProfileCard key={writer.id} writer={writer}/>
      )

      </div>



export default App
