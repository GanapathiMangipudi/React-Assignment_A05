import React from "react";


function UserCard({ user }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <h3 className="text-lg font-medium">{user.name}</h3>
      <p className="text-sm text-slate-600">Email: {user.email}</p>
      <p className="text-sm text-slate-600">Company: {user.company?.name}</p>

      <div className="mt-3 text-sm text-slate-500">
        <div>Username: {user.username}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
      </div>
    </div>
  );
}

export default UserCard;
