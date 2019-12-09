
import React,{useState} from 'react'
import Layout from './Layout'
import {Link} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {signup} from '../API/authApi' 
// the above has to be changed

const LoginSchema = Yup.object().shape({
	// username:Yup.string()
	// 	.min(3, "Username must be 3 characters at minimum")
    // 	.required("Username is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .required('Please Enter your password')
      .matches(
		 /^(?=.{8,}$)(?=.?[a-z])(?=.?[A-Z])(?=.?[0-9])(?=.?\W).*$/,
          "invalid password"
		)
	
    
   });
// component register
const Login= () => {
    //set connection state
	const [ connect, setConnect] = useState({
        isLoading:false,
        isError:false,
        isSucess:false
	})
	//destruction connect
    const { isSucess } = connect
    //function to connect with signup function
	const register = (user) =>{

	 setConnect({...connect,isLoading:true,error:false})
	 signup(user)
	 .then(result=>{
		let { status } = result
			if(status!== 'undefined' && status === 'success'){		  
			  setConnect({...connect,isSucess:true,isLoading:false,isError:false})
			}
			else{
			  setConnect({...connect,isError:true,isLoading:false,isSucess:false})
			}
		//<link href
	  }).catch(error=>{
		setConnect({...connect,isError:true,isLoading:false,isSucess:false})
	  }  )

	}
  return (
     <Layout>
       {/* design */}
         <div class="container ">
            <div class="one my-5 mx-auto bg-light">
              {/* end of design */}
		 {isSucess ? <div class="alert alert-success" role="alert">
		 <span role='img' aria-label="happy face">😊</span> Signup successful
</div> : null}

     <div className="signup-form container">	
	 <Formik
              initialValues={{ email: "", password: " "}}
              validationSchema={LoginSchema}
              onSubmit={(values,{ setSubmitting }) => {
                register(values)
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
				<h2  className="py-3">Log in </h2>
				<p className="lead">your information are safe with us</p>
				
				

                  <div className="form-group">
						<div className="input-group">
						<span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className={`form-control ${
                        touched.email && errors.email ? "is-invalid" : ""
                      }`}
					 
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback ml-4"
                    />
						</div>
                  </div>

                  <div className="form-group">
					<div className='input-group'>
					<span className="input-group-addon"><i className="fa fa-lock"></i></span>
                    <Field
                      type="password"
                      name="password"
                      // placeholder="Enter password"
                      className={`form-control ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback ml-4"
                    />
					</div>
                  </div>


                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                </Form>
              )}
               
          
            </Formik>
		<div className="text-center py-4">dont't have an account? <Link to='/Signup'>sign up here</Link>.</div>
	</div>
    </div>
          </div>
        </Layout>
  )  
}


export default Login