import React, {Component} from 'react';
import axios from 'axios';
 export default class Create extends Component{

constructor(props){
    super(props);
    this.onChangePersonNumber=this.onChangePersonNumber.bind(this);
    this.onChangeBusinessName=this.onChangeBusinessName.bind(this);
    this.onChangeNICNumber=this.onChangeNICNumber.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    
    this.state={     //initial state
        person_name:'',
        business_name:'',
        business_nic_number:''
    }

}
//Methods
onChangePersonNumber(e){
    this.setState({
        person_name: e.target.value

    });
}

onChangeBusinessName(e){
    this.setState({
        business_name:e.target.value
    });
}


onChangeNICNumber(e){
    this.setState({
        business_nic_number:e.target.value
    });
}

onSubmit(e){
    e.prevenDefault();
   const obj = {
       person_name : this.state.person_name,
       business_name : this.state.business_name,
       business_nic_number : this.state.business_nic_number
   };
   axios.post('http://localhost:4000/business/add',obj).then(res=>console.log(res.data));
   this.setState({
       person_name: '',
       business_name:'',
       business_nic_number:''
   });
}

    render(){
        return(
            <div  style={{marginTop:10}}>
                <h3>Add New Lib</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Persion Name:</label>
                        <input type="text" className="form-control" value={this.state.person_name} onChange={this.onChangePersonNumber}></input>
                        <label>Add Business Name:</label>
                        <input type="text" className="form-control" value={this.state.business_name} onChange={this.onChangeBusinessName}></input>
                        <label>Add  NIC Number:</label>
                        <input type="text" className="form-control" value={this.state.business_nic_number} onChange={this.onChangeNICNumber}></input>
                        <div className="form-group">
                           
                            <button type="submit" value="Register" className="btn btn-primary">Register</button>

                        </div>
                    </div>
                </form>
                
            </div>
        )
    }

 }