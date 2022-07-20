import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import Button from "./Button";
import InfoIcon from "./InfoIcon";
import ErrorModal from "./ErrorModal";

const UserForm = () => {
  const [input, setInput] = useState({ name: "", age: "" });
  const [list, setList] = useState([]);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const username = input.name;
  const age = input.age;
  const letterRegex = /[a-z]/i;
  const numRegex = /^\d+$/;
  const isValidName =  username.trim().length > 1 && letterRegex.test(username.charAt(0));
  const isValidAge = numRegex.test(age) && age > 4 && age < 100;

  const handleNameInput = (e) => {
    setInput({ ...input, name: e.target.value });
      setSubmitAttempted(false);
  };

  const handleAgeInput = (e) => {
    setInput({ ...input, age: e.target.value });
      setSubmitAttempted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidAge && isValidName) {
      setList((prev) => [input, ...prev]);
      setInput({ name: "", age: "" });
      setSubmitAttempted(false);
    } else {
      setSubmitAttempted(true);
      setShowModal(true);
    }
  };

  useEffect(() => {
    console.log(submitAttempted);
    if (!username.length && !age && !submitAttempted) {
      console.log("no input")
      setSubmitAttempted(false);
    }
  }, [submitAttempted, username, age]);

  const Tooltip = ({ content }) => {
    return (
      <div className="tooltip">
        <p>{content}</p>
      </div>
    )
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ErrorModal closeModal={handleCloseModal} show={showModal} />
      <div className="form-container card">
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <span className="info-icon">
              <InfoIcon />
              <Tooltip
                content={"Must begin with a letter and be at least 2 characters long."}
              />
            </span>
          </label>
          <input
            type="text"
            onChange={handleNameInput}
            value={input.name}
            className={`input-field ${
              !isValidName && submitAttempted ? "error" : ""
            }`}
          />
          <label>
            Age (Years)
            <span className="info-icon">
              <InfoIcon />
              <Tooltip
                content={"Must be between 5 and 100."}
              />
            </span>
          </label>
          <input
            type="text"
            onChange={handleAgeInput}
            value={input.age}
            className={`input-field ${
              !isValidAge && submitAttempted ? "error" : ""
            }`}
          />
          <Button className={"submit-btn"} type={"submit"}>Submit</Button>
        </form>
      </div>
      <UserList list={list} />
    </>
  );
};

export default UserForm;
