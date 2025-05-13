import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  UNSAFE_RouteContext,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";

import AddMember from "./components/Admin/AddMember/AddMember";
import AdminDahsboard from "./components/Admin/AdminDashboard/AdminDahsboard";
import FindMember from "./components/Admin/FindMember/FindMember";
import AdvancedConfigur from "./components/Admin/Setting/AdvancedConfigur";
import SettingTabs from "./components/Admin/Setting/SettingTabs";
import MemberPortal from "./components/Admin/Setting/MemberPortal/MemberPortal";
import ClubSetting from "./components/Admin/Setting/ClubSetting/ClubSetting";
import BookingClasses from "./components/Admin/Setting/BookingClasses/BookingClasses";
import CustomField from "./components/Admin/Setting/CustomField/CustomField";
import CategoryList from "./components/Admin/Setting/BookingClasses/CategoryList";
import Visitors from "./components/Admin/Visitors/Visitors";
import PointOfSales from "./components/Admin/PointOfSales/PointOfSales";
import Task from "./components/Admin/Task/Task";
import Prospects from "./components/Admin/Prospects/Prospects";
import ViewStock from "./components/Admin/Stock/ViewStock";
import TakeStock from "./components/Admin/Stock/TakeStock";
import InputStockDelivery from "./components/Admin/Stock/InputStockDelivery";
import StartUp from "./components/Admin/StartUp/StartUp";
import MainMemberPortal from "./components/Admin/MemberPortal/MainMemberPortal";
import FullCalender from "./components/Admin/Schedule/FullCalender";
import BillingOverview from "./components/Admin/ReportAndTill/Billing/BillingOverview";
import TillTake from "./components/Admin/ReportAndTill/TillTake/TillTake";
import TainerCommission from "./components/Admin/ReportAndTill/TainerCommission/TainerCommission";
import StandardReport from "./components/Admin/ReportAndTill/StandardReport/StandardReport";
import DooresReader from "./components/Admin/Setting/Doores&Readers/DooresReader";
import FinancialConfig from "./components/Admin/Setting/FinancialConfiguration/FinancialConfig";
import MeasurementConfig from "./components/Admin/Setting/MeasurementConfig/MeasurementConfig";
import TaskAutomation from "./components/Admin/Setting/TaskAutomation/TaskAutomation";
import AddTask from "./components/Admin/Setting/TaskAutomation/AddTask";

import StaffAttendance from "./components/Admin/ReportAndTill/StaffAttandance/StaffAttandance";
import DebtCollection from "./components/Admin/ReportAndTill/DebtCollection/DebtCollection";
import NewProductPuechase from "./components/Admin/Stock/NewProductPuechase";
import KeyPerfirmance from "./components/Admin/ReportAndTill/KeyPerformance/KeyPerfirmance";
import WorkoutConfiguration from "./components/Admin/Setting/WorkoutConfiguration/WorkoutConfiguration";
import FormsAndWaviers from "./components/Admin/Setting/FormsAndWaviers/FormsAndWaviers";
import Integration from "./components/Admin/Setting/Integration/Integration";
import RosterAndOpenHoures from "./components/Admin/Setting/RosterAndOpenHours/RosterAndOpenHoures";
import UserAdministration from "./components/Admin/Setting/UserAdministration/UserAdministration";
import AddUser from "./components/Admin/Setting/UserAdministration/AddUser";
import MemberPortalTab from "./components/Admin/Setting/SettingMemberShip/AdvanceConfigurMemberShip/MemberPortalTab";
import TypeOfMemberPortal from "./components/Admin/Setting/MemberShipTypePortal/TyprOfMemberPortal";
import AddMembershipType from "./components/Admin/Setting/MemberShipTypePortal/AddMembershipType";
import AddNewCategory from "./components/Admin/Setting/MemberShipTypePortal/AddNewCategory";
import AddClasses from "./components/Admin/Setting/BookingClasses/AddClasses";
import AddClasseCategory from "./components/Admin/Setting/BookingClasses/AddClasseCategory";
import AddServiceForm from "./components/Admin/Setting/BookingClasses/AddServiceForm";
import ServiceCategoryForm from "./components/Admin/Setting/BookingClasses/ServiceCategoryForm";
import SettingsForm from "./components/Admin/Setting/BookingClasses/SettingForm";
import AddFacilitiesForm from "./components/Admin/Setting/BookingClasses/AddFacilitiesFrom";
import AddClubFrom from "./components/Admin/Setting/ClubSetting/AddClubFrom";
import AddDoorsFrom from "./components/Admin/Setting/Doores&Readers/AddDoorsFrom";
import NewAddMember from "./components/Admin/AddMember/NewAddMembar";
import MemberQuestionnaires from "./components/Admin/AddMember/MemberQuestionnaires";
import Resource from "./components/Admin/Resource/Resource";


