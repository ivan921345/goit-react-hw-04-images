const Filter = ({ onFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      id="filter"
      onChange={onFilterChange}
      placeholder="Filter"
    />
  );
};

export default Filter;
