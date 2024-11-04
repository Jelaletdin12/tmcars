import React, { useState } from "react";
import styles from "./employee.module.scss";
import profile from "../../assets/profile.png";

const EmployeePage = () => {
  // Employee's profile data
  const employeeProfile = {
    name: "John Doe",
    position: "Sales Manager",
    profileImage: profile, // Placeholder profile image
  };

  // Employee's assigned inventory
  const [employeeInventory, setEmployeeInventory] = useState([]);

  // Main inventory database
  const [inventoryList, setInventoryList] = useState([
    { id: 1, name: "Acer Nitro 7", quantity: 10, price: "$30000" },
    { id: 2, name: "Asus Rog 17", quantity: 15, price: "$50000" },
    { id: 3, name: "HP Rog 17", quantity: 20, price: "$45000" },
  ]);

  // Selected inventory and quantity to assign to employee
  const [selectedInventory, setSelectedInventory] = useState([]);
  const [quantity, setQuantity] = useState({});

  const handleAddToEmployee = () => {
    const updatedEmployeeInventory = [...employeeInventory];
    const updatedInventoryList = inventoryList.map((item) => {
      const assignQuantity = parseInt(quantity[item.id], 10) || 0;

      // If the item is selected and quantity is valid
      if (
        selectedInventory.includes(item.id) &&
        assignQuantity > 0 &&
        assignQuantity <= item.quantity
      ) {
        // Check if the item already exists in the employee's inventory
        const existingItem = updatedEmployeeInventory.find(
          (empItem) => empItem.id === item.id
        );

        if (existingItem) {
          // Update quantity if item already exists in employee's inventory
          existingItem.quantity += assignQuantity;
        } else {
          // Add new item to employee's inventory
          updatedEmployeeInventory.push({
            ...item,
            quantity: assignQuantity,
          });
        }

        // Reduce the quantity in the main inventory
        return { ...item, quantity: item.quantity - assignQuantity };
      }

      return item;
    });

    // Update state with modified inventories
    setEmployeeInventory(updatedEmployeeInventory);
    setInventoryList(updatedInventoryList);
    setSelectedInventory([]);
    setQuantity({});
  };

  const handleSelectInventory = (id) => {
    setSelectedInventory((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div className={styles.employeePage}>
      <div className={styles.employeeProfile}>
        <img
          src={employeeProfile.profileImage}
          alt="Profile"
          className={styles.profileImage}
        />
        <div>
          <h2>{employeeProfile.name}</h2>
          <p>{employeeProfile.position}</p>
        </div>
      </div>
      <div className={styles.inventoryContainer}>

        <div className={styles.employeeInventory}>
          <h2>Employee Inventory</h2>
          <ul>
            {employeeInventory.length === 0 ? (
              <p>No inventory assigned.</p>
            ) : (
              employeeInventory.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.quantity} units
                </li>
              ))
            )}
          </ul>
        </div>

        <div className={styles.mainInventory}>
          <h2>Main Inventory</h2>
          <ul>
            {inventoryList.map((item) => (
              <li key={item.id}>
                <div className={styles.inventoryItem}>
                  <span>
                    {item.name} - Available: {item.quantity}
                  </span>
                  <input
                    type="checkbox"
                    checked={selectedInventory.includes(item.id)}
                    onChange={() => handleSelectInventory(item.id)}
                  />
                  <input
                    type="number"
                    placeholder="Quantity"
                    min="1"
                    max={item.quantity}
                    value={quantity[item.id] || ""}
                    onChange={(e) =>
                      setQuantity({ ...quantity, [item.id]: e.target.value })
                    }
                    disabled={!selectedInventory.includes(item.id)}
                  />
                </div>
                
              </li>
            ))}
          </ul>
          <button onClick={handleAddToEmployee} className={styles.addButton}>
            Add to Employee
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default EmployeePage;
