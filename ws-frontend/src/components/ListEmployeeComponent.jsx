import React from "react";

const ListEmployeeComponent = () => {
  const dummydata = [
    {
      id: 1,
      firstName: "Amol",
      lastName: "Shinde",
      email: "amol@gmail.com",
    },
    {
      id: 2,
      firstName: "Julliete",
      lastName: "Binoche",
      email: "julliete@gmail.com",
    },
    {
      id: 3,
      firstName: "Tony",
      lastName: "Leung",
      email: "tony@gmail.com",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {dummydata.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
