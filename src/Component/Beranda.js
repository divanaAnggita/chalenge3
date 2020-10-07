import React from 'react'
import Coronavirus from '../Coronavirus.jpg'

class Beranda extends React.Component{
    render(){
        return(
            <div className="top-wrapper" class="alert alert-secondary" role="alert">
                <div className="containe">
                    <div className="top-txt">
                        <img src={Coronavirus} alt="CoronaVirus"></img>
                        <br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                    </div>
                </div>
             </div>
        )
    }
}

export default Beranda;