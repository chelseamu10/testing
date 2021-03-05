import { url } from "inspector";

export const loadMapAPI = () =>{
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBH_fYPzQCGaipenwLTgWxjHbknGOnpUJM&libraries=geometry,drawing,places`;
    
    const scripts = document.getElementsByTagName('script');
    //google map loaded
    for(let i = 0; i< scripts.length;i++){
        if(scripts[i].src.indexOf(mapURL)==0){
            return scripts[i];
        }
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.src = mapURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);
}