import React from 'react';
import {Link} from 'react-router-dom';

class HLogin extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			showlink:false,
			hid: 0,
			password: ''
		}
	}
	onHIDChange = (event) =>{this.setState({hid: event.target.value})}
	onPasswordChange = (event) =>{this.setState({password: event.target.value})}

	onSubmitHLogin = (event)=>{
		fetch('http://localhost:3001/hLogin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				hid: this.state.hid,
				password: this.state.password,
			})
		}).then(response => response.json())
		.then(hospital => {
			if(!(hospital.hid)){
				alert(hospital);
				console.log(hospital);
			}
			else{
				this.props.loadHospital(hospital);
				this.setState({showlink:true})
			}
		})
		console.log(this.state)
	}

	render(){
		
		return(
			<div>
				{
					this.state.showlink?
						<div>
							<h2>Logged in Successfully</h2>
							<Link to='/Hospital' className="f4 blue link dim grow">Go to Hospital Dashoard</Link>
						</div>
					:
						<div className="container">
							<b className="page_title">Hospital Login</b>
							<div className="form">
							  <div className="form_input">
									<label>
										<span className="label">Hospital ID:<b style={{color: "red"}}>*</b></span> 
										<input type="number" name="hid" id="hid" placeholder="XXXXXXXX" onChange={this.onHIDChange}/>
									</label>
								</div>
								<div className="form_input">
									<label>
										<span className="label">Password:<b style={{color: "red"}}>*</b></span>
										<input type="password" name="password" id="password" onChange={this.onPasswordChange}/>
									</label>
								</div>
							</div>
							<div className="submit_btn_div">
								<button onClick={this.onSubmitHLogin} type="submit">Login</button>
							</div>
						</div>
				}
			</div>


			/*<div className="container">
				<b className="page_title">Hospital Login</b>
				<div className="form">
				  <div className="form_input">
						<label>
							<span className="label">Hospital ID:<b style={{color: "red"}}>*</b></span> 
							<input type="number" name="hid" id="hid" placeholder="XXXXXXXX" onChange={this.onHIDChange}/>
						</label>
					</div>
					<div className="form_input">
						<label>
							<span className="label">Password:<b style={{color: "red"}}>*</b></span>
							<input type="password" name="password" id="password" onChange={this.onPasswordChange}/>
						</label>
					</div>
				</div>
				<div className="submit_btn_div">
					<Link to='/Hospital' onClick={this.onSubmitHLogin} >
						<button type="submit">Login</button>
					</Link>
				</div>
			</div>*/

		);
	}
}
export default HLogin;