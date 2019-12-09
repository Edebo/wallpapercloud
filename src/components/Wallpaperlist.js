import React, { useState, useEffect } from "react";
import  {getWallpaper} from "../API/wallpaperApi";
import Wallpapercard from './Wallpapercard'
const Wallpaperlist = () => {
  const [connect, setConnect] = useState({
    loading: false,
    error: false,
    success: false
  });
  const [data, setData] = useState({
    Search: [],
    totalResults: "",
    Response: ""
  });

  //destructing loading

  const { loading, error, success } = connect;
  const { Search } = data;
  useEffect(() => {
    setConnect({
      ...connect,
      loading: true,
      error: false,
      success: false
    });
    getWallpaper()
      .then(res => {
        const { Response, Search, totalResults } = res;
        if (Response === "True") {
          setData({
            ...data,
            Response,
            Search,
            totalResults
          });
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
        {Search.map((movie, i) => {
          return < Wallpapercard movie={movie}/>;
        })}
      </div>{" "}
    </div>
  );
};
export default Wallpaperlist;
