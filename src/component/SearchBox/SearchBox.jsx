import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        Find contact by name
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;

