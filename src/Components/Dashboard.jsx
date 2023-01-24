import React from "react";
import Table from 'react-bootstrap/Table';
import Menu from "./Menu";
import { useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {

	var [empData, setData] = useState([]);
        useEffect(() => {
          fetchEmployeedata();
        }, []);
    

    var apLink = "https://jsonplaceholder.typicode.com/users";

          const fetchEmployeedata = () => {
           axios
          .get(apLink)
          .then((response) => {
            setData(response.data);
          })
          .catch();
        };

	return (
		<div style={{marginLeft: "8rem",marginRight: "8rem"}}>

		
		<Menu/>
		<Table striped bordered>
	
		  <thead>
			<tr>
			  <th style={{backgroundColor:"#ff0000", color:"#ffffff", fontSize:30}}>Id</th>
			  <th style={{backgroundColor:"#ff0000", color:"#ffffff", fontSize:30}}>Name</th>
			  <th style={{backgroundColor:"#ff0000", color:"#ffffff", fontSize:30}}>Email</th>
			</tr>
		  </thead>
		  <tbody>
			{empData.map((item,key) =>{
                    return(
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                     </tr>
                    );
                  })}
		  </tbody>
		</Table>
		</div>
	);
};

export default Dashboard;
