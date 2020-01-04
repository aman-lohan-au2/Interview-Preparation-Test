import React from 'react';
import { connect } from 'react-redux';

class Detail extends React.Component {

      render() {
        console.log(this.props.Data);
          return (
            <div>
            <h1 style={{marginLeft:"500px"}}>City Name</h1>

            <div className="user overflow-auto" style={{height:"550px",marginLeft:"500px"}} >
{this.props.Data.length ? <div>
    {
this.props.Data[0].cities.map((item,index)=> 
      <h1>{item}</h1>
 )
}
</div>:<h1></h1>}
</div>
</div>
          ); }}


function mapStateToProps(state) {
return {
    Data:state.data
};
}
export default connect(mapStateToProps)(Detail);