const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();

  const hideLayout =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      <div className="Main-App">
        {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
        <div className={`Main-App-container ${hideLayout ? "no-sidebar" : ""}`}>
          {!hideLayout && (
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          )}
          <div className="Main-App-Content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/*Setting */}
              <Route path="/settingtabs" element={<SettingTabs />} />
              <Route
                path="/setting/advancedconfigur"
                element={<AdvancedConfigur />}
              />
              <Route path="/memberportalsetting" element={<MemberPortal />} />
              <Route path="/clubsetting" element={<ClubSetting />} />
              <Route path="/bookingclasses" element={<BookingClasses />} />
              <Route path="/customfield" element={<CustomField />} />
              <Route path="/memberportalsetting" element={<MemberPortal/>}/>
              <Route path="/clubsetting" element={<ClubSetting/>}/>
              <Route path="/bookingclasses" element={<BookingClasses/>}/>
              <Route path="/customfield" element={<CustomField/>}/>
              <Route path="/doorreader" element={<DooresReader/>}/>
              <Route path="/financialconfig" element={<FinancialConfig/>}/>
              <Route path="/workoutconfiguration" element={<WorkoutConfiguration/>}/>
              <Route path="/formsandwaivers" element={<FormsAndWaviers />}/>
              <Route path="/integrations" element={<Integration />}/>
              <Route path="/rosteropenhours" element={<RosterAndOpenHoures />}/>
              <Route path="/measurementconfig" element={<MeasurementConfig/>}/>
              <Route path="/taskautomation" element={<TaskAutomation/>}/>
              <Route path="/addtasksetting" element={<AddTask/>}/>
              <Route path="/useadministration" element={<UserAdministration/>}/>
              <Route path="/adduseradminister" element={<AddUser/>}/>
              <Route path="/memberportaltab" element={<MemberPortalTab/>}/>
              <Route path="/typeofmemberportal" element={<TypeOfMemberPortal/>}/>
              <Route path="/addmemebershiptype" element={<AddMembershipType/>}/>
              <Route path="/addnewcategory" element={<AddNewCategory/>}/>
              <Route path="/addclasses" element={<AddClasses/>}/>
              <Route path="/addclasscategories" element={<AddClasseCategory/>}/>
              <Route path="/addservicefrom" element={<AddServiceForm/>}/>
              <Route path="/servicecategoryform" element={<ServiceCategoryForm/>}/>
              <Route path="/addsettingform" element={<SettingsForm/>}/>
              <Route path="/addFacilitiesform" element={<AddFacilitiesForm/>}/>
              <Route path="/addclubfrom" element={<AddClubFrom/>}/>
              <Route path="/adddoorfrom" element={<AddDoorsFrom/>}/>






              {/*Booking & classes */}

              <Route path="/categorylist" element={<CategoryList />} />
              {/*Booking & classes */}

              {/*Setting */}

              {/* Dashbord */}
              <Route path="/dashboard" element={<AdminDahsboard />} />
              {/* Dashbord */}

              {/* addMember*/}
              <Route path="/addmember" element={<AddMember />} />
              <Route path="/addmember/newmember" element={<NewAddMember />} />
              <Route path="/addmember/memberquestionnaires" element={<MemberQuestionnaires/>} />
              {/*addmember */}

              {/* Find member */}
              <Route path="/findmember" element={<FindMember />} />
              {/* Find member */}

              {/* Visitors */}
              <Route path="/visitors" element={<Visitors />} />
              {/* Visitors */}

              {/* Schedule */}
              <Route path="/schedulecalender" element={<FullCalender />} />
              {/* Schedule */}

              {/* POS */}
              <Route path="/pointOfSales" element={<PointOfSales />} />
              {/* POS */}

              {/* Report And Till */}
              <Route path="/reportbillingoverview" element={<BillingOverview />} />
              <Route path="/reporttilltake" element={<TillTake />} />
              <Route path="/reporttainercommission" element={<TainerCommission />} />
              <Route path="/reportstandardreport" element={<StandardReport />} />
              <Route path="/staffattandance" element={<StaffAttendance />} />
              <Route path="/reportdebtcollection" element={<DebtCollection />} />
              <Route path="/keyperformance" element={<KeyPerfirmance />} />
              {/* Report And Till */}

              {/* Task */}
              <Route path="/task" element={<Task />} />
              {/* Task */}

              {/* Prospects */}
              <Route path="/prospects" element={<Prospects />} />
              {/* Prospects */}

              {/* Stock */}
              <Route path="/viewstock" element={<ViewStock />} />
              <Route path="/takestock" element={<TakeStock />} />
              <Route path="/newproductpurchase" element={<NewProductPuechase />} />
              <Route
                path="/inputstockdelivery"
                element={<InputStockDelivery />}
              />
              {/* Stock */}

              {/* Member portal */}
              <Route path="/mainmemberportal" element={<MainMemberPortal />} />
              {/* Member portal */}

              {/* Start Up */}
              <Route path="/startup" element={<StartUp />} />
              {/* Start Up */}


              {/*Resource */}
         <Route path="/resource" element={<Resource/>} />
              {/*Resource */}

            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
