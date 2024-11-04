import React, { useState } from "react";
import styles from "./inventoryManager.module.scss";

const InventoryManager = () => {
  const [productName, setProductName] = useState("");
  const [productstatus, setProductstatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Acer Nitro 7",
      status: "available",
      quantity: 10,
      price: "$30000",
    },
    {
      id: 2,
      name: "Asus Rog 17",
      status: "available",
      quantity: 15,
      price: "$50000",
    },
    {
      id: 3,
      name: "HP Rog 17",
      status: "available",
      quantity: 20,
      price: "$45000",
    },
  ]);

  const [errors, setErrors] = useState({});

  // Form alanlarını doğrulama
  const validateForm = () => {
    const newErrors = {};

    if (!productName) newErrors.productName = "Product name is required";
    if (!productstatus) newErrors.productstatus = "Product status is required";
    if (!quantity) newErrors.quantity = "Quantity is required";
    if (!productPrice) {
      newErrors.productPrice = "Product price is required";
    } else if (!/^\$\d+$/.test(productPrice)) {
      newErrors.productPrice =
        "Price should be in dollar format (e.g., $30000)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddProduct = () => {
    if (validateForm()) {
      const newProduct = {
        id: inventory.length + 1,
        name: productName,
        status: productstatus,
        quantity: parseInt(quantity),
        price: productPrice,
      };
      setInventory([...inventory, newProduct]);
      setProductName("");
      setProductstatus("");
      setQuantity("");
      setProductPrice("");
      setErrors({});
    }
  };

  const handleResetForm = () => {
    setProductName("");
    setProductstatus("");
    setQuantity("");
    setProductPrice("");
    setErrors({});
  };

  return (
    <div className={styles.managerPage}>
      <header className={styles.header}>
        <h1>Inventory Manager</h1>
      </header>

      <h2>Current Inventory</h2>

      <div className={styles.inventoryForm}>
        <div className={styles.formGroup}>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          {errors.productName && (
            <p className={styles.error}>{errors.productName}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Product Status:</label>
          <select
            value={productstatus}
            onChange={(e) => setProductstatus(e.target.value)}
          >
            <option value="">Select status</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
          {errors.productstatus && (
            <p className={styles.error}>{errors.productstatus}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {errors.quantity && <p className={styles.error}>{errors.quantity}</p>}
        </div>
        <div className={styles.formGroup}>
          <label>Product Price:</label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="$"
          />
          {errors.productPrice && (
            <p className={styles.error}>{errors.productPrice}</p>
          )}
        </div>
        <button className={styles.addButton} onClick={handleAddProduct}>
          Add
        </button>
        <button className={styles.resetButton} onClick={handleResetForm}>
          Reset
        </button>
      </div>

      <table className={styles.inventoryTable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>status</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.status}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManager;
