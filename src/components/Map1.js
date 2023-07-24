import React, { useState } from "react";
import { useEffect } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

// import '../App.css';


const Map1 = (props) => {
  const [address, setAddress] = useState(props.empty);
  // const [y, sety] = useState(props.dmap)
  const[lat,setlat]=useState([])


  const handleChange = (address,lat) => {
    setAddress(address);
    setlat(lat)

  };
  
  const searchOptions = {
    componentRestrictions: { country: ["in"] },

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

  props.map1(address)
  props.LatLng1(lat)
  // setAddress(props.empty)

  
  // useEffect(() => {
  //   let x = props.dmap
  //   let yz = x.split(',')
  //   sety(yz[0])
  //   console.log(yz[0])


  //   console.log("yyyyyyyy" + typeof (x.split(',')))
  // })

  //   props.map(address)
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
              {...getInputProps({
                placeholder: "Search Places ...",
              })}
            />
            

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
                    {/* {suggestion.description.includes({ y }) && ( */}
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
