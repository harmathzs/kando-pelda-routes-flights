import { Table } from "react-bootstrap";

const flights = [
  { from: "Paris", to: "Tokyo", flight: "AF274", depart: "10:30", arrive: "04:45", price: "€850" },
  { from: "New York", to: "Rome", flight: "DL198", depart: "13:00", arrive: "02:15", price: "$750" },
];

export default function FlightInfo() {
  return (
    <div className="container">
      <h3>Available Flights</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>From</th><th>To</th><th>Flight</th><th>Departure</th><th>Arrival</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f, i) => (
            <tr key={i}>
              <td>{f.from}</td>
              <td>{f.to}</td>
              <td>{f.flight}</td>
              <td>{f.depart}</td>
              <td>{f.arrive}</td>
              <td>{f.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
