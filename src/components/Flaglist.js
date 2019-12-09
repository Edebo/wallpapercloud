import React, { useState, useEffect } from "react";
import  {getFlag} from "../API/wallpaperApi";
import Flagcard from './Flagcard'
const Flaglist = () => {
  const [connect, setConnect] = useState({
    loading: false,
    error: false,
    success: false
  });
  const [data, setData] = useState([ ]);

  //destructing connect object loading
  const { loading, error, success } = connect;

  //use effect is used to get the info
  //from  API
  useEffect(() => {
    //set sstate of the connection
    setConnect({
      ...connect,
      loading: true,
      error: false,
      success: false
    });
    getFlag()
      .then(res => {
        if (res.length !== null) {
          // console.log(res)
          setData(res);
          setConnect({
            ...connect,
            loading: false,
            success: true,
            error: false
          });
        } else {
          setConnect({
            ...connect,
            error: true,
            loading: false,
            success: false
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {" "}
      {loading ? (
        <div className="alert alert-danger"> loading... </div>
      ) : null}{" "}
      {error ? (
        <div className="alert alert-warning"> this is an error... </div>
      ) : null}{" "}
      {success ? (
        <div className="alert alert-success"> successful... </div>
      ) : null}
      <div className="row equal my-5">
        {data && data.map((country, i) => {
          return <Flagcard country={country} key={i} />;
        })}
      </div>{" "}
    </div>                                                                     
  );
};
export default Flaglist;
