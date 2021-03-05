import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from "react-google-maps";



const MAP = () => {
    const MyMapComponent:any = withScriptjs(withGoogleMap((props) =>
        
        <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: 10.795770,lng: 106.678770}}
        
        >
        {/* {this.getMarker()} */}
        {/* <Autocomplete 
            style={{width:"100%",height:"40px"}}
            types={['(regions)']}
            
        /> */}
        </GoogleMap>
    ))    
    return (
        <MyMapComponent
            googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBH_fYPzQCGaipenwLTgWxjHbknGOnpUJM&libraries=geometry,drawing,places'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh`,width: `150vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
}



// class MAP extends Component {
//     render() {
//         const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//       <GoogleMap
//         defaultZoom={15}
//         defaultCenter={{ lat: 0, lng: 0}}
        
//       >
//         {/* {this.getMarker()} */}
//         <Autocomplete 
//           style={{width:"100%",height:"40px"}}
//           types={['(regions)']}
         
//         />
//       </GoogleMap>
//     ))    
//     return (
//       <MyMapComponent
//         googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBH_fYPzQCGaipenwLTgWxjHbknGOnpUJM&libraries=geometry,drawing,places'
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100vh`,width: `150vh` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     );
//     }
// }

export default MAP;