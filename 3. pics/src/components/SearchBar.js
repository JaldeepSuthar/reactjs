import './SearchBar.css';
import { useState } from "react";

function SearchBar(props) {
  const {onSubmit} = props
  const [term, setTerm] = useState("");
//  var term = "";
  const handelFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
    //  term = event.target.value;
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handelFormSubmit}>
        <label>Enter search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
