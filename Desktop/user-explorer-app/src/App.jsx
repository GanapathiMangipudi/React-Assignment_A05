import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchUsers() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        if (!cancelled) {
          setUsers(res.data || []);
        }
      } catch (err) {
        if (!cancelled) setError("Failed to load users. Try again later.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchUsers();

    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4">User Explorer App</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Search by name</label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a name, e.g. Leanne"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring"
          />
        </div>
        {loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : filtered.length === 0 ? (
          <p>No users match your search.</p>
        ) : (
          <UserList users={filtered} />
        )}
      </div>
    </div>
  );
}
