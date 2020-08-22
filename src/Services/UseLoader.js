import React, { useState } from 'react'
import Loader from "../Components/Loader";

const UseLoader = () => {
    const[ loading, setLoading] = useState(false)
    return [   
        loading ? <Loader/> :null,
        ()=> setLoading(true),
        ()=> setLoading(false)
    ]
}

export default UseLoader
