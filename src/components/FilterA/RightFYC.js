import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Card from '../Card/Card'


function RightFYC(props) {
    const a = () => {
        console.log(props.ecart);
    }
    useEffect((i)=>{
        a()
    },[props.ecart])

    return (
        <>
            <div className="f-right">
                <div className="f-title">
                    <h5>Results : {props.searchItem.length} colleges found</h5>
                    <h5>{props.NO}</h5>
                    <button className='f-filter-button' onClick={props.showMe}>{<FaFilter />}Filter</button>
                </div>
                <div className="f-border"></div>
                <div className="f-cards">
                    <div className="container">
                        <div className="row">
                            {
                                props.searchItem.length != 0 ? (
                                    props.searchItem.map((item,key) => {
                                        return (
                                            <div className="col-md-6 h-col" key={key}>
                                                <Card item={item} setCart = {props.esetCart} cart={props.ecart}/>
                                            </div>
                                        )
                                    })
                                ) : <h4>No Results Found</h4>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightFYC