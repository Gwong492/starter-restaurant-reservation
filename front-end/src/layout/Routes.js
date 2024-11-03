import React from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import NewReservation from "../new-reservation/NewReservation";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reservations/new" element={<NewReservation />} />
      <Route path="/dashboard" element={<Dashboard date={today()} />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default RootRoutes;
