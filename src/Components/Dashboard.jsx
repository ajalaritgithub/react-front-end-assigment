import React from "react";
import Table from 'react-bootstrap/Table';
import Menu from "./Menu";

const Dashboard = () => {

	return (
		<div style={{marginLeft: "8rem",marginRight: "8rem"}}>

		
		<Menu/>
		<Table striped bordered>
	
		  <thead>
			<tr>
			  <th style={{backgroundColor:"#ff0000", color:"#ffffff", fontSize:30}}>Id</th>
			  <th style={{backgroundColor:"#ff0000", color:"#ffffff", fontSize:30}}>Name</th>
			  <th style={{backgroundColor:"#ff0000", color:"#ffffff", fontSize:30}}>Designation</th>
			  <th style={{backgroundColor:"#ff0000", color:"#ffffff", fontSize:30}}>Location</th>
			  <th style={{backgroundColor:"#ff0000", color:"#ffffff", fontSize:30}}>Salary</th>
			</tr>
		  </thead>
		  <tbody>
			<tr>
			  <td>1</td>
			  <td>Nikhil</td>
			  <td>Senior Android Developer</td>
			  <td>Delhi</td>
			  <td>15 LPA</td>
			</tr>
			<tr>
			  <td>2</td>
			  <td>Ajala</td>
			  <td>Full Stack Developer</td>
			  <td>Kerala</td>
			  <td>08 LPA</td>
			</tr>
			<tr>
			  <td>3</td>
			  <td>Soni</td>
			  <td>Senior Software Developer</td>
			  <td>Noida</td>
			  <td>12 LPA</td>
			</tr>
			<tr>
			  <td>4</td>
			  <td>Priyanka</td>
			  <td>Senior Database Administration</td>
			  <td>Delhi</td>
			  <td>13 LPA</td>
			</tr>
			<tr>
			  <td>5</td>
			  <td>Prerna</td>
			  <td>Senior Operations Manager</td>
			  <td>Noida</td>
			  <td>15 LPA</td>
			</tr>
			<tr>
			  <td>6</td>
			  <td>Bipul</td>
			  <td>Software Developer</td>
			  <td>Delhi</td>
			  <td>09 LPA</td>
			</tr>
		  </tbody>
		</Table>
		</div>
	);
};

export default Dashboard;
