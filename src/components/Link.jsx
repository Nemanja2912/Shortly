import React, { useRef } from "react";

const Link = ({ oldLink, newLink }) => {
  const newLinkText = useRef(null);

  function handleCopy() {
    navigator.clipboard.writeText(newLinkText.current.textContent);
  }

  return (
    <div className="link">
      <div className="old">
        <p>{oldLink}</p>
      </div>

      <div className="new">
        <p ref={newLinkText}>{newLink}</p>
        <i onClick={handleCopy} className="fas fa-paste"></i>
      </div>
    </div>
  );
};

export default Link;
