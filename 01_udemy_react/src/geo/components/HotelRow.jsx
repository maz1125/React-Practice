import React, { PropTypes } from 'react';

function HotelRow({ hotel }) {
  return (
    <tr>
      <td><a href={hotel.url} target="_blank">{hotel.name}</a></td>
    </tr>
  );
}

HotelRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};


export default HotelRow;
