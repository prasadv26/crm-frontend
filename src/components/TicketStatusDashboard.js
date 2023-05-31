import { Card } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ticketStatusCount } from "../helpers/ticketHelper";

const TicketStatusDashboard = ({ ticketDetails }) => {
  const name = localStorage.getItem("name");
  const userType = localStorage.getItem("userType");
  const ticketStatus = ticketStatusCount(ticketDetails);
  return (
    <div className="container">
      <h2 className="text-center">Welcome, {name}</h2>
      <p className="text-center text-muted">
        Take a look at your {userType} stats
      </p>
      <div className="row text-center">
        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Body>
            <h2>
              <i class="bi bi-pencil-fill mx-3"></i>
              OPEN
            </h2>
            <hr />
            <div className="row d-flex align-items-center">
              <div className="col">
                <h2>{ticketStatus.open}</h2>
              </div>
              <div className="col">
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar
                    styles={buildStyles({
                      strokeLinecap: "butt",
                    })}
                    value={(ticketStatus.open / ticketDetails.length) * 100}
                  />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Body>
            <h2>
              <i class="bi bi-lightning-charge-fill mx-3"></i>
              PROGRESS
            </h2>
            <hr />
            <div className="row d-flex align-items-center">
              <div className="col">
                <h2>{ticketStatus.progress}</h2>
              </div>
              <div className="col">
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar
                    styles={buildStyles({
                      strokeLinecap: "butt",
                    })}
                    value={(ticketStatus.progress / ticketDetails.length) * 100}
                  />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Body>
            <h2>
              <i class="bi bi-check-circle mx-3"></i>
              CLOSED
            </h2>
            <hr />
            <div className="row d-flex align-items-center">
              <div className="col">
                <h2>{ticketStatus.closed}</h2>
              </div>
              <div className="col">
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar
                    styles={buildStyles({
                      strokeLinecap: "butt",
                    })}
                    value={(ticketStatus.closed / ticketDetails.length) * 100}
                  />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Body>
            <h2>
              <i class="bi bi-x-octagon-fill mx-3"></i>
              BLOCKED
            </h2>
            <hr />
            <div className="row d-flex align-items-center">
              <div className="col">
                <h2>{ticketStatus.blocked}</h2>
              </div>
              <div className="col">
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar
                    styles={buildStyles({
                      strokeLinecap: "butt",
                    })}
                    value={(ticketStatus.blocked / ticketDetails.length) * 100}
                  />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default TicketStatusDashboard;
