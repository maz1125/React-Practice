import React, { PropTypes } from 'react';
import HotelRow from './HotelRow';

function HotelTable({ hotels }) {
  return (
    <table className="hotel-table">
      <tbody>
        <tr>
          <th>画像</th>
          <th>ホテル名</th>
          <th className="hotel-price-row">値段</th>
          <th>距離</th>
        </tr>
        {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
      </tbody>
    </table>
  );
}

HotelTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelTable.defaultProps = {
  hotels: [],
};

export default HotelTable;
