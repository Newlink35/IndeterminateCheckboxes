import React from 'react'
import Intermiddent from './component/Intermiddent'
import explorer from './data/FolderData'


const App = () => {
  return (
    <div>
        <Intermiddent explorerData = {explorer}/>
    </div>
  )
}

export default App
