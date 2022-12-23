import { FcSearch } from "react-icons/fc";


export const Searchbar = ({ onSubmit  }) => {
  return (
    <header className="searchbar">
      <form onSubmit={onSubmit }>
        <button type="submit" >
          <span className="button-label">
            <FcSearch style={{ width: 32, height: 32 }} />Search
          </span>
        </button>

        <input          
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </form>
    </header>
)}