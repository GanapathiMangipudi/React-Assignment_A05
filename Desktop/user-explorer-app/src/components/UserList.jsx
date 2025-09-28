import React from "react";
import UserCard from "./UserCard";
import "../styles.css";

function UserList({ users }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
