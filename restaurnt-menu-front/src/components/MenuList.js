import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL, headers } from "./../services/menu.service";
import { useNavigate } from "react-router-dom";

export const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  const [deleted, setDeleted] = useState(false);

  const retrieveAllMenus = () => {
    axios
      .get(`${baseURL}/menu/`)
      .then((response) => {
        setMenus(response.data);
        console.log(menus);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteMenu = (id) => {
    axios
      .delete(`${baseURL}/menu/${id}/`)
      .then((response) => {
        setDeleted(true);
        retrieveAllMenus();
      })
      .catch((e) => {
        console.error(e);
      });
  };


  useEffect(() => {
    retrieveAllMenus();
  }, []);

  const handleUpdateClick = (id) => {
    navigate(`/menu/${id}/update/`);
  };
  return (
    <div className="row justify-content-center">
      <div className="col">
        {deleted && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Menu deleted!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() =>{ setDeleted(false)}}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        {menus &&
          menus.map((menu) => (
            <div key={menu.id} className="card my-3 w-50 mx-auto">
              <div className="card-body">
                <h2 className="card-title font-weight-bold">{menu.name}</h2>
                <p className="card-text mb-2 font-weight-bold "> Price: {menu.price}</p>
                <p className="card-text">About: {menu.description}</p>
              </div>
              <div className="card-footer">
                <div
                  className="btn-group justify-content-around w-75 mb-1 "
                  data-toggle="buttons"
                >
                  <span>
                    <button
                      className="btn btn-info"
                      onClick={() => handleUpdateClick(menu.id)}
                    >
                      Update
                    </button>
                  </span>
                  <span>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteMenu(menu.id)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
