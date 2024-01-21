import { Container, Form, Row, Col } from 'react-bootstrap';

const RoomSearch = () => {

    const handleSearch = (e) => {
        e.preventDefault();
    }

  return (
    <>
        <Container className="shadow mt-n5 mb-5 py-5">
            <Form onSubmit={handleSearch}>
                <Row className="justify-content-center">
<Col xs={12} md={3}>
							<Form.Group controlId="checkInDate">
								<Form.Label>Check-in Date</Form.Label>
								<Form.Control
									type="date"
									name="checkInDate"
									value={searchQuery.checkInDate}
									onChange={handleInputChange}
									min={moment().format("YYYY-MM-DD")}
								/>
							</Form.Group>
						</Col>
                </Row>
            </Form>
        </Container>
    </>
  )
};

export default RoomSearch;