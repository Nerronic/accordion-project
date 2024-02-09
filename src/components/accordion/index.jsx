import { useState } from "react";
import data from "./data.js";

export default function Accordion(){
const [selected, setSelected] = useState(null);
const handleSingleSection = (getCurrentId) =>{
// console.log(getCurrentId)

setSelected(getCurrentId === selected ? null : getCurrentId);
}

    return  <div className="wrapper">
        < div className="accordion">

            {
            
            data && data.length > 0 ? 
                data.map(dataItem => <div className="item">
                    <div className="title" onClick={ ()=>handleSingleSection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>

                    <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ? <div> {dataItem.answer}</div>: null
                    }
                    </div>) 
                    
                    : <div> No data found </div>
                    
            
            }
    </div>

</div>
}
