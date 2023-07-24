import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
// import '../App.css';


const Map1 = (props) => {
  const [address, setAddress] = useState("");
  const [lat, setlat] = useState([]);

  const handleChange = (address,lat) => {
    setAddress(address);
    setlat(lat)

  };
  // const google = window.google;

  // const hydBounds = new google.maps.LatLngBounds(
  //   new google.maps.LatLng(17.385044, 78.486671),

  //   new google.maps.LatLng(17, 78)
  // );
  const searchOptions = {
    componentRestrictions: { country: ["in"]},

    // bounds: hydBounds,

    // radius: 2000
  };

  const handleSelect = (address) => {

    geocodeByAddress(address)

      .then(results => getLatLng(results[0]))

      .then(({ lat, lng }) => {

        setAddress(address); // set the selected address

        setlat([lat, lng]);

      })

      .catch(error => console.error('Error', error));

      
  };
  props.map(address)
  props.LatLng(lat)
  
  return (
    <div className="canvas">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        searchOptions={searchOptions}

      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="form-group">

            <input
              className="form-control"
              required
              {...getInputProps({
                placeholder: "Search Places ...",
                // className: "location-search-input"
              })}
              style={{ border: "1px solid black" }} />
            {/* <div>
            <input>
            </input>
            </div> */}

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    className="input-suggestion"
                    {...getSuggestionItemProps(suggestion, {
                      style
                    })}
                  >
                    {/* {suggestion.description.includes("hyderabad") && ( */}
                    <>

                      <i class="material-icons">location_on</i>{" "}
                      <span>{suggestion.description}</span>
                    </>
                    {/* )} */}
                  </div>

                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

    </div>
  );
};

export default Map1;
