import React from "react";

const UserRank = ({ name, entries }) => {
  return (
    <div>
      <div className="white-80 f4 pa2">{`Welcome ${name}, your current entry count is...`}</div>
      <div className="white-80 f2">{entries}</div>
    </div>
  );
};

export default UserRank;
