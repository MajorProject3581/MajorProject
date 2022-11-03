import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import './Card.css'
import {useCart} from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';

function Card(props) {
    const ref = useRef(null);
    const cards = document.querySelectorAll('.card');
    const transition = event => {
        if (event.currentTarget.classList.contains('cactive')) {
            event.currentTarget.classList.remove('cactive')
        } else {
            event.currentTarget.classList.add('cactive');
        }
        
    }

    const onCLick= () => {
        props.setCart([...props.cart,props.item]);
    }
   
    return (
        <>
                <div class="card" ref={ref} onClick={transition}>
                    <div class="side front">
                        <div class="cimg">
                            <img className='cimg1' src={props.item.LogoURL}></img>
                        </div>
                        <div class="info">
                            <h5 className='ch5'>{props.item.Name}</h5>
                            {/* <p>{props.item.College_Status}</p> */}
                            <p className='cp1'>{props.item.Location.Address}</p>
                        </div>
                    </div>
                    <div class="side back" id='backside'>
                        <div className="backside">
                        <div class="info" >
                            <div className="ccc" style={{display:"flex",alignItems:"center"}}>
                                <h4 className='ch2'>Info</h4>
                                <div className="cb" style={{width:"100%",textAlign:"right"}} >
                                <button className='cartButton'onClick={onCLick}>Add</button>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                        <div className="col-6">
                        <ul className='cul'>
                            <li ><b>Region : </b>{props.item.Location.Region}</li>
                            <li ><b>District : </b>{props.item.Location.District}</li>
                            <li >
                                {
                                props.selectedCourse != 0 && props.selectedFees != 0 && props.item.maxFees != props.item.minFees ? <p>Fees Range : </p> : "Fees Range :"
                            } {props.item.maxFees} - {props.item.minFees}</li>
                         
                            {/* <li>Selected Castes : {props.item.Dept.selectedCourse.Caste.selectedCaste} </li> */}
                            
                            <li className='cli'>
                                {/* {props.item.Dept.selectedCourse.Caste.selectedCaste} */}
                                </li>
                            </ul>
                            </div>
                            <div className="col-6 side_border" id='nopadding'>
                            <ul>
                            
                            <li><b>Autonomy Status : </b><br/>{props.item.Autonomy_status}</li>
                            <li><b>Hotel Availability : </b><br/>{props.item.HostelAvailability}</li>
                            <li><b>College Status : </b><br/>{props.item.College_Status}</li>
                            {/* <li><b>Autonomy Status : </b><br/>{props.item.Autonomy_status}</li> */}
                        </ul>
                        </div>
                       
                        
                        <div class="btn" >
                    <a href={"https://"+props.item.Website} target = "_blank" rel='noopener' className='ca'>
                        Learn More!
                            </a>
                            <svg className='csvg' fill="#333" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" /><path d="M0-.25h24v24H0z" fill="none" /></svg>
                            
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            
        </>
    )
}


export default Card