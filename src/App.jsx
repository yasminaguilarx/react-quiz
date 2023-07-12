

import {useState} from 'react'
import LoggedOut from './components/LoggedOut'
import LoggedIn from './components/LoggedIn'


function App() {

  const [loggedIn, setLoggedIn] = useState(true)

  const toggleLogIn = () => {
    // should change the state of loggedIn to whatever it's opposite is. 
  }

  if(loggedIn) {
    return <LoggedIn />
  }

  return <LoggedOut />


}

export default App
