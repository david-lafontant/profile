import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import data from '../utils/data';
import Project from './Project';


export const Projects = () => {
    const [projecstList, setProjectsList] = useState(data)
    
    return (
        <div className='container '>
            <div className="row align-items-center justify-content-center">
            {projecstList.map(elem=><Project key={uuidv4()} item={elem} />)}
            </div>
        </div>
    )
}
