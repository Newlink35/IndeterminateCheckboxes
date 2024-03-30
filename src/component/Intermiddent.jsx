import React, { useState } from 'react'



const Intermiddent = ({ explorerData,HandlerCheckBox,isCheked}) => {
    const [open, setOpen] = useState(false);



   console.log("isCheked",isCheked);



    return (
        <div>
            <div style={{ padding: "10px 10px", display: 'flex', gap: "0.5rem" }}>
                <input type="checkbox" name={explorerData.name} onClick={HandlerCheckBox} />
                <span onClick={() => setOpen(!open)} style={{ fontSize: 30, }}>{explorerData.name}</span>
            </div>

            {open && <div style={{ paddingLeft: 40 }}>
                {
                    explorerData.item.map((exp) => {
                        return <Intermiddent key={exp.id} explorerData={exp} HandlerCheckBox={HandlerCheckBox} isCheked={isCheked} />
                    })
                }
            </div>}

        </div>
    )
}

export default Intermiddent
