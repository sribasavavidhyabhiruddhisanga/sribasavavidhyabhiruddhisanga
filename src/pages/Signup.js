import React from "react";

const Signup = () => (
  <div className="container mt-5">
    <h2>Signup</h2>
    <form>
      <input type="text" className="form-control mb-3" placeholder="Name" />
      <input type="email" className="form-control mb-3" placeholder="Email" />
      <input type="password" className="form-control mb-3" placeholder="Password" />
      <button className="btn btn-success">Create Account</button>
    </form>
  </div>
);

export default Signup;
