/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Film_Flip.css'
import { history } from '../../App';
export default function Film_Flip(props) {

    const {item} = props;

     //Điều khiển hiển thị trailer card
     let [isTrailerCardOpen, setIsTrailerCardOpen] = useState(false)
     let [trailerLink, setTrailerLink] = useState('');
 
     const closeTrailerCard = () => {
         setIsTrailerCardOpen(false)
     };
 
     const openTrailerCard = () => {
         setIsTrailerCardOpen(true)
     };

     
    
  return (
   <div className="card" > 
    <div className="img1"><img src={item.hinhAnh} style={{width:'100%'}} ></img></div>
    <div className="img2"></div>
    <div className="title"></div>
    <div className="text"> {item.moTa.length>100?<span>{item.moTa.slice(0,100)}...</span>:<span>{item.moTa}</span>}</div>
    <button  href=""><div onClick={()=>{
      history.push(`/detail/${item.maPhim}`)
    }} className="catagory  ">ĐẶT VÉ <i className="fas fa-film" /></div></button>
    <button onClick={()=>{
       openTrailerCard()
       setTrailerLink(item.trailer)
    }}><div className="views">Xem Trailer <i className="far fa-eye" /> </div></button>
    
    
</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

  )
}
