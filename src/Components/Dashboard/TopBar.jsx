import React from "react";
import { Link } from "react-router-dom";


const TopBar = ()=>{

    const TopStyle={padding:"10px",backgroundColor:"#ededed",color:"red"}


    return <>
    <div className="jb-flex bb" style={TopStyle}>
        <div className=" fs-8">
            Store
        </div>
        <div className="">
            <Link to={'/'} className="fs-8" > Go Site</Link>
        </div>
        
        </div>    
    </>
}

export default TopBar;