import { useState } from "react";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handelFormSubmit = (event) => {
    event.preventDefault();

    onSubmit("asfss");
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handelFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
