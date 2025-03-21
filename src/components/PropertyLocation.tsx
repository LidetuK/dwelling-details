
import { useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface PropertyLocationProps {
  address: string;
}

const PropertyLocation = ({ address }: PropertyLocationProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Initialize Mapbox with your API key
    mapboxgl.accessToken = "pk.eyJ1IjoibGlqbGVkYSIsImEiOiJjbTIxc2d1dHUwc2lqMmtxdDBodnltcDltIn0.kbYOYerFx_BAAl9szrPnZQ";

    if (!mapContainer.current || map.current) return;

    // Function to geocode the address and initialize the map
    const initializeMap = async () => {
      try {
        // Geocode the address to get coordinates
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            address
          )}.json?access_token=${mapboxgl.accessToken}`
        );
        
        const data = await response.json();
        
        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].center;
          
          // Initialize the map
          map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: 14,
          });
          
          // Add navigation controls
          map.current.addControl(
            new mapboxgl.NavigationControl(),
            "top-right"
          );
          
          // Add a marker at the property location
          new mapboxgl.Marker({ color: "#10b981" })
            .setLngLat([lng, lat])
            .addTo(map.current);
          
          // Set the map as loaded
          map.current.on("load", () => {
            setMapLoaded(true);
          });
        } else {
          console.error("Could not geocode address:", address);
          setMapLoaded(false);
        }
      } catch (error) {
        console.error("Error initializing map:", error);
        setMapLoaded(false);
      }
    };

    initializeMap();

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [address]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-card mb-8">
      <h2 className="text-2xl font-semibold mb-4 font-display">Location</h2>
      <div 
        ref={mapContainer} 
        className="aspect-video bg-estate-bgDark rounded-lg mb-4 overflow-hidden"
      >
        {!mapLoaded && (
          <div className="h-full w-full flex items-center justify-center">
            <div className="text-center">
              <MapPin size={40} className="text-estate-primary mx-auto mb-2" />
              <p className="text-estate-lightText">Loading map...</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-estate-lightText">
          {address}
        </p>
        <a 
          href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-estate-primary hover:underline flex items-center"
        >
          View on Google Maps
          <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default PropertyLocation;
