/* eslint-disable no-unused-vars */
import { Container, Row, Col } from "react-bootstrap";
import RoomFilter from "../../components/common/RoomFilter";
import RoomPaginator from "../../components/common/RoomPagination";
import RoomCard from "./RoomCard";
import React from "react";
import { getAllRooms } from "../../utils/apiFunctions";

const Room = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [roomsPerPage] = React.useState(6);
  const [filteredData, setFilteredData] = React.useState([{ id: "" }]);

  React.useEffect(() => {
    setIsLoading(true);
    getAllRooms()
      .then((data) => {
        setData(data);
        setFilteredData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Loading rooms.....</div>;
  }
  if (error) {
    return <div className=" text-danger">Error : {error}</div>;
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredData.length / roomsPerPage);

  const renderRooms = () => {
    const startIndex = (currentPage - 1) * roomsPerPage;
    const endIndex = startIndex + roomsPerPage;
    return filteredData
      .slice(startIndex, endIndex)
      .map((room) => <RoomCard key={room.id} room={room} />);
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="mb-3 mb-md-0">
          <RoomFilter data={data} setFilteredData={setFilteredData} />
        </Col>

        <Col md={6} className="d-flex align-items-center justify-content-end">
          <RoomPaginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>

      <Row>{renderRooms()}</Row>

      <Row>
        <Col md={6} className="d-flex align-items-center justify-content-end">
          <RoomPaginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Room;
