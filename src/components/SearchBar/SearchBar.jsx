import { PropTypes } from "prop-types";
export const SearchBar = ({ getSearch }) => {
  const onSubmit = evt => {
    evt.preventDefault();
    getSearch(evt.target.input.value);
    evt.currentTarget.reset();
  };
  return (
    <form onSubmit={onSubmit} action="submit">
      <input name="input" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes={
  getSearch:PropTypes.func.isRequired,

}