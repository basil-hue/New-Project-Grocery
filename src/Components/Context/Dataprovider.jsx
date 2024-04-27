import React, { useState } from 'react'
import DataContext from './Context'

function Dataprovider(props) {
    const [data, setData] = useState([])
    const [order, setOrder] = useState([])
    const [restName, setRestName] = useState("")
    const url = 'https://run.mocky.io/v3/db0018c8-5982-4d89-a54f-f51fe14d3c89'
    const fetchData = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const rspData = await response.json();
            setData(rspData.data);
            setRestName(rspData.data[0].restaurant_name)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const values = {
        data, setData, order, setOrder, fetchData,restName
    }

    return (
        <DataContext.Provider value={values}>
            {
                props.children
            }
        </DataContext.Provider>


    )
}

export default Dataprovider