 import '../search-box/search-box.css';

 const SearchBox = ({placeholder, onSeachChange}) => {
    return (
        <div className="search">
            <input
                type="search" 
                placeholder={ placeholder } 
                onChange={ onSeachChange }
            />
        </div>
    );
 }
  
 export default SearchBox;