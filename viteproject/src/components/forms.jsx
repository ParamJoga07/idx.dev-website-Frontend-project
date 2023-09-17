import React, { useState } from 'react';
import '../components/forms.css'; // Create a CSS file for styling
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";

const DropdownForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <center>
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <div className='dropdownformheader'>
          <div className="button1">
            <button className='titlename' onClick={toggleDropdown}>Join WaitList</button>
            <BsChevronCompactDown className='dropdownicon'></BsChevronCompactDown>
          </div>

          <button className='button2'>Spaces{2}</button>
          <button className='button2'>UTF-8</button>
          <AiOutlineClose className='remove' onClick={toggleDropdown}></AiOutlineClose>

        </div>

        <div className="dropdown-content">
          <div className="name">
            <label className='left' htmlFor="">Name</label>
            <input className='right' type="text" placeholder="Name" />
          </div>
          <div className="name">
            <label className='left' htmlFor="">Email</label>
            <input className='right' type="email" placeholder="Email" />
          </div>

          <div className="name">
            <label className='left' htmlFor="">Country</label>
            <input className='right' type="text" placeholder="Country" />
          </div>
          <div className="name">
          <label className='left' htmlFor="">Terms</label>
          <input className='right' type="checkbox" placeholder="Country" />
          </div>
        </div>

      </div>
    </center>
  );
};

export default DropdownForm;
