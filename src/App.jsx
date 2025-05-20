
import './App.css'
import { useState, useEffect } from 'react';

import UserCard from './components/UserCard'
import batman from './assets/batman.jpg'
import superman from './assets/superman.jpg'
import spiderman from './assets/spiderman.jpg'


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light'
  }, [darkMode]);

  return (
    <div className='container'>
      <UserCard name="Batman" disc="This is Batman" image={batman} />
      <UserCard name="Superman" disc="This is superman" image={superman} />
      <UserCard name="Spiderman" disc="This is spiderman" image={spiderman} />
      <button onClick={() => setDarkMode(!darkMode)}>
        Change Mode
      </button>
    </div>
  )
}

export default App
