import { useDispatch, useSelector } from "react-redux";
import { deleteEntry } from "../../redux/actions/actions";
import { useState } from "react";
import styles from "./table.module.css";

const Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const entries = useSelector((state) => state.entries);
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const deleteEntryHandler = (id) => {
    dispatch(deleteEntry(id));
    console.log(id);
  };

  const filteredEntries = entries.filter((entry) => {
    const nameMatches = entry.name.toLowerCase().includes(searchQuery.toLowerCase());
    const addressMatches = entry.address.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatches || addressMatches;
  });

  return (
    <>
      <div className={styles.container}>
        <h2>Entries</h2>
        <div className={styles.searchbox}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.name}</td>
              <td>{entry.address}</td>
              <td>{entry.phone}</td>
              <td>{entry.email}</td>
              <td>
                <button onClick={() => deleteEntryHandler(entry.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
