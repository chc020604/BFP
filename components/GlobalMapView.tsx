import React, { useEffect, useRef } from 'react';
import { CultureEvent } from '../types';

declare global {
  interface Window {
    kakao: any;
  }
}

interface GlobalMapViewProps {
  events: CultureEvent[];
}

const GlobalMapView: React.FC<GlobalMapViewProps> = ({ events }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const initMap = () => {
        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
                if (!mapContainer.current) return;

                // Default center (Busan City Hall approx)
                const defaultCenter = new window.kakao.maps.LatLng(35.1796, 129.0756);
                
                const options = {
                    center: defaultCenter,
                    level: 9 // Zoom out to see most of Busan
                };
                
                // Clear container
                mapContainer.current.innerHTML = '';
                
                const map = new window.kakao.maps.Map(mapContainer.current, options);
                
                // Create bounds to fit all markers
                const bounds = new window.kakao.maps.LatLngBounds();
                let hasValidCoordinates = false;

                events.forEach(event => {
                    if (event.coordinates) {
                        const position = new window.kakao.maps.LatLng(event.coordinates.lat, event.coordinates.lng);
                        
                        // Create marker
                        const marker = new window.kakao.maps.Marker({
                            map: map,
                            position: position,
                            title: event.title,
                            clickable: true
                        });

                        // InfoWindow
                        const content = `
                            <div style="padding:10px; font-size:12px; width:200px; background:white; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
                                <div style="font-weight:bold; margin-bottom:4px; color:#333;">${event.title}</div>
                                <div style="color:#666;">${event.location}</div>
                            </div>
                        `;
                        const infowindow = new window.kakao.maps.InfoWindow({
                            content: content,
                            removable: true
                        });

                        // Events
                        window.kakao.maps.event.addListener(marker, 'click', () => {
                            infowindow.open(map, marker);
                        });

                        bounds.extend(position);
                        hasValidCoordinates = true;
                    }
                });

                // Adjust map to show all markers if any exist
                if (hasValidCoordinates) {
                    map.setBounds(bounds);
                }
            });
        }
    };

    if (window.kakao && window.kakao.maps) {
        initMap();
    } else {
        const timer = setInterval(() => {
            if (window.kakao && window.kakao.maps) {
                clearInterval(timer);
                initMap();
            }
        }, 100);
        return () => clearInterval(timer);
    }
  }, [events]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
          <span className="text-rose-500">
             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.447-.894L15 7m0 13V7" /></svg>
          </span>
          축제 지도 보기
        </h2>
        <p className="text-slate-500 mt-1">부산 전역에서 열리는 축제와 공연을 한눈에 확인하세요.</p>
      </div>

      <div className="relative w-full h-[70vh] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
        <div ref={mapContainer} className="w-full h-full"></div>
        
        {/* Loader visual */}
        {(!window.kakao || !window.kakao.maps) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-6 pointer-events-none">
                 <svg className="w-12 h-12 mb-4 animate-bounce text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p className="text-lg font-semibold">지도를 불러오는 중입니다...</p>
            </div>
        )}
      </div>
      
      {/* Side List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.slice(0, 4).map(event => (
              <div key={event.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 overflow-hidden flex-shrink-0">
                      <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="overflow-hidden">
                      <h4 className="text-sm font-bold truncate text-slate-800">{event.title}</h4>
                      <p className="text-xs text-slate-500 truncate">{event.location}</p>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default GlobalMapView;