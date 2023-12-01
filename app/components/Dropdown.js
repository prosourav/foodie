import React, { useState } from "react";

function Dropdown({ name, options, onSelect }) {
  // state variable to keep track of the dropdown status
  const [open, setOpen] = useState(false);

  // function to toggle the dropdown on click
  function handleClick() {
    setOpen(!open);
  }

  // function to handle the selection of an option
  function handleSelect(option) {
    onSelect(option); // call the callback function
    setOpen(false); // close the dropdown
    
  }

  return (
    <div className="dropdown">
      {/* the button element */}
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          borderRadius: "20px"
        }}
        onClick={handleClick}
      >
        {name}
      </button>
      {/* the content element */}
      <div
        style={{
          display: open ? "block" : "none",
          backgroundColor: "white",
          margin: "10px 12px",
          position: "absolute",
          borderRadius: "2px",
          marginTop: "5px",
          background: '#FFF',
        }}
      >
        {/* the list of options */}
        <ul style={{ listStyle: "none", margin: "0", padding: "0"}}>
          {options.map((option) => (
            <a
              key={option.item}
              className="menu"
              target="_blank"
              rel="noreferrer"
              href={option.menu}
            >
              {option.item}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
