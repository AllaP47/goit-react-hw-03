import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilterChange }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        Find contact by name
        <input
          type="text"
          value={value}
          onChange={(e) => onFilterChange(e.target.value)}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;

