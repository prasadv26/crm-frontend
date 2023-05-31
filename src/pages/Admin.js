import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { getAllTickets } from "../api/ticket";
import TicketStatusDashboard from "../components/TicketStatusDashboard";

function Admin() {
  const [ticketDetails, setTicketDetails] = useState([]);

  useEffect(() => {
    getAllTickets()
      .then((res) => {
        setTicketDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row bg-light">
      <div className="col-1">
        <SideBar />
      </div>
      <div className="col my-4">
        <TicketStatusDashboard ticketDetails={ticketDetails} />
      </div>
    </div>
  );
}

export default Admin;
