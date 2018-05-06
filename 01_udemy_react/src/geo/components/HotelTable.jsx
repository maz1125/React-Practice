import React, { PropTypes } from 'react';
import HotelRow from './HotelRow';

function HotelTable({ hotels }) {
  return (
    <div className="siimple-table">
      <div className="siimple-table-header">
        <div className="siimple-table-row">
          <div className="siimple-table-cell" />
          <div className="siimple-table-cell name-cell">ホテル名</div>
          <div className="siimple-table-cell hotel-price-row">値段</div>
        </div>
      </div>
      <div className="siimple-table-body">
        {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
      </div>
    </div>
  );
}
// <table className="hotel-table">
// <tbody>
// <tr>
// <th>画像</th>
// <th>ホテル名</th>
// <th className="hotel-price-row">値段</th>
// </tr>
// </tbody>
// </table>
// <th>距離</th>

HotelTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelTable.defaultProps = {
  hotels: [],
};

export default HotelTable;
