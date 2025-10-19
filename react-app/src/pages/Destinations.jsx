import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

const cities = [
  { name: "Paris", country: "France", image: "paris.jpg" },
  { name: "Tokyo", country: "Japan", image: "tokyo.jpg" },
  { name: "New York", country: "USA", image: "newyork.jpg" },
];

export default function Destinations() {
  const [filter, setFilter] = useState("");

  const filteredCities = cities.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase()) ||
    c.country.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <Form.Control
        type="text"
        placeholder="Filter by city or country..."
        className="mb-3"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Row>
        {filteredCities.map((city, idx) => (
          <Col md={4} key={idx}>
            <Card className="mb-3 shadow-sm">
              <Card.Img variant="top" src={city.image} />
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>{city.country}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
