import React,{Component} from 'react';
import axiios from 'axios';

export default class Edit extends Component{

   constructor (props){

    super(props);
    this.onChangePersonName= this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this. onChangeBusinessName.bind(this);
    this.onChangeBusinessNICNumber = this.onChangeBusinessNICNumber(this);
    this.onSubmit = this.onSubmit.bind(this);
this.state={
    person_name:'',
    business_name: '',
    business_nic_name:''
}

   }

   componentDidMount(){
       axiios.get('http://localhost:4000/business/edit'+this.props.match.params.id)
       .then(response =>{
           this.setState({
               person_name:response.data.person_name,
               business_name:response.data.business_name,
               onChangeBusinessNICNumber:response.data.onChangeBusinessNICNumber
           });

       })
       .catch(function (error){
           console.log(error);
       })
   }

   onChangePersonName(e){
       this.setState({
            person_name:e.target.value
       });
   }

   onChangeBusinessName(e){
       this.setState({
           business_name:e.target.value
       })
   }

   onChangeBusinessNICNumber(e){
       this.setState({
           business_nic_name:e.target.value
       })
   }

   onSubmit(e){
       e.prevenDefault();
       const obj = {
           person_name:this.state.person_name,
           business_name: this.business_name,
           business_nic_name: this.business_nic_name
       }
       axiios.podt('http://localhost:4000/business/update'+this.props.match.params.id,obj)
       .then(res=>console.log(res.data));

       this.props.history.push('index');
   }
}