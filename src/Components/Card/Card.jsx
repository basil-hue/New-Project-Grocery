import React, { useContext, useState ,useEffect} from "react";
import style from "./Card.module.scss";
import DataContext from "../Context/Context";

function Card({ data, tabIndex }) {
  const { order, setOrder } = useContext(DataContext);
  const [qty, setQty] = useState(0);

  const handleAdd = (item) => {
    if (order.length > 0) {
      let sameOrder = false;

      const updatedOrder = order.map((ele) => {
        if (ele.dishId === item.dish_id) {
          sameOrder = true;
          return { ...ele, quantity: ele.quantity + 1 };
        } else {
          return ele;
        }
      });

      if (!sameOrder) {
        updatedOrder.push({ dishId: item.dish_id, quantity: 1 });
      }

      setOrder(updatedOrder);
    } else {
      setOrder([{ dishId: item.dish_id, quantity: 1 }]);
    }
  };

  const handleRemove = (item) => {
    if (order.length > 0) {
      const updatedOrder = order.map((ele) => {
        if (ele.dishId === item.dish_id) {

            console.log(ele.quantity-1 === 0,ele.quantity-1)
          if (ele.quantity - 1 === 0) {
           
            return null;
          } else {
          
            return { ...ele, quantity: ele.quantity - 1 };
          }
        } else {
          return ele;
        }
      });
      console.log(order)
      setOrder(updatedOrder.filter(Boolean));
    }
  };

  const getQuantity = (id) => {
    if (order.length > 0) {
      let qty = 0;
      order.map((ele) => {
        if (ele.dishId === id) {
          qty = ele.quantity;
          return ele.quantity;
        }
      });

      return qty;
    }
    return 0;
  };
console.log(data.dish_image)
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <div className={style.heading}><div className={data.dish_Type===1?style.dishTypeNon:style.dishType}><div className={style.dot}></div></div>{data.dish_name}</div>
        <p
          className={style.price}
        >{`${data.dish_currency} ${data.dish_price}`}</p>
        <p className={style.discription}>{data.dish_description}</p>

        {data.dish_Availability?<div className={style.qtybutton}>
          <button
            className={style.btn}
            onClick={() => {
              handleRemove(data);
            }}
          >
            -
          </button>
          {getQuantity(data.dish_id)}
          <button
            className={style.btn}
            onClick={() => {
              handleAdd(data);
            }}
          >
            +
          </button>
        </div>:null}
        
        <p className={style.warning}>{data.dish_Availability?data.addonCat.length>0?"Customization available":"":"Not available"}</p>
      </div>
      <div className={style.right}>
        <p className={style.calories}>{`${data.dish_calories}`} calories </p>
        <div className={style.imgwrapper}>
          <img src={data.dish_image} loading="lazy"></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
