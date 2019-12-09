import React from "react";
import Layout from "./Layout";

const Login = () => {
    return (
        <div>
            <Layout>
               
                <div className="cop mt-70 bg-light pt-10">
           
           <div className="poc ">
           <h3 align="center" className="text-primary py-3">Wallie</h3>
       </div>

       <div className="myl">
       <form>

              <div className="form-group ">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className=" form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>

              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Remember password</label>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br/>
            <p align="center"><a href="/">forget password ?</a></p>
       </div>

    </div>




                    
               
            </Layout>
        </div>
    );
};
export default Login;
