import React from 'react'
import style from './Main.module.scss'
import Header from '../../Components/header/Header'
import Layout from '../../Components/layout/Layout'
import DataContext from '../../Components/Context/Context'
import { useContext, useEffect } from 'react'


function Main() {
    const { data, fetchData } = useContext(DataContext)
  
  useEffect(() => {
    fetchData();
    console.log("hi");
  },[]
)
  return (
    
    <div className= {style.wrapper}>
        <Header />
        <Layout />
    </div>
  )
}

export default Main