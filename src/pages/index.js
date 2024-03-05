
import { Col, Container, Row } from "react-bootstrap";
import { TrafficLight } from "@/components/TrafficLight";

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <TrafficLight />
          </Col>
        </Row>
      </Container>

    </div>
  );
}
