import React from "react";
import { useState } from "react";
import {Map as ReactMapGL} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapToken = import.meta.env.VITE_MAP_TOKEN
  const [viewport, setViewport] = useState({
    latitude: 30.199503,
    longitude: -90.120376,
    zoom: 8,
  });

  return (
    <div className="map_wrap">
      <div className="map">
        <ReactMapGL
          mapStyle={"mapbox://style/mapbox/dark-v9"}
          mapboxAccessToken={`${mapToken}`}
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
    </div>
  );
};

export default Map;
