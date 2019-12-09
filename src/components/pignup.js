import React from "react";
import Layout from "./Layout";

const Signup = () => {
  return (
    <div>
      <Layout>
        <div className="mac bg-light">
          <div className="cam">
            <h3 align="center" className="text-primary py-3">
              Wallie
            </h3>
          </div>
          <div class="container">
            <div class="one my-5 bg-light">
              <form>
                <div className="container">
                  <div className="row mb-2">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>

                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="form-group ">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-group ">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Password "
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder="city"
                    />
                  </div>
                  <br />
                  <div>
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-block"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Signup;
