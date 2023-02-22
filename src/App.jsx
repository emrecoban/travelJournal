import React from "react";
import Journal from "./components/Journal";
import Navbar from './components/Navbar';
import data from './data'


export default function App(){
    const journals = data.map((journal, index)=>{
        return <Journal 
                    key={index}
                    journal={journal}
                />
    })

    return (
        <>
            <Navbar/>
            {journals}
        </>
    )
}