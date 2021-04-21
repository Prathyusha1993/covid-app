import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx";
import { serviceConstants } from "../../../../patientPortalServices/constants";

export class GoogleMapsContainer extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markerObjects: [],
    };
  }

  onMarkerMounted = (element) => {
    // console.log(element);
    this.setState((prevState) => ({
      markerObjects: [...prevState.markerObjects, element],
    }));
  };

  onMarkerClick = (props, marker, e) => {
    console.log(marker);
    this.setState({
      selectedPlace: marker.place_,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  showDetails = (place) => {};

  zoomClinic = () => {
    debugger;
    var element = this.state.markerObjects.find((i) => {
      return i.marker.id == 12;
    });
    console.log(element);
    // var selPlace = this.props.places.find((i) => {
    //   return i.id == 12;
    // });
    // console.log(selPlace);

    this.setState({
      selectedPlace: element.marker.place_,
      activeMarker: element.marker,
      showingInfoWindow: true,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="map-container">
        {/* <a onClick={this.zoomClinic}> click here </a> */}
        <Map
          google={this.props.google}
          className={"map"}
          zoom={10}
          initialCenter={this.props.center}
         
        >
          {this.props.places.map((place, i) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                key={place.id}
                id={place.id}
                place_={place}
                // name={place.id}
                position={{ lat: place.lat, lng: place.lng }}
                ref={this.onMarkerMounted}
                //animation={this.props.google.maps.Animation.BOUNCE}
              />
            );
          })}
          <InfoWindowEx
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div
              className="profile-widget"
              style={{ width: "100%", display: "inline-block" }}
            >
              <div className="doc-img">
                <a
                  href={this.state.selectedPlace.bookingLink}
                  tabIndex={0}
                  target="_blank"
                >
                  <img
                    style={{ height: "auto", width: "200px" }}
                    alt={this.state.selectedPlace.name}
                    src={this.state.selectedPlace.image}
                  />
                </a>
              </div>
              <div className="pro-content">
                <h3 className="title">
                  <a
                    href={this.state.selectedPlace.bookingLink}
                    tabIndex={0}
                    target="_blank"
                  >
                    {" "}
                    {this.state.selectedPlace.name}{" "}
                  </a>
                </h3>
                <p className="speciality">
                  {" "}
                  Virtual Visit Required for COVID-19 Tests{" "}
                </p>
                <ul className="available-info">
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    {this.state.selectedPlace.address}
                  </li>
                </ul>
              </div>
            </div>
          </InfoWindowEx>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${serviceConstants.GOOGLE_API_KEY}`,
})(GoogleMapsContainer);
