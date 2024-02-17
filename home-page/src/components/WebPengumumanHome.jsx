import { Container, Row, Col, Card, CardBody, CardTitle, CardText,} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const WebPengumumanHome = ()=>{
    let navigate = useNavigate();
    return (
        <div className="pengumuman w-100 min-vh-100">
        <Container>
          <Row> 
            <Col>
            <h1 className='text-center fw-bold'>PENGUMUMAN</h1>
            </Col>
          </Row> 
        </Container>

        <div className='pengumuman-card'>
          <div className='pengumuman-container'>
            <Container>
              <Row className="event1"> 
                <Col>
                  <Card
                    style={{
                      width: "24rem",
                      height: "20rem",
                      borderRadius: "5px",
                      background: "#D9D9D9",
                    }}
                  >
                    <CardBody>
                    </CardBody>
                  </Card>
                  <CardTitle className="text-center mt-4"><h4>NEXT EVENT</h4></CardTitle>
                      <CardText className="text-center">
                      </CardText>
                </Col> 
              </Row>



            </Container>
          </div> 
        </div>
        
        <Row className="event-btn">
              <div className="event-bt">
                <button
                  className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => navigate("/pengumuman")}>
                  Lihat Selengkapnya
                </button>
              </div>
        </Row>
      </div>  
    )
}

export default WebPengumumanHome;