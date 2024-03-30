import React ,{useState} from 'react'
import Intermiddent from './component/Intermiddent'
import explorer from './data/FolderData'


const App = () => {
  // const foldercheck = {
  //   "Root Folder": false,
  //   "src": false,
  //   "component": false,
  //   "intermiddent.jsx": false,
  //   "data": false,
  //   "FolderData.js": false
  // }

  const [isCheked, setisCheked] = useState({
    "Root Folder": false,
    "src": false,
    "component": false,
    "intermiddent.jsx": false,
    "data": false,
    "FolderData.js": false
  });

  const HandlerCheckBox = (e) => {
    let nm=e.target.name

    if(e.target.checked){
        setisCheked({...isCheked, [nm]:true})
    }
    else{
        setisCheked({...isCheked, [nm]:false})
    }
}
  

  return (
    <div>
      <Intermiddent explorerData={explorer}  HandlerCheckBox={HandlerCheckBox} isCheked={isCheked}/>
    </div>
  )
}

export default App
