import React, { Component } from 'react'
import Topmenu from '../components/ingredient/topmenu'
import Slide from '../components/ingredient/slide'
import TrendPro from '../components/ingredient/trendproducts'
import Flooter from '../components/ingredient/flooter'

export default class home extends Component {
  render() {
    return (
      <div>
        <Slide></Slide>
      
        <TrendPro></TrendPro>
   
      </div>
    )
  }
}
