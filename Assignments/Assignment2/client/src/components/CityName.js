import React from 'react';
import { connect } from 'react-redux';
import {Action} from '../actions/Action';

class CityName extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []     }; }
    componentDidMount() {
            fetch(`http://localhost:9000/getData`, {
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'get',
             })
            .then(res => res.json())
            .then(
              (result) => {
                // console.log(result)
                this.setState({items:result})

              })
          }
      render() {
        console.log(this.state.items);
          return (
            <div>
              <h1>State Name</h1>
            <div className="user overflow-auto" style={{height:"550px"}} >
{ this.state.items.map((item) =>
    <div className="card m-3" style={{"width":"18rem"}}>
      <div className="card-body">
      <h5 className="card-title text-center">{item.State}</h5>
        <button className="btn btn-primary ml-5" onClick={this.props.Show.bind(this,item.State)}>Show_Details</button>
      </div>
    </div>
)}
</div>
</div>
          ); }}

function mapActionToProps(dispatch) {
  return {

      Show: function(data) {

   let x= this.state.items.filter((item)=>item.State===data);
  //  console.log(x);
   dispatch(Action(x));

      }
  }}

export default connect(null, mapActionToProps)(CityName);