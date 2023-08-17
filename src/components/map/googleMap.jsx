import React, {useMemo, useState} from 'react';
import {GoogleMap, InfoWindowF, MarkerF, useLoadScript} from "@react-google-maps/api";

import {RiMapPinLine, RiPhoneLine, RiTimeLine} from "react-icons/ri";

const GoogleMaps = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCgyx5fAyg8xJ__lQ28TwFGpnSStYHIYog',
    });
    const [mapRef, setMapRef] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [infoWindowData, setInfoWindowData] = useState();
    const onLoad = (map) => {
        setMapRef(map)
        if (markers.length===1){
        map.setCenter({lat:markers[0].lat,lng:markers[0].lng})
        map.setZoom(14)

        }else {
        const bounds = new google.maps.LatLngBounds();
        markers?.forEach(({lat, lng}) => bounds.extend({lat, lng}));
        map.fitBounds(bounds);

        }
    };

    const markers = [
        {
            nameRu: 'Yuhang Powerlong Plaza do\'koni',
            nameUz: 'Yuhang Powerlong Plaza do\'koni',
            addressRu: "№ 2853, Yuhangtang yo'li, Cangqian ko'chasi, L1-026-2",
            addressUz: "№ 2853, Yuhangtang yo'li, Cangqian ko'chasi, L1-026-2",
            workingTime: '10:00-22:00',
            tel: '15068735153',
            lat: 41.318542,
            lng: 69.283087,
        },
        // {
        //     nameRu: 'Yuhang Jiangnan Times do\'koni',
        //     nameUz: 'Yuhang Jiangnan Times do\'koni',
        //     addressRu: "1F-017, 017-1, Jiangnan Times savdo markazi, Yuxan ko'chasi",
        //     addressUz: "1F-017, 017-1, Jiangnan Times savdo markazi, Yuxan ko'chasi",
        //     workingTime: '9:30-21:30',
        //     tel: '0571-88520112',
        //     lat: 41.291611,
        //     lng: 69.238948
        // },

    ];

    const handleMarkerClick = (id, lat, lng, addressRu, addressUz, nameRu, nameUz, workingTime, tel) => {
        mapRef.panTo({lat, lng})
        setInfoWindowData({id, addressRu, addressUz, nameRu, nameUz, workingTime, tel})
        setIsOpen(true)
    }



    return (
        <>
            <div
                className={'hidden static md:absolute top-[10%] left-[3%] md:w-[460px] w-[90%] mx-auto  flex-col md:gap-0 gap-3 items-center  md:py-0 py-5   divide-y-0 md:divide-y max-h-[80%] overflow-y-auto z-50'}>
                {
                    markers.map((item, ind) => (
                        <div
                            className={'space-y-2 sm:space-y-3 px-4 py-2 sm:px-7 sm:py-5 cursor-pointer bg-white rounded-lg md:rounded-none w-full'}
                            key={ind}>
                            <h3 className={'text-xl'}>{item.nameRu}</h3>
                            <div className={'space-y-2'}>
                                <div className={'flex items-start gap-3'}>
                                    <RiMapPinLine className={'text-lg flex-shrink-0'}/>
                                    <p className={'break-all text-[#666666]'}>{item.addressRu}</p>
                                </div>
                                <div className={'flex items-start gap-3'}>
                                    <RiTimeLine className={'text-lg flex-shrink-0'}/>
                                    <p className={'break-all text-[#666666]'}>{item.workingTime}</p>
                                </div>
                                <div className={'flex items-start gap-3'}>
                                    <RiPhoneLine className={'text-lg flex-shrink-0'}/>
                                    <p className={'break-all text-[#666666]'}>{item.tel}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="h-[400px] md:h-screen">
                {!isLoaded ? (
                    <h1>Loading...</h1>
                ) : (
                    <GoogleMap
                        mapContainerClassName="map-container"
                        onLoad={onLoad}
                    >
                        {markers.map(({lat, lng, addressRu, addressUz, nameRu, nameUz, workingTime, tel}, ind) => (
                            <MarkerF position={{lat, lng}} key={ind}
                                     icon={{
                                         url: '/store-checked.png', // Path to your custom image
                                         scaledSize: new window.google.maps.Size(45, 50),
                                     }}
                                     onClick={() => {
                                         handleMarkerClick(ind, lat, lng, addressRu, addressUz, nameRu, nameUz, workingTime, tel)
                                     }}
                            >
                                {
                                    isOpen && infoWindowData?.id === ind && (
                                        <InfoWindowF onCloseClick={() => setIsOpen(false)}>
                                            <div className={'space-y-3'}>
                                                <h3 className={'text-xl'}>{infoWindowData.nameRu}</h3>
                                                <div className={'space-y-2'}>
                                                    <div className={'flex items-start gap-3'}>
                                                        <RiMapPinLine className={'text-lg flex-shrink-0'}/>
                                                        <p className={'break-all text-[#666666]'}>{infoWindowData.addressRu}</p>
                                                    </div>
                                                    <div className={'flex items-start gap-3'}>
                                                        <RiTimeLine className={'text-lg flex-shrink-0'}/>
                                                        <p className={'break-all text-[#666666]'}>{infoWindowData.workingTime}</p>
                                                    </div>
                                                    <div className={'flex items-start gap-3'}>
                                                        <RiPhoneLine className={'text-lg flex-shrink-0'}/>
                                                        <p className={'break-all text-[#666666]'}>{infoWindowData.tel}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </InfoWindowF>
                                    )
                                }
                            </MarkerF>
                        ))}

                    </GoogleMap>
                )}
            </div>


        </>

    )

};

export default GoogleMaps;