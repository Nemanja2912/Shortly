import React from "react";
import Link from "./Link";

const LinkLists = ({ list }) => {
  return (
    <div className="link-list">
      <div className="header">
        <p>Long URL</p>
        <p>Short URL</p>
      </div>
      <div className="body">
        {list.map((link) => (
          <Link key={link.id} oldLink={link.oldLink} newLink={link.newLink} />
        ))}
      </div>
    </div>
  );
};

export default LinkLists;
