import React, { Component , useContext,useEffect,useState } from 'react';
import style from './Header.module.scss'
import icon from '../../Assets/add-cart.svg'
import DataContext from '../Context/Context';




const Header = () => {
  const {order,restName} = useContext(DataContext)
  const[orderQuantity,setOrderQuantity]=useState(0)
  console.log(order);
  useEffect(()=>{
    let count =0;
    order.forEach(element => {
      count = element.quantity+count
      
    });
    setOrderQuantity(count)

  },[order])

  return (
    
    <div className={style.wrapper}>
      <div className={style.left}>
      {restName}
      </div>
      <div className={style.right}>
     
      My orders
      <div className={style.carticon}>
      <img src={icon} alt='icon' className='icon'/>
      <div className={style.indicator}>
        {orderQuantity}
      </div>
      </div>
      </div>
    </div>








    // <div style={{ border: "1px solid black", padding: "10px", display: "flex", justifyContent: "center" }}>
    //   <nav style={{ border: "1px solid blue", padding: "10px", width: "80%" }} >
    //     <div style={{ display: "flex", justifyContent: "space-between", color: "white", border: "1px solid grey", padding: "10px" }}>
    //       <div>Artisian Resto Cafe</div>
    //       <div style={{display:"flex", justifyContent:"center"}}>
    //       <a href="your_shopping_cart_page.html">
    //       <img src={icon} alt='icon' className='icon'/>
    //       add cart</a>
    //       </div>
    //     </div>
    //     <div style={{ display: "flex", flexWrap: "nowrap", fontSize: "10px" }}>
    //       <a href="#salad-soup" style={{ paddingLeft: "10px", textDecoration: "none" }}>
    //         <h1>Salad and Soup</h1>

    //       </a>
    //       <a href="#brayand" style={{ paddingLeft: "10px", textDecoration: "none" }}>
    //         <h1>From the Brayand</h1>
    //       </a>
    //       <a href="#hen-house" style={{ paddingLeft: "10px", textDecoration: "none" }}>
    //         <h1>From the Hen House</h1>
    //       </a>
    //       <a href="#fresh-sea" style={{ paddingLeft: "10px", textDecoration: "none" }}>
    //         <h1>Fresh from the Sea</h1>
    //       </a>
    //       <a href="#biriyani" style={{ paddingLeft: "10px", textDecoration: "none" }}>
    //         <h1>Biriyani</h1>
    //       </a>
    //       <a href="#fast-food" style={{ paddingLeft: "10px", textDecoration: "none" }}>
    //         <h1>Fast Food</h1>
    //       </a>


    //     </div>
    //     <div style={{ borderBottom: "1px solid grey", paddingTop: "50px" }}>
    //       <div style={{ color: "white" }}>
    //         spanish Salad
    //       </div>
    //       <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
    //         <div >SAR 7.5</div>
    //         <div style={{ paddingLeft: "69vh" }}>15 calories</div>
    //         <div>
    //           <img
    //             src="https://example.com/image.jpg" // Replace this URL with the actual image URL
    //             // alt="Description of the image"
    //             style={{ width: '100%', height: 'auto' }} // Optional styling for the image
    //           />
    //         </div>
    //       </div>

    //     </div>

    //     <div style={{ borderBottom: "1px solid grey", paddingTop: "50px" }}>
    //       <div style={{ color: "white" }}>
    //         spanish Salad
    //       </div>
    //       <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
    //         <div >SAR 7.5</div>
    //         <div style={{ paddingLeft: "69vh" }}>15 calories</div>
    //         <div>
    //           <img
    //             src="https://example.com/image.jpg" // Replace this URL with the actual image URL
    //             // alt="Description of the image"
    //             style={{ width: '100%', height: 'auto' }} // Optional styling for the image
    //           />
    //         </div>
    //       </div>

    //     </div>

    //     <div style={{ borderBottom: "1px solid grey", paddingTop: "50px" }}>
    //       <div style={{ color: "white" }}>
    //         spanish Salad
    //       </div>
    //       <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
    //         <div >SAR 7.5</div>
    //         <div style={{ paddingLeft: "69vh" }}>15 calories</div>
    //         <div>
    //           <img
    //             src="https://example.com/image.jpg" // Replace this URL with the actual image URL
    //             // alt="Description of the image"
    //             style={{ width: '100%', height: 'auto' }} // Optional styling for the image
    //           />
    //         </div>
    //       </div>

    //     </div>

    //     <div style={{ borderBottom: "1px solid grey", paddingTop: "50px" }}>
    //       <div style={{ color: "white" }}>
    //         spanish Salad
    //       </div>
    //       <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
    //         <div >SAR 7.5</div>
    //         <div style={{ paddingLeft: "69vh" }}>15 calories</div>
    //         <div>
    //           <img
    //             src="https://example.com/image.jpg" // Replace this URL with the actual image URL
    //             // alt="Description of the image"
    //             style={{ width: '100%', height: 'auto' }} // Optional styling for the image
    //           />
    //         </div>
    //       </div>

    //     </div>

    //     <div style={{ borderBottom: "1px solid grey", paddingTop: "40px" }}>
    //       <div style={{ color: "white" }}>
    //         spanish Salad
    //       </div>
    //       <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
    //         <div >SAR 7.5</div>
    //         <div style={{ paddingLeft: "69vh" }}>15 calories</div>
    //         <div>
    //           <img
    //             src="https://example.com/image.jpg" // Replace this URL with the actual image URL
    //             // alt="Description of the image"
    //             style={{ width: '100%', height: 'auto' }} // Optional styling for the image
    //           />
    //         </div>
    //       </div>

    //     </div>


    //     <div style={{ borderBottom: "1px solid grey", paddingTop: "40px" }}>
    //       <div style={{ color: "white" }}>
    //         spanish Salad
    //       </div>
    //       <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
    //         <div >SAR 7.5</div>
    //         <div style={{ paddingLeft: "69vh" }}>15 calories</div>
    //         <div>
    //           <img
    //             src="https://example.com/image.jpg" // Replace this URL with the actual image URL
    //             // alt="Description of the image"
    //             style={{ width: '100%', height: 'auto' }} // Optional styling for the image
    //           />
    //         </div>
    //       </div>

    //     </div>

    //   </nav>
    // </div>

  )
}

export default Header