import axios from 'axios';

const URL_BASE = 'https://app.rakuten.co.jp/services/api/Travel';
const SIMPLE_HOTEL_SEARCH_ENDPOINT = `${URL_BASE}/SimpleHotelSearch/20170426`;

// これはダメ Objectを返してしまうから？下だったらpromiseを返す？
// export default {
//   simpleHotelSearch: (params) => {
//     axios.get(SIMPLE_HOTEL_SEARCH_ENDPOINT, { params });
//   },
// };

export default {
  simpleHotelSearch: params =>
    axios.get(SIMPLE_HOTEL_SEARCH_ENDPOINT, { params })
  ,
};
