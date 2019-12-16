 import React, { Component } from 'react'
 import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMeals} from '../actions/mealActions'
import '../App.css'




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

    return (
            <div>
            <h1 className="Popular">Popular Vendors</h1><br></br>
            {mealItems}


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
