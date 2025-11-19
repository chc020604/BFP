import { CultureEvent, EventCategory } from './types';

export const WEEKDAYS_KR = ['일', '월', '화', '수', '목', '금', '토'];

// Fallback data in case API is not used or fails
export const MOCK_EVENTS: CultureEvent[] = [
  {
    id: '1',
    title: '2025 광안리 드론 라이트쇼',
    dateStart: '2025-11-22',
    dateEnd: '2025-11-22',
    location: '광안리 해변 일대',
    imageUrl: 'https://picsum.photos/id/16/400/500',
    category: EventCategory.FESTIVAL,
    description: '빛을 긋다, 바다를 그리다. 매주 토요일 펼쳐지는 환상적인 드론 쇼. 이번 주는 특별히 부산의 가을을 주제로 한 스페셜 공연이 준비되어 있습니다.',
    price: '무료',
    cast: '드론 500대',
    coordinates: { lat: 35.1532, lng: 129.1186 },
    transport: {
        parking: '광안리 공영주차장 (30분 1000원), 민락매립지 공영주차장 이용 가능',
        subway: '2호선 금련산역 3번 출구 도보 10분, 광안역 3번 출구 도보 15분',
        bus: '41, 42, 108-1번 버스 탑승 후 광안리 해수욕장 하차'
    }
  },
  {
    id: '2',
    title: 'Magic in 태종대',
    dateStart: '2025-11-15',
    dateEnd: '2025-11-16',
    location: '태종대 자동차 극장',
    imageUrl: 'https://picsum.photos/id/28/400/500',
    category: EventCategory.FESTIVAL,
    description: '영화와 공연이 함께하는 도심 속 감성캠핑 그리고 고구마 파티. 가족, 연인과 함께 태종대의 밤하늘 아래서 잊지 못할 추억을 만들어보세요.',
    price: '입장료 10,000원 (영화 관람 별도)',
    cast: '유명 마술사 이은결, 인디밴드',
    coordinates: { lat: 35.0518, lng: 129.0858 },
    transport: {
        parking: '태종대 유원지 부설 주차장 이용 (일주차 3000원)',
        subway: '1호선 남포역 6번 출구에서 버스 환승',
        bus: '8, 30, 66, 88, 101번 버스 종점 하차'
    }
  },
  {
    id: '3',
    title: 'The Busan Illustration Fair V.6',
    dateStart: '2025-11-01',
    dateEnd: '2025-11-04',
    location: 'BEXCO',
    imageUrl: 'https://picsum.photos/id/58/400/500',
    category: EventCategory.PERFORMANCE,
    description: '부산 최대 규모의 일러스트레이션 페어. 전국 각지의 일러스트레이터들이 참여하여 다채로운 작품과 굿즈를 선보입니다.',
    price: '성인 12,000원 / 청소년 8,000원',
    cast: '참여 작가 300명',
    coordinates: { lat: 35.1691, lng: 129.1361 },
    transport: {
        parking: '벡스코 제1전시장 지하주차장 (승용차 10분 350원)',
        subway: '2호선 센텀시티역 1번 출구, 벡스코역 7번 출구',
        bus: '5-1, 39, 40, 63, 100, 100-1번 벡스코 정류장 하차'
    }
  },
  {
    id: '4',
    title: '제20회 부산 불꽃축제',
    dateStart: '2025-11-15',
    dateEnd: '2025-11-15',
    location: '광안리 해수욕장',
    imageUrl: 'https://picsum.photos/id/68/400/500',
    category: EventCategory.FESTIVAL,
    description: '가을 밤바다를 수놓는 화려한 불꽃의 향연. 올해는 20주년을 맞이하여 역대 최대 규모의 멀티미디어 불꽃쇼가 펼쳐집니다.',
    price: '무료 (일부 유료 좌석 판매)',
    cast: '-',
    coordinates: { lat: 35.1532, lng: 129.1186 },
    transport: {
        parking: '행사 당일 교통 통제로 주차 불가, 대중교통 이용 필수',
        subway: '2호선 광안역, 금련산역 하차',
        bus: '행사 당일 우회 운행 예정'
    }
  },
  {
    id: '5',
    title: '부산 시립 교향악단 정기연주회',
    dateStart: '2025-11-20',
    dateEnd: '2025-11-20',
    location: '부산문화회관',
    imageUrl: 'https://picsum.photos/id/106/400/500',
    category: EventCategory.PERFORMANCE,
    description: '가을의 정취를 느낄 수 있는 클래식 명곡 시리즈. 차이코프스키와 라흐마니노프의 곡들을 부산 시립 교향악단의 연주로 만나보세요.',
    price: 'R석 50,000원 / S석 30,000원 / A석 10,000원',
    cast: '지휘자 홍길동, 피아니스트 김철수',
    coordinates: { lat: 35.1294, lng: 129.0936 },
    transport: {
        parking: '문화회관 내 주차장 무료 이용 (공연 관람객 4시간)',
        subway: '2호선 대연역 3번, 5번 출구 도보 15분',
        bus: '51, 68, 134, 138번 석포초등학교 하차'
    }
  },
  {
    id: '6',
    title: '현대미술의 거장전',
    dateStart: '2025-11-01',
    dateEnd: '2025-11-30',
    location: '부산시립미술관',
    imageUrl: 'https://picsum.photos/id/204/400/500',
    category: EventCategory.PERFORMANCE,
    description: '세계적인 거장들의 작품을 한자리에서 만나보는 특별 기획전. 피카소, 마티스 등 현대 미술사를 빛낸 작가들의 진품을 관람할 수 있는 기회입니다.',
    price: '성인 15,000원 / 청소년 10,000원',
    cast: '-',
    coordinates: { lat: 35.1692, lng: 129.1385 },
    transport: {
        parking: '미술관 주차장 이용 (유료, 관람객 할인)',
        subway: '2호선 벡스코역 5번 출구 바로 앞',
        bus: '31, 39, 40, 63, 100, 100-1번 올림픽교차로 환승센터 하차'
    }
  }
];