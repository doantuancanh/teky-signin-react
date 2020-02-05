import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import './LoginPage.css';
import { login } from './../../actions/loginAction';

class LoginPage extends Component {
	constructor(){
    super()

    this.state = {
      email : "",
      password : "",
    };
  }

	onChange = (e) => {
		debugger
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name] : value
		})
	}

	onLogin = (e) => {
		debugger
		this.props.login(this.state.email, this.state.password);
    	e.preventDefault();
		// e.preventDefault();
		// var target = e.target;
		// var name = target.name;
		// var value = target.value;
		// this.setState({
		// 	[name] : value
		// })

		// var { email, password, logged, sesstion_token } = this.state;
		// var config = {
		// 	headers: {
		// 		'Origin': 'http://localhost:4000',
		// 		'Content-Type': 'application/json'
		// 	}
		// }
		// console.log(email, password);
		// axios({
		//   method: 'post',
		//   url: 'http://localhost:4000/users/sign_in',
		//   data: {
		//   	user : {
		// 	    email: email,
		// 	    password: password
		// 	}
		//   }
		// }).then(res => {
		// 	console.log(res);
		// 	debugger
		// 	if(res.data.status === 'ok'){
		// 		this.setState({
		// 			logged : true,
		// 			session_token : res.data.token
		// 		})
		// 	}
		// }).catch(err => {
		// 	alert('Wrong email or password')
		// });
	}

	render() {
		var { email, password } = this.state;
		// if(logged){
		// 	return <Redirect to='/home' />
		// }
		if (this.props.authService.token) {
	      return <Redirect to='/' />
	    }

		return (
			<div className="sidebar-top account2 font-regular" id="login-page">
				<div className="container" id="login-block">
			        <div className="account-info">
			            <a href="dashboard.html" className="logo"></a> 
			            <img src="assets/global/images/login.png" alt="" />
			        </div>
			        <div className="account-form">
			            <form className="form-signin" onSubmit={this.onLogin}>
			                <div className="append-icon">
			                    <input 
			                    	type="text" 
			                    	name="email" 
			                    	id="name" 
			                    	className="form-control form-white username" 
			                    	placeholder="E-mail" 
			                    	value={email}
			                    	onChange={this.onChange}
			                    />
			                    <i className="icon-user"></i>
			                </div>
			                <div className="append-icon">
			                    <input 
			                    	type="password" 
			                    	name="password" 
			                    	className="form-control form-white password" 
			                    	placeholder="Mật khẩu" 
			                    	value = {password}
			                    	onChange={this.onChange}
			                    />
			                    <i className="icon-lock"></i>
			                </div>
			                <div className="append-icon m-b-20 m-t-10">
			                    <label className=" font-regular">
			                        <input type="checkbox"></input>
			                        <span>  Ghi nhớ đăng nhập cho lần sau </span>
			                    </label>
			                </div>
			                <button type="submit" className="btn btn-primary btn-embossed b-0 bg-5DC2A7">Đăng nhập</button>
			                <span className="forgot-password"><a id="password">Quên mật khẩu?</a></span>
			                <p className="m-t-20">
			                    Nếu bạn không đăng nhập được hay gọi cho <br/>chúng tôi: +8424 7109 6668
			                </p>
			            </form>
			            <form className="form-password">
			                <h3><strong>Reset</strong> your password</h3>
			                <div className="append-icon m-b-20">
			                    <input type="password" name="password" className="form-control form-white password" placeholder="Password" required />
			                    <i className="icon-lock"></i>
			                </div>
			                <button type="submit" id="submit-password" className="btn btn-lg btn-danger btn-block ladda-button" data-style="expand-left">Send Password Reset Link</button>
			                <div className="clearfix m-t-60">
			                    <p className="pull-left m-t-20 m-b-0"><a id="login">Have an account? Sign In</a></p>
			                    <p className="pull-right m-t-20 m-b-0"><a href="user-signup2.html">New here? Sign up</a></p>
			                </div>
			            </form>
			        </div>
			    </div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  authService: state.authService
})


const mapDispatchToProps = dispatch => ({
  login: (email, password) => { dispatch(login(email, password)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)