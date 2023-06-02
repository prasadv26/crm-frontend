import SideBar from "../components/SideBar/SideBar";
import { useEffect, useState } from "react";
import { getAllTickets } from "../api/ticket";
import TicketStatusDashboard from "../components/TicketStatusDashboard/TicketStatusDashboard";
import TicketsTable from "../components/TicketsTable/TicketsTable";

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
        <TicketsTable />
      </div>
    </div>
  );
}

export default Admin;
