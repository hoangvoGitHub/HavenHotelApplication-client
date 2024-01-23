/* eslint-disable react/prop-types */
import React from "react";

const RoomFilter = ({ data, setFilteredData }) => {
  const [filter, setFilter] = React.useState();
  const roomTypes = ["", ...new Set(data.map((room) => room.roomType))];

  const handleSelectChange = (e) => {
    const selectedType = e.target.value;
    setFilter(selectedType);

    const filteredRooms = data.filter((room) =>
      room.roomType.toLowerCase().includes(selectedType.toLowerCase())
    );
    setFilteredData(filteredRooms);
  };

  const clearFilter = () => {
    setFilter("");
    setFilteredData(data);
  };

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="room-type-filter">
        FIlter rooms by type
      </span>
      <select
        className="form-select"
        aria-label="room type filter"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="">select a room type to filter....</option>
        {roomTypes.map((type, index) => (
          <option key={index} value={String(type)}>
            {String(type)}
          </option>
        ))}
      </select>
      <button className="btn btn-hotel" type="button" onClick={clearFilter}>
        Clear Filter
      </button>
    </div>
  );
};

export default RoomFilter;
