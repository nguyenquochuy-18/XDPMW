import React, { Component } from 'react'

export default class items extends Component {
    constructor() {
        super();
    
        this.state = {
            category: []
        }
      }
    async componentDidMount() {
        await fetch("https://aromashopqhuy.x10.mx/admin/api/category")
          .then(res => res.json())
          .then((data) => {
            this.setState({ category: data })
          })
          .catch(console.log)
      }
    
      renderCategory=()=>{
        let category=this.state.category.map((data,index)=>
          
         <li className="filter-list"><input className="pixel-radio" type="radio" id={data.id} name="brand" /><label htmlFor="men">{data.cate_name}</label></li>
                        
        )
        return category;
      }
  render() {
    return (
   
        <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="sidebar-categories">
                <div className="head">Browse Categories</div>
                <ul className="main-categories">
                  <li className="common-filter">
                    <form action="#">
                      <ul>
                      {this.renderCategory()} 
                      </ul>
                    </form>
                  </li>
                </ul>
              </div>
              
            </div>
 
    )
  }
}




