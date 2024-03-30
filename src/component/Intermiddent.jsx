import React, { useState } from 'react'



const Intermiddent = ({ explorerData,isCheked }) => {
    const [open, setOpen] = useState(false);
    var foldercheck = {
        "Root Folder": false, 
        "src": false,
        "component": false,
        "intermiddent.jsx": false,
        "data": false,
        "FolderData.js": false
    }
    
    var [isCheked, setisCheked] = useState(isCheked ? isCheked : foldercheck);
    //  console.log(explorerData)


    const HandlerCheckBox = (e) => {
        let nm=e.target.name
 
        if(e.target.checked){
            setisCheked({...isCheked, [nm]:true})
        }
        else{
            setisCheked({...isCheked, [nm]:false})
        }
    }
   
    console.log('isCheked',isCheked);


    return (
        <div>
            <div style={{ padding: "10px 10px", display: 'flex', gap: "0.5rem" }}>
                <input type="checkbox" name={explorerData.name} onClick={HandlerCheckBox} />
                <span onClick={() => setOpen(!open)} style={{ fontSize: 30, }}>{explorerData.name}</span>
            </div>

            {open && <div style={{ paddingLeft: 40 }}>
                {
                    explorerData.item.map((exp) => {
                        return <Intermiddent key={exp.id} explorerData={exp} isCheked={isCheked} />
                    })
                }
            </div>}

        </div>
    )
}

export default Intermiddent
