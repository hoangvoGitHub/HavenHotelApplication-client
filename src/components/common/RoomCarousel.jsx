import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RoomCarousel = () => {
  return (
    <section className="bg-light mb-5 mt-5 shadow">
      <Link to={"browser-all-rooms"} className="hote-color text-center">
        Browser all rooms
      </Link>
      <Container>
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col className="mb-4" xs={12} md={6} lg={3}>
                <Card>
                  <Link to={`/book-room/${1}`}>
                    <Card.Img
                      variant="top"
                      src={"/src/assets/images/room7.jpg"}
                      alt="Room Photo"
                      className="w-100"
                      style={{ height: "200px" }}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title className="hotel-color">
                      Room Type
                    </Card.Title>
                    <Card.Title className="room-price">
                      $RoomPrice/night
                    </Card.Title>
                    <div className="flex-shrink-0">
                      <Link
                        to={`/book-room/${1}`}
                        className="btn btn-hotel btn-sm"
                      >
                        Book Now
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default RoomCarousel;