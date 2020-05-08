import React, { useEffect, useState } from "react";
import axios from "axios";
import PlantDetails from "./PlantList";
import SearchBar from "./SearchBar";

const PlantPage = props =>{

    const [plants, setPlants] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
        axios
      .get('http://localhost:3333/plants')
      .then(res =>{
        setPlants(res.data.plantsData)
      })
      .catch(err =>{
        console.log(err)
      })
    },[])

    // Search
    const getFiltered = () => {
        const term = searchTerm.trim()
        console.log(term)
        return plants.filter(datum => {
        if (!term) {
            return datum
        }
        if (datum.name.toLowerCase().includes(term.toLowerCase())) {
            return datum
        }
        })
    }

    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <PlantDetails plants={getFiltered()} addToCart={props.addToCart}/>
        </div>
    )
}

export default PlantPage;