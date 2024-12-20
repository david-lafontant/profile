import React, { useEffect, useState } from 'react'
import data from '../utils/data'
import { use } from 'react'


export const Projects = () => {
    const [projects, setProject] = useState(data)


    return (
        <div>Projects</div>
    )
}
