import React, { useState } from "react";
import logo from "./assets/brainy-bunch-logo.png";

// Main Application Component
const App = () => {
  // State for navigation
  const [currentPage, setCurrentPage] = useState("home");
  
  // Navigation function
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Navbar component with logo
  const Navbar = () => (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="Brainy Bunch Logo" 
          className="logo-navbar mr-3" 
        />
        <h1 className="text-xl font-bold">Brainy Bunch After School Service</h1>
      </div>
      <ul className="flex gap-4 text-sm items-center">
        <li>
          <button
            onClick={() => navigateTo("home")}
            className={`min-w-[120px] h-12 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border-2 border-white ${currentPage === 'home' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white hover:bg-blue-700 hover:text-white'}`}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => navigateTo("priorities")}
            className={`min-w-[120px] h-12 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border-2 border-white ${currentPage === 'priorities' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white hover:bg-blue-700 hover:text-white'}`}
          >
            Our Priorities
          </button>
        </li>
        <li>
          <button
            onClick={() => navigateTo("curriculum")}
            className={`min-w-[120px] h-12 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border-2 border-white ${currentPage === 'curriculum' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white hover:bg-blue-700 hover:text-white'}`}
          >
            Curriculum
          </button>
        </li>
        <li>
          <button
            onClick={() => navigateTo("attendance-calendar")}
            className={`min-w-[120px] h-12 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border-2 border-white ${currentPage === 'attendance-calendar' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white hover:bg-blue-700 hover:text-white'}`}
          >
            Attendance Calendar
          </button>
        </li>
        <li>
          <button
            onClick={() => navigateTo("pricing")}
            className={`min-w-[120px] h-12 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border-2 border-white ${currentPage === 'pricing' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white hover:bg-blue-700 hover:text-white'}`}
          >
            Pricing
          </button>
        </li>
        <li>
          <button
            onClick={() => navigateTo("regulations")}
            className={`min-w-[120px] h-12 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border-2 border-white ${currentPage === 'regulations' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white hover:bg-blue-700 hover:text-white'}`}
          >
            Regulations
          </button>
        </li>
        <li>
          <button
            onClick={() => navigateTo("feedback")}
            className={`min-w-[120px] h-12 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border-2 border-white ${currentPage === 'feedback' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white hover:bg-blue-700 hover:text-white'}`}
          >
            Feedback
          </button>
        </li>
      </ul>
    </nav>
  );

  // Basic page component for placeholder pages
  const Page = ({ title }) => (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p>Page content for "{title}" will be added soon.</p>
    </div>
  );

  // Regulations component with resources list
  const Regulations = () => (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Regulations</h2>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Useful Resources for Setting Up an After School Service in Ireland</h3>
        <p className="mb-4">Below is a list of key resources that are essential for researching and establishing an After School Service in compliance with Irish regulations, particularly those set by Tusla:</p>
        
        <div className="space-y-4">
          <div>
            <strong>Tusla Early Years Inspectorate - School Age Services:</strong>
            <br />The official section of the Tusla website specifically covering regulations and standards for school-age childcare services. This is the primary source for registration information and compliance details.
            <br /><a href="https://www.tusla.ie/services/family-community-support/school-age-services/" target="_blank" className="text-blue-600 hover:underline">https://www.tusla.ie/services/family-community-support/school-age-services/</a>
          </div>
          <div>
            <strong>Tusla Main Website:</strong>
            <br />The overall website for the Child and Family Agency, where you can find general information, publications, and news related to their services.
            <br /><a href="https://www.tusla.ie/" target="_blank" className="text-blue-600 hover:underline">https://www.tusla.ie/</a>
          </div>
          <div>
            <strong>National Childcare Scheme (NCS):</strong>
            <br />Information about the government scheme that provides financial subsidies to parents towards the cost of childcare. Registering as a provider allows you to accept these subsidies.
            <br /><a href="https://www.ncs.gov.ie/" target="_blank" className="text-blue-600 hover:underline">https://www.ncs.gov.ie/</a>
          </div>
          <div>
            <strong>Citizens Information - Regulation of School Age Childcare:</strong>
            <br />A useful resource providing clear, accessible summaries of the regulations for school-age childcare in Ireland, including Tusla registration.
            <br /><a href="https://www.citizensinformation.ie/en/education/pre-school-education-and-childcare/regulation-of-school-age-childcare/" target="_blank" className="text-blue-600 hover:underline">https://www.citizensinformation.ie/en/education/pre-school-education-and-childcare/regulation-of-school-age-childcare/</a>
          </div>
          <div>
            <strong>National Quality Guidelines for School Age Childcare Services (2020):</strong>
            <br />A key document outlining a framework for providing high-quality services that go beyond minimum regulatory requirements. Essential reading for program development.
            <br /><a href="https://assets.gov.ie/88025/5e6c734d-7d21-47f2-ae28-b84b581939d9.pdf" target="_blank" className="text-blue-600 hover:underline">https://assets.gov.ie/88025/5e6c734d-7d21-47f2-ae28-b84b581939d9.pdf</a> (Direct PDF Link)
          </div>
          <div>
            <strong>County Childcare Committees (CCCs):</strong>
            <br />Local organisations that provide support, advice, and training to childcare providers in their specific county. Finding your local CCC is highly recommended.
            <br /><a href="https://myccc.ie/" target="_blank" className="text-blue-600 hover:underline">https://myccc.ie/</a>
          </div>
          <div>
            <strong>Local Enterprise Offices (LEOs):</strong>
            <br />Provide advice, training, and financial support (grants) to small businesses in Ireland. Contacting your local LEO is beneficial for business planning and funding. This link is the national portal.
            <br /><a href="https://www.localenterprise.ie/" target="_blank" className="text-blue-600 hover:underline">https://www.localenterprise.ie/</a>
          </div>
          <div>
            <strong>Early Childhood Ireland:</strong>
            <br />A representative organisation for the early years and school-age childcare sector, offering membership, support, training, and resources.
            <br /><a href="https://www.earlychildhoodireland.ie/" target="_blank" className="text-blue-600 hover:underline">https://www.earlychildhoodireland.ie/</a>
          </div>
          <div>
            <strong>Department of Children, Equality, Disability, Integration and Youth:</strong>
            <br />The government department responsible for policy related to childcare and early years services. Their website provides policy updates and information on government initiatives.
            <br /><a href="https://www.gov.ie/en/organisation/department-of-children-equality-disability-integration-and-youth/" target="_blank" className="text-blue-600 hover:underline">https://www.gov.ie/en/organisation/department-of-children-equality-disability-integration-and-youth/</a>
          </div>
        </div>
        
        <p className="mt-4">Using these resources is crucial for ensuring your After School Service meets all legal requirements, operates safely, and provides a high-quality experience for children.</p>
      </div>
    </div>
  );

  // Feedback component
  const Feedback = () => {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
      if (name && email && message) {
        setSubmitted(true);
      }
    };

    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Feedback</h2>
        {submitted ? (
          <p className="text-green-600">Thank you! Your message has been sent.</p>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea 
                className="w-full p-2 border border-gray-300 rounded" 
                rows="4" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button 
              onClick={handleSubmit} 
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        )}
        <p className="text-xs text-gray-600 mt-4">
          By submitting this form, you agree to our <strong>Privacy Policy</strong>. Your personal data will be used solely to respond to your inquiry and will not be shared with third parties.
        </p>
      </div>
    );
  };

  // Updated Pricing component with new hours and price
  const Pricing = () => (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Pricing and Services</h2>
      <p className="mb-4">Below are the standard services and corresponding rates:</p>
      <table className="table-auto w-full border border-gray-300 mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Service</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Daily Stay</td>
            <td className="border px-4 py-2">Supervision after school from 2:30 p.m. to 5:30 p.m.</td>
            <td className="border px-4 py-2">€15 per day</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Snack</td>
            <td className="border px-4 py-2">Light meal in the afternoon</td>
            <td className="border px-4 py-2">included</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Homework Help</td>
            <td className="border px-4 py-2">Assistance with homework</td>
            <td className="border px-4 py-2">included</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Creative Activities</td>
            <td className="border px-4 py-2">Drawing, crafts, modeling</td>
            <td className="border px-4 py-2">included</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Monthly Discount</td>
            <td className="border px-4 py-2">For monthly payments</td>
            <td className="border px-4 py-2">10%</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Family Discount</td>
            <td className="border px-4 py-2">For two or more children</td>
            <td className="border px-4 py-2">additional 5%</td>
          </tr>
        </tbody>
      </table>
      <p>We offer flexible conditions and try to accommodate every family's needs. Contact us for a personalized quote.</p>
      <p className="mt-4">We are a registered provider for the <a href="https://www.ncs.gov.ie/" target="_blank" className="text-blue-700 underline hover:text-blue-900">National Childcare Scheme (NCS)</a>. Find out how NCS can help reduce your After School costs.</p>
    </div>
  );

  // Attendance Calendar component
  const AttendanceCalendar = () => {
    // State management
    const [selectedChild, setSelectedChild] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [weeklyAttendance, setWeeklyAttendance] = useState({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0});
    const [showWarning, setShowWarning] = useState(false);
    const [weekendWarning, setWeekendWarning] = useState(false);
    const [saveNotification, setSaveNotification] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    
    // Get details for current month
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
    
    // Simple log function
    const log = (message) => {
      console.log(`${new Date().toLocaleTimeString()}: ${message}`);
    };
    
    // Navigate between months
    const prevMonth = () => {
      const newDate = new Date(currentDate);
      newDate.setMonth(month - 1);
      setCurrentDate(newDate);
      log(`Changed to previous month: ${newDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}`);
      
      // Reset selections when changing month
      setSelectedDays([]);
      setWeeklyAttendance({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0});
    };
    
    const nextMonth = () => {
      const newDate = new Date(currentDate);
      newDate.setMonth(month + 1);
      setCurrentDate(newDate);
      log(`Changed to next month: ${newDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}`);
      
      // Reset selections when changing month
      setSelectedDays([]);
      setWeeklyAttendance({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0});
    };
    
    // Calculate calendar days
    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };
    
    const getFirstDayOfMonth = (year, month) => {
      const firstDay = new Date(year, month, 1).getDay();
      return firstDay === 0 ? 6 : firstDay - 1; // 0 = Monday, 6 = Sunday
    };
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOffset = getFirstDayOfMonth(year, month);
    
    // Create week map for current month
    const createWeekMap = () => {
      const weekMap = {};
      let currentDay = 1;
      let currentWeek = 1;
      
      // Skip days until first day of month
      for (let i = 0; i < firstDayOffset; i++) {
        if (!weekMap[currentWeek]) {
          weekMap[currentWeek] = [];
        }
        weekMap[currentWeek].push(null);
      }
      
      // Add all days of the month
      while (currentDay <= daysInMonth) {
        if (!weekMap[currentWeek]) {
          weekMap[currentWeek] = [];
        }
        
        if (weekMap[currentWeek].length < 7) {
          weekMap[currentWeek].push(currentDay);
          currentDay++;
        } else {
          currentWeek++;
        }
      }
      
      // Fill the last week if needed
      while (weekMap[currentWeek] && weekMap[currentWeek].length < 7) {
        weekMap[currentWeek].push(null);
      }
      
      return weekMap;
    };
    
    const weekMap = createWeekMap();
    
    // Change selected child
    const handleChildChange = (e) => {
      const child = e.target.value;
      setSelectedChild(child);
      log(`Selected child: ${child}`);
      
      // Reset selections when changing child
      setSelectedDays([]);
      setWeeklyAttendance({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0});
      
      // Hide warning if shown
      if (showWarning) {
        setShowWarning(false);
      }
    };
    
    // Toggle a day selection
    const toggleDay = (day, dayIndex) => {
      if (!selectedChild) {
        log("Please select a child first");
        setShowWarning(true); // Show warning message
        setWeekendWarning(false); // Hide weekend warning
        return;
      }
      
      // Hide warning when a valid selection is made
      if (showWarning) {
        setShowWarning(false);
      }
      
      if (day === null) {
        return; // Skip empty cells
      }
      
      // Check if it's a weekend (Saturday or Sunday)
      const isWeekend = dayIndex >= 5;
      
      if (isWeekend) {
        log(`Day ${day} is a weekend.`);
        setWeekendWarning(true); // Show weekend warning
        
        // Hide warning after 3 seconds
        setTimeout(() => {
          setWeekendWarning(false);
        }, 3000);
        
        return; // Don't count weekend days
      } else {
        // Clear weekend warning if it was showing
        if (weekendWarning) {
          setWeekendWarning(false);
        }
      }
      
      log(`Toggle day ${day} for ${selectedChild} in ${monthName} ${year}`);
      
      if (selectedDays.includes(day)) {
        // Remove day
        const newSelectedDays = selectedDays.filter(d => d !== day);
        setSelectedDays(newSelectedDays);
        log(`Removed day ${day}, selected days: ${newSelectedDays.join(', ') || 'none'}`);
        
        // Update weekly attendance
        updateWeeklyAttendance(newSelectedDays);
      } else {
        // Add day
        const newSelectedDays = [...selectedDays, day];
        setSelectedDays(newSelectedDays);
        log(`Added day ${day}, selected days: ${newSelectedDays.join(', ')}`);
        
        // Update weekly attendance
        updateWeeklyAttendance(newSelectedDays);
      }
    };
    
    // Update weekly attendance stats
    const updateWeeklyAttendance = (days) => {
      const newWeeklyAttendance = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
      
      days.forEach(day => {
        // Find which week this day belongs to
        for (const [week, weekDays] of Object.entries(weekMap)) {
          if (weekDays.includes(day)) {
            newWeeklyAttendance[week]++;
            break;
          }
        }
      });
      
      setWeeklyAttendance(newWeeklyAttendance);
      log(`Updated weekly attendance: ${JSON.stringify(newWeeklyAttendance)}`);
    };
    
    // Handle save button click
    const handleSave = () => {
      setSaveNotification(true);
      log("Save button clicked");
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setSaveNotification(false);
      }, 3000);
    };
    
    // Render calendar
    const renderCalendar = () => {
      const calendar = [];
      const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      
      // Header row with day names
      calendar.push(
        <div key="header" className="grid grid-cols-8 gap-1 mb-2">
          {dayNames.map((day, index) => (
            <div 
              key={`header-${day}`} 
              className={`text-center font-bold p-2 ${index >= 5 ? "bg-red-100" : ""}`}
            >
              {day}
            </div>
          ))}
          <div className="text-center font-bold p-2 bg-blue-50 text-blue-800">Days in week</div>
        </div>
      );
      
      // Weeks
      Object.entries(weekMap).forEach(([week, weekDays]) => {
        const weekNumber = parseInt(week);
        const row = [];
        
        // Fill in days or empty cells
        weekDays.forEach((day, i) => {
          if (day) {
            const isSelected = selectedDays.includes(day);
            const isWeekend = i >= 5; // Saturday or Sunday
            
            row.push(
              <button
                key={`day-${day}`}
                onClick={() => toggleDay(day, i)}
                className={`p-2 border rounded ${
                  isSelected ? "bg-green-500 text-white" : 
                  isWeekend ? "bg-red-50" : "bg-white"
                }`}
              >
                {day}
              </button>
            );
          } else {
            row.push(<div key={`empty-${i}-${week}`} className="p-2"></div>);
          }
        });
        
        // Add weekly total
        row.push(
          <div key={`week-${week}-total`} className="flex items-center justify-center">
            <div className="p-2 bg-blue-100 border rounded w-14 text-center">
              <span className="font-bold text-blue-800 text-lg">{weeklyAttendance[weekNumber] || 0}</span>
            </div>
          </div>
        );
        
        // Add complete row
        calendar.push(
          <div key={`week-${week}`} className="grid grid-cols-8 gap-1 mb-1">
            {row}
          </div>
        );
      });
      
      return calendar;
    };
    
    return (
      <div className="p-4 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Attendance Calendar</h2>
        
        <div className="mb-4">
          <label className="block mb-1">Select Child:</label>
          <select
            value={selectedChild}
            onChange={handleChildChange}
            className="border p-2 rounded"
          >
            <option value="">-- Choose a child --</option>
            <option value="Anna">Anna</option>
            <option value="John">John</option>
            <option value="Emma">Emma</option>
            <option value="Michael">Michael</option>
          </select>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <button 
              onClick={prevMonth}
              className="px-3 py-1 bg-gray-100 border rounded hover:bg-gray-200"
            >
              ←
            </button>
            <h3 className="text-lg font-medium">
              {monthName} {year}
            </h3>
            <button 
              onClick={nextMonth}
              className="px-3 py-1 bg-gray-100 border rounded hover:bg-gray-200"
            >
              →
            </button>
          </div>
          
          <div>{renderCalendar()}</div>
        </div>
        
        {weekendWarning && (
          <div className="p-3 mb-4 bg-red-100 border-l-4 border-red-500 rounded">
            <p className="font-bold text-red-800 text-lg">Weekend days cannot be selected!</p>
            <p className="text-red-700">Please choose weekdays (Monday-Friday) only.</p>
          </div>
        )}
        
        {showWarning && (
          <div className="p-3 bg-yellow-100 border border-yellow-300 rounded mb-4">
            <p className="font-bold text-yellow-800">Please select a child first before choosing days!</p>
          </div>
        )}
        
        {selectedChild && (
          <div className="p-3 bg-blue-50 border mb-4 rounded">
            <p className="mb-3"><strong>{selectedChild}</strong> has <strong>{selectedDays.length}</strong> days selected in {monthName}.</p>
            
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700"
            >
              Save
            </button>
            
            {saveNotification && (
              <div className="mt-3 p-2 bg-green-100 text-green-800 rounded">
                <p>Data has been successfully saved!</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Router - render the appropriate component based on currentPage
  const renderPage = () => {
    switch(currentPage) {
      case "home":
        return <Page title="Home" />;
      case "priorities":
        return <Page title="Our Priorities" />;
      case "curriculum":
        return <Page title="Curriculum" />;
      case "attendance-calendar":
        return <AttendanceCalendar />;
      case "feedback":
        return <Feedback />;
      case "pricing":
        return <Pricing />;
      case "regulations":
        return <Regulations />;
      default:
        return <Page title="Home" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {renderPage()}
    </div>
  );
};

export default App;