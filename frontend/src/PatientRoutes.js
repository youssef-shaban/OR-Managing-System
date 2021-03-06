import AdminEquipment from "layouts/tables/AdminEquipment";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

import Profile from "./layouts/profile/Profile";
import Billing from "./layouts/billing/Billing";
import DashboardPatient from "./layouts/dashboard/Dashboard-patient";
import MedicalRecord from "./layouts/medical-record/MedicalRecord";
import DoctorDashboard from "./layouts/dashboard/Dashboard-doctor";
import DoctorsOperations from "./layouts/Operations/Doctor-Nurse/DoctorsOperations";
import DoctorsPatients from "./layouts/tables/DoctorsPatients";
import Requests from "./layouts/requests/Requests";
import Rooms from "./layouts/Rooms/Rooms";
import AdminStaff from "./layouts/tables/AdminStaff";
import AdminOperations from "./layouts/Operations/Admin/AdminOperations";
import AdminStats from "./layouts/AdminStats/AdminStats";
import Dashboard from "./layouts/dashboard/Dashboard";

const PatientRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard-patient",
    route: "/dashboard-patient",
    icon: <Shop size="12px" />,
    component: <DashboardPatient />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Doctor Dashboard",
    key: "dashboard-doctor",
    route: "/dashboard-doctor",
    icon: <Shop size="12px" />,
    component: <DoctorDashboard />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Operations",
    key: "operations",
    route: "/operations",
    icon: <Office size="12px" />,
    component: <DoctorsOperations />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Operations Admin",
    key: "operations-admin",
    route: "/operations-admin",
    icon: <Office size="12px" />,
    component: <AdminOperations />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Patients",
    key: "patients",
    route: "/patients",
    icon: <Office size="12px" />,
    component: <DoctorsPatients />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Rooms",
    key: "rooms",
    route: "/rooms",
    icon: <CreditCard size="12px" />,
    component: <Rooms />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Stocks",
    key: "Stocks",
    route: "/equipments",
    icon: <Cube size="12px" />,
    component: <AdminEquipment />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Requests",
    key: "requests",
    route: "/requests",
    icon: <Cube size="12px" />,
    component: <Requests />,
    noCollapse: false,
  },
  {
    type: "collapse",
    name: "Medical Record",
    key: "medical-record",
    route: "/medical-record",
    icon: <Settings size="12px" />,
    component: <MedicalRecord />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Staff",
    key: "staff-admin",
    route: "/staff-admin",
    icon: <Settings size="12px" />,
    component: <AdminStaff />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Stats",
    key: "stats",
    route: "/stats",
    icon: <Settings size="12px" />,
    component: <AdminStats />,
    noCollapse: true,
  },

  { type: "title", title: "Account Pages", key: "account-pages" },

  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
];

export default PatientRoutes;
