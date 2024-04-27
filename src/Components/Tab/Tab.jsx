import React, {useContext,useState} from 'react'
import style from './Tab.module.scss'
import Card from '../Card/Card'
import DataContext from '../Context/Context'


function Tab() {
    const {data} = useContext(DataContext)
    console.log();
    const [tabIndex , setTabIndex] = useState(0)
    const handleTab = (id) => {
       setTabIndex(id);

    }
  return (
    
    <div className={style.wrapper}>
    <div className={style.header}>
      {data[0]?.table_menu_list.map((item, index) => {
        return <button key={index} className={style.tabHeaderBtn} id={tabIndex === index ? style.selectedTab : null } onClick={() => {handleTab(index)}}>{item.menu_category}</button>;
      })}
    </div>
    <div className={style.content}>
    {data[0]?.table_menu_list[tabIndex].category_dishes.map((item,index) =>{
        return <Card key={index} data = {item} tabIndex ={tabIndex}/>
    })}

    
    </div>
  </div>

  )
}

export default Tab