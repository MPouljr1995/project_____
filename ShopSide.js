import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Pages/Data'
import '../Pages/cssPages/ShopSide.css'

import Rating from '@material-ui/lab/Rating';
import {Grid,Paper,Card,CardContent,Typography,Button, CardActions,CardMedia,CardActionArea} from '@material-ui/core';

export class ShopSide extends Component {

    static contextType = DataContext;

    state = {value:3};

    render() {
        const {products,addCart,shops,buythins} = this.context;
        
        return (
            <div>
                {
                    shops.map(shop =>(
                        <Card className= "shopCover" elevation= {10}>
                            {/* <CardActionArea> */}
                                    <CardMedia>
                                        <img src= {shop.src} alt="Logo" className= "ShopProfilePhoto"/>
                                    </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" className="shopname">
                                        {shop.shop_name}  
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {shop.description}
                                    </Typography>

                                    <Rating name="read-only" value={this.state.value} readOnly />
                                    <button>EDIT</button>

                                </CardContent>
                            {/* </CardActionArea> */}
                            
                        </Card>
                    ))
                }
            

            <div id="Shop">
               {
                    products.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3>
                               <span>Rs.{product.price}</span>
                               <p>{product.description}</p>

                               <Rating name="read-only" value={this.state.value} readOnly />
                                <div>
                                    {/* <button onClick={()=> addCart(product._id)}>Add to cart</button>
                                    <button type="submit" href='/booklist'>buy now</button>                                    
                                    <button>EDIT</button> */}

                                    <Button id="item_B" onClick={()=> addCart(product._id)}>Add to cart</Button>
                                    <Button id="item_B" onClick={()=> buythins(product._id)} href='/payment'>buy now</Button>
                                    <Button id="item_B">EDIT</Button>

                                </div>
                           </div>
                       </div>
                   ))
               }
            </div>
        </div>
    )
}
}

export default ShopSide;