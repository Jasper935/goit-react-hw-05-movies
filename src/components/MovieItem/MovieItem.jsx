import { PropTypes } from "prop-types";
export const MovieItem = ({ title, name }) => {
  return <p>{title || name}</p>;
};


MovieItem.propTypes={
  title: PropTypes.string,
  name: PropTypes.string,
}