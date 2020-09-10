import React, { Component } from 'react'
import {DataContext} from '../Pages/Data'
import {Link} from 'react-router-dom'
import './cssPages/AddToCard.css'
import './cssPages/Details.css'

export  class AddToCard extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <div className= "fullBox" >
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span> {item.price}*{item.count}=  Rs{item.price * item.count}</span>
                                    </div>

                                    <p>{item.description}</p>
                                    
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Buy all item</Link>
                        <h3>Total: Rs. {total}.00</h3>
                    </div>
                </div>
                )
            }
    }
}

export default AddToCard;
