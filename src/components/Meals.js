 import React, { Component } from 'react'
 import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMeals} from '../actions/mealActions'
import '../App.css'
import '../material.css'




class Meals extends Component {
    componentWillMount(){
        this.props.fetchMeals();
    }
    

    render() {
        const mealItems=this.props.meals.map(meal=> (
           <div className = "col-md-4" key = {meal.id}>
     
      
    
<img className="image-styling" src={meal.imageUrl} />
<h4>{meal.name}</h4>
        <p>{meal.price}</p>
       <p>{meal.priceCurrency}</p>

        </div>
        )); 
const meals=this.props.meals.map(meal=> (
   
    <div className="col-md-4" key = {meal.id}>
     
                  <div className="card card-plain card-blog">
                    <div className="card-header card-header-image" style={{width:"350px"}}>
                      <a href="#pablo">
                        <img className="img img-raised" style={{height:"220px"}} src={meal.imageUrl} />
                      </a>
                    </div>
                    <div className="card-body ">
                      
                      <h2 className="card-title">
                        <a href="#pablo">{meal.name}</a>
                      </h2>
                      <p className="card-description">
                        <p>{meal.priceCurrency}{meal.price}</p>
                        <a href="#pablo"> Read More </a>
                      </p>
                    </div>
                  </div>
                
    


        
 	</div>
        )); 

    return (
		
	<div className="col-md-12 ml-auto mr-auto">
              <h1 className="title" style={{textAlign:"center"}}>Popular Meals and Restaurants</h1>
              {meals}

            </div>
         
        );
    }
}


Meals.propTypes = {
fetchMeals:PropTypes.func.isRequired,
meals:PropTypes.array.isRequired
}

const mapStateToProps = state => ({
   meals:state.meals.items
});

export default connect(mapStateToProps,{fetchMeals})(Meals);
