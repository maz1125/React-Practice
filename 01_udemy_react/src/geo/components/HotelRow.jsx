import React, { PropTypes } from 'react';

function HotelRow({ hotel }) {
  return (
    <div className="siimple-table-row">
      <div className="siimple-table-cell"><img className="img-cell" src={hotel.thumbUrl} alt="" /></div>
      <div className="siimple-table-cell name-cell"><a href={hotel.url} target="_blank">{hotel.name}</a></div>
      <div className="siimple-table-cell">{hotel.price}</div>
    </div>
  );
}
// <tr>
// <td><img src={hotel.thumbUrl} alt="" /></td>
// <td><a href={hotel.url} target="_blank">{hotel.name}</a></td>
// <td>{hotel.price}</td>
// </tr>
// <td>{hotel.distance}</td>

HotelRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    thumbUrl: PropTypes.string,
    price: PropTypes.string,
    distance: PropTypes.number,
  }).isRequired,
};


export default HotelRow;
