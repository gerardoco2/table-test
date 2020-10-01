import React, { useState, useEffect } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import Search from '../components/Search/Search'

const App = () => {


  const usersData = [
    { id: "1", name: 'Username1', package: "package example", date: "2020-09-14", price: 54, asignee: "Not Admin" },
    { id: "2256", name: 'aroon', package: "package example", date: "2020-09-14", price: 123, asignee: "Not Admin" },
    { id: "3", name: 'sandra', package: "package example", date: "2020-09-14", price: 78, asignee: "Not Admin" },
    { id: "4", name: 'Richard', package: "package example", date: "2020-09-14", price: 156, asignee: "Not Admin" },
    { id: "25", name: 'gerald', package: "package example", date: "2020-09-14", price: 85, asignee: "Not Admin" },
    { id: "6", name: 'Username6', package: "package example", date: "2020-09-14", price: 532, asignee: "Not Admin" },
    { id: "7", name: 'Username7', package: "package example", date: "2020-09-14", price: 54, asignee: "Not Admin" },
    { id: "8", name: 'Username8', package: "package example", date: "2020-09-14", price: 123, asignee: "Not Admin" },
    { id: "9", name: 'Username9', package: "package example", date: "2020-09-14", price: 78, asignee: "Not Admin" },
    { id: "10", name: 'Username10', package: "package example", date: "2020-09-14", price: 156, asignee: "Not Admin" },
    { id: "11", name: 'Username11', package: "package example", date: "2020-09-14", price: 85, asignee: "Not Admin" },
    { id: "12", name: 'Username12', package: "package example", date: "2020-09-14", price: 532, asignee: "Not Admin" },
    { id: "14", name: 'Username13', package: "package example", date: "2020-09-14", price: 54, asignee: "Not Admin" },
    { id: "15", name: 'Username14', package: "package example", date: "2020-09-14", price: 123, asignee: "Not Admin" },
    { id: "16", name: 'Username15', package: "package example", date: "2020-09-14", price: 78, asignee: "Not Admin" },
    { id: "17", name: 'Username16', package: "package example", date: "2020-09-14", price: 156, asignee: "Not Admin" },
    { id: "18", name: 'Username17', package: "package example", date: "2020-09-14", price: 85, asignee: "Not Admin" },
    { id: "19", name: 'Username18', package: "package example", date: "2020-09-14", price: 532, asignee: "Not Admin" }
  ];


  const [users, setUsers] = useState(usersData);
  const [query, setQuery] = useState("");

  const getUsersData = async () => {
    try {

      /*  const data = await axios.get(
         URL FOR FETCH USERS DATA FROM THE API SHOULD GO HERE 
       );
      */
    } catch (e) {
      console.log(e);
    }
  }

  /*  WHEN GETTING DATA FROM AN API 
  useEffect(() => {
     getUsersData();
     setUsers(usersData);
  }, []); */

  const deleteUser = (id) => {
    const newArr = [...users];
    const result = newArr.filter(user => user.id !== id);

    setUsers(result);

  }

  const deleteHandler = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div className="mt-2">
        <span className="delete" onClick={() => deleteUser(row.id)}>x</span >
      </div >
    );
  }

  const asigneeHadle = (e, id) => {
    let arr = [...users];
    let index = arr.findIndex(user => user.id === id);
    arr[index].asignee = e.target.value;

  }

  const assingFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <select className="form-control" onChange={(e) => asigneeHadle(e, row.id)} id="asignee" name="asignee">
        <option value="">Select</option>
        {users.map(user => (
          <option key={user.id} value={user.name}>{user.name}</option>
        ))}
      </select>
    );
  }

  const search = (users) => {
    return users.filter(user => user.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
  }

  const columns = [
    { dataField: "name", text: 'User Name', sort: true },
    { dataField: 'package', text: 'Package' },
    { dataField: 'date', text: 'Date' },
    { dataField: 'price', text: 'Price' },
    { dataField: 'asignee', text: 'Asignee', sort: false, formatter: assingFormatter },
    {
      dataField: "Delete",
      text: "Delete",
      sort: false,
      formatter: deleteHandler,
      headerAttrs: { width: 100, },
      attrs: { className: "EditRow" }
    }
  ];



  return (
    <div className="App container">
      <Search word={query} query={setQuery} />
      <BootstrapTable
        keyField="id"
        data={search(users)}
        columns={columns}
        classes="react-bootstrap-table"
        pagination={paginationFactory()}
        striped={true}
      />
    </div>
  );
}

export default App;
