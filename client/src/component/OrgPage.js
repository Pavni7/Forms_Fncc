import React, { useState } from "react";

const OrganizationForm = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationMail: "",
    date: "",
    moneyGiven: "",
    status: "",
    amountAtOrganization: "",
    amountGivenMonthly: "",
    remainingBalance: "",
    interest: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here, you would typically send the data to an API or backend.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Organization Name:</label>
        <select
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
        >
          <option value="">Select Organization</option>
          <option value="Org1">Organization 1</option>
          <option value="Org2">Organization 2</option>
          <option value="Org3">Organization 3</option>
          {/* Add more organizations as needed */}
        </select>
      </div>

      <div>
        <label>Organization Mail:</label>
        <input
          type="email"
          name="organizationMail"
          value={formData.organizationMail}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Money Given by Organization:</label>
        <input
          type="number"
          name="moneyGiven"
          value={formData.moneyGiven}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select Status</option>
          <option value="Completed">Completed</option>
          <option value="Processing">Processing</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <div>
        <label>Amount at Organization:</label>
        <input
          type="number"
          name="amountAtOrganization"
          value={formData.amountAtOrganization}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Amount Given Monthly:</label>
        <input
          type="number"
          name="amountGivenMonthly"
          value={formData.amountGivenMonthly}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Remaining Balance:</label>
        <input
          type="number"
          name="remainingBalance"
          value={formData.remainingBalance}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Interest:</label>
        <input
          type="number"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default OrganizationForm;
