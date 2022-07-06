import React from "react";

const UserList = ({ list }) => {
    return (
      <div className="card">
        <ul className="user-list">
          {list.map((item, index) =>{
          return (
            <li>
              <span className="name">{item.name}</span>{" "}
              <span className="age">({parseInt(item.age)} years old)</span>
            </li>
          );})}
        </ul>
      </div>
    );
};

export default UserList;
