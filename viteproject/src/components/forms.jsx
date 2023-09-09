import React, { useState } from 'react';
import '../components/forms.css'; 

function Forms() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="forms-container">
    <div className="Forms">
      <button onClick={toggleForm}>Open Form</button>

      {/* Conditional rendering for the form */}
      {isFormOpen && (
        <div className="form-container">
          <form>
            {/* Your form inputs and elements go here */}
            <label>
              Name:
              <input type="text" />
            </label>
            <label>
              Email:
              <input type="email" />
            </label>
            {/* Add more form elements as needed */}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
}

export default Forms;
