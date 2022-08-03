import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PropTypes } from "prop-types";
export const SearchBar = ({ getSearch }) => {


  const onSubmit = evt => {
    evt.preventDefault();
    if(evt.target.input.value.trim()===''){
      toast.warning('Enter any value');
      return
    }
    getSearch(evt.target.input.value);
    evt.currentTarget.reset();
  };
  return (
    <>
    <form onSubmit={onSubmit} action="submit">
      <input name="input" type="text" />
      <button type="submit">Search</button>
    </form>
    <ToastContainer/>
    </>
  );
};

SearchBar.propTypes={
  getSearch:PropTypes.func.isRequired,

}