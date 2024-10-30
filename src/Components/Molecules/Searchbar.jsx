import { useState, useEffect, useRef } from "react";
import "./styles/search-bar.scss";
function Searchbar({ onSearch }) {
  const refSearchLocation = useRef(null);

  const [dropdownActive, setDropdownActive] = useState(false);
  const [name, setName] = useState("");

  const [searchLocation, setSearchLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentLocation, setCurrentLocation] = useState("Select Location");

  const fetchSuggestions = async () => {
    if (!searchLocation) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${searchLocation}&format=json`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setSuggestions(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, [searchLocation]);

  useEffect(() => {
    setDropdownActive(suggestions?.length > 0 ? true : false);
  }, [suggestions]);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setName(searchValue);
    onSearch(searchValue);
  };
  const handleSearchLocation = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleSetLocation = (location) => {
    setCurrentLocation(location);
    setSearchLocation("");
    setSuggestions([]);
  };

  const handleClickOutside = (event) => {
    if (
      refSearchLocation.current &&
      !refSearchLocation.current.contains(event.target)
    ) {
      setDropdownActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar">
      <div ref={refSearchLocation} className="select-location">
        <div className={`dropdown ${dropdownActive ? "is-active" : ""}`}>
          <input
            className="type-location"
            type="text"
            value={searchLocation}
            placeholder={currentLocation}
            onChange={(e) => handleSearchLocation(e)}
          />
        </div>
        {dropdownActive ? (
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSetLocation(suggestion.display_name)}
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        ) : (
          loading ||
          (error && (
            <ul>
              <li>{loading ? "Loading..." : error}</li>
            </ul>
          ))
        )}
      </div>
      <input
        type="search"
        placeholder="Search for restaurant, cuisine or a dish"
        value={name}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
export default Searchbar;
