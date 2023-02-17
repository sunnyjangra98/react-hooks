import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  console.log("Rendering edit page for - ", props.currentUser);
  /*useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )*/
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    props.setUser({ ...props.user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(props.user.id, props.user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={props.user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={props.user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
