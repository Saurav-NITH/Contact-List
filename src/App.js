import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AddUser } from "./features/AddUser";
import { EditUser } from "./features/EditUser";
import React from "react";
import { UserList } from "./features/UserList";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/add-user" element={<AddUser />} />

          <Route exact path="/edit-user" element={<EditUser />} />

          <Route exact path="/" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}
