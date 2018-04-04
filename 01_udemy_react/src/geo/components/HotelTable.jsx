import React, { PropTypes } from 'react';
import HotelRow from './HotelRow';

function HotelTable({ hotels }) {
  return (
    <table className="hotel-table">
      <tbody>
        <tr>
          <th>ホテル名</th>
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
