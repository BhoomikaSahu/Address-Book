import { useState } from "react";
import { addEntry } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import styles from "./entryForm.module.css";

const EntryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const dispatch = useDispatch();

  const generateUniqueKey = () => {
    return new Date().getTime();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => !value)) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    const newEntry = { ...formData, id: generateUniqueKey() };
    dispatch(addEntry(newEntry));
    console.log(formData);
    setFormData({
      name: "",
      address: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className={styles.container}>
      <h2> Create new entry</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.box}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add entry</button>
      </form>
    </div>
  );
};

export default EntryForm;
