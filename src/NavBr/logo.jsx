import React from 'react'

function Logo() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>

            <div style={{ display: "flex", margin: 5, color: "" }} >
                <img style={{ marginRight: 10 ,height:100}}  src="logoCLG.jpg" alt="logo" />
                <div>
                    <h3 style={{ margin: 0 }}>Meerut college For Girls Education</h3>
                    <h5 style={{ margin: 0 }}>ESTD. 2015</h5>
                    <h5>Affiliated by CCSU (NAAC A++)</h5>
                </div>
            </div>
            <img style={{marginRight:10,marginTop:5,height:100}} src="CCSU-Logo.jpg" alt="" />
        </div>
    )
}

export default Logo