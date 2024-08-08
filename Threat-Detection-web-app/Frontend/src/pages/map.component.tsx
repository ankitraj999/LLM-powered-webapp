"use client"

import { useLoadScript, GoogleMap ,MarkerF} from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo } from 'react';


const GoogleMapService: NextPage = () => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 33.770050, lng: -118.193741 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex'>
     
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '800px', height: '800px' }}
        onLoad={() => console.log('Map Component Loaded...')}
      >
<MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
</GoogleMap>
    </div>
  );
};

export default GoogleMapService;