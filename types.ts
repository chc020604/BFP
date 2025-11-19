export enum EventCategory {
  PERFORMANCE = 'PERFORMANCE', // 공연/전시
  FESTIVAL = 'FESTIVAL'       // 축제/행사
}

export interface TransportInfo {
  parking?: string;
  subway?: string;
  bus?: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface CultureEvent {
  id: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  location: string;
  imageUrl: string;
  category: EventCategory;
  description: string;
  
  // Detailed Info
  price?: string;
  cast?: string; // 출연진
  coordinates?: Coordinates;
  transport?: TransportInfo;
}

export interface DateSelection {
  year: number;
  month: number; // 0-11
  day: number;
}