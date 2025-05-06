import { useState } from "react";
import logo from "./assets/brainy-bunch-logo.png";

// Определяем типы для страниц
type PageType = "home" | "priorities" | "curriculum" | "attendance-calendar" | "pricing" | "regulations" | "feedback";

// Интерфейсы для типизации компонентов
interface PageProps {
  title: string;
}

interface WeeklyAttendance {
  [key: number]: number;
}

interface WeekMap {
  [key: number]: (number | null)[];
}

// Main Application Component
const App = () => {
  // State for navigation
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Navigation function
  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false); // Close mobile menu when navigating
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navbar component with logo
  const Navbar = () => (
    <nav className="bg-blue-600 text-white shadow-md">
      {/* Desktop navigation */}
      <div className="hidden md:flex justify-between items-center p-4">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Brainy Bunch Logo" 
            className="logo-navbar -my-2" 
          />
          <h1 className="text-xl font-bold leading-tight">
            Brainy Bunch<br />
            After School Service
          </h1>
        </div>
        <ul className="flex gap-2 text-sm items-center ml-12">
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
              Contacts
            </button>
          </li>
        </ul>
      </div>
      
      {/* Mobile navigation header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-blue-600">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Brainy Bunch Logo" 
            className="w-14 h-14 rounded-full object-cover mr-2" 
          />
          <h1 className="text-lg font-bold leading-tight text-white">
            Brainy Bunch
          </h1>
        </div>
        <button 
          onClick={toggleMobileMenu}
          className="p-2 bg-white bg-opacity-20 rounded-md"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            // X icon for close
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon for menu
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pb-4 px-4 bg-blue-600">
          <ul className="flex flex-col gap-2">
            <li>
              <button
                onClick={() => navigateTo("home")}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border border-white ${currentPage === 'home' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white'}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("priorities")}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border border-white ${currentPage === 'priorities' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white'}`}
              >
                Our Priorities
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("curriculum")}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border border-white ${currentPage === 'curriculum' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white'}`}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("attendance-calendar")}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border border-white ${currentPage === 'attendance-calendar' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white'}`}
              >
                Attendance Calendar
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("pricing")}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border border-white ${currentPage === 'pricing' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white'}`}
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("regulations")}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border border-white ${currentPage === 'regulations' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white'}`}
              >
                Regulations
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("feedback")}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center border border-white ${currentPage === 'feedback' ? 'bg-white text-blue-700 shadow' : 'bg-transparent text-white'}`}
              >
                Feedback
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );

  // Basic page component for placeholder pages
  const Page = ({ title }: PageProps) => (
    <div className="p-4 md:p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p>Page content for "{title}" will be added soon.</p>
    </div>
  );
  
  // Curriculum component with weekly schedule
  const Curriculum = () => (
    <div className="p-4 md:p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Curriculum</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Brainy Bunch – Week 1 Schedule (September)</h3>
        <p><strong>Duration</strong>: 3 hours per day, Monday to Friday</p>
        <p><strong>Time</strong>: 2:30 PM – 5:30 PM</p>
      </div>
      
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b border-r">Day</th>
              <th className="py-2 px-4 border-b border-r">Time</th>
              <th className="py-2 px-4 border-b">Activity</th>
            </tr>
          </thead>
          <tbody>
            {/* Monday */}
            <tr>
              <td className="py-3 px-4 border-b border-r font-semibold bg-blue-50" rowSpan={4}>
                Monday
              </td>
              <td className="py-2 px-4 border-b border-r">2:30 – 3:00 PM</td>
              <td className="py-2 px-4 border-b">Organizational Block: greeting, roll call, snack, name & gesture icebreaker</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">3:00 – 4:00 PM</td>
              <td className="py-2 px-4 border-b">Creative Workshop: Collage "This is Me!" + group rules poster</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">4:00 – 5:00 PM</td>
              <td className="py-2 px-4 border-b">Study Block: Homework in mini-groups (quiet, consultation, play zones)</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">5:00 – 5:30 PM</td>
              <td className="py-2 px-4 border-b">Reflection & Free Time</td>
            </tr>
            
            {/* Tuesday */}
            <tr>
              <td className="py-3 px-4 border-b border-r font-semibold bg-blue-50" rowSpan={4}>
                Tuesday
              </td>
              <td className="py-2 px-4 border-b border-r">2:30 – 3:00 PM</td>
              <td className="py-2 px-4 border-b">Organizational Block: greeting, roll call, snack</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">3:00 – 4:00 PM</td>
              <td className="py-2 px-4 border-b">Outdoor Games: "Freeze!", "Collect Faster", "Color Hunt", "Big Step", "Ball Duel"</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">4:00 – 5:00 PM</td>
              <td className="py-2 px-4 border-b">Study Block: Homework completion</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">5:00 – 5:30 PM</td>
              <td className="py-2 px-4 border-b">Reflection & Free Time</td>
            </tr>
            
            {/* Wednesday */}
            <tr>
              <td className="py-3 px-4 border-b border-r font-semibold bg-blue-50" rowSpan={4}>
                Wednesday
              </td>
              <td className="py-2 px-4 border-b border-r">2:30 – 3:00 PM</td>
              <td className="py-2 px-4 border-b">Organizational Block: greeting, roll call, snack, emotional release play</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">3:00 – 4:00 PM</td>
              <td className="py-2 px-4 border-b">Creative Workshop: Watercolor painting "Summer Memory"</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">4:00 – 5:00 PM</td>
              <td className="py-2 px-4 border-b">Study Block: Homework completion</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">5:00 – 5:30 PM</td>
              <td className="py-2 px-4 border-b">Reflection & Free Time</td>
            </tr>
            
            {/* Thursday */}
            <tr>
              <td className="py-3 px-4 border-b border-r font-semibold bg-blue-50" rowSpan={4}>
                Thursday
              </td>
              <td className="py-2 px-4 border-b border-r">2:30 – 3:00 PM</td>
              <td className="py-2 px-4 border-b">Organizational Block: greeting, roll call, snack</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">3:00 – 4:00 PM</td>
              <td className="py-2 px-4 border-b">Literary Club: Listen & discuss <em>Room on the Broom</em> by Julia Donaldson</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">4:00 – 5:00 PM</td>
              <td className="py-2 px-4 border-b">Study Block: Homework completion</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">5:00 – 5:30 PM</td>
              <td className="py-2 px-4 border-b">Reflection & Free Time</td>
            </tr>
            
            {/* Friday */}
            <tr>
              <td className="py-3 px-4 border-b border-r font-semibold bg-blue-50" rowSpan={4}>
                Friday
              </td>
              <td className="py-2 px-4 border-b border-r">2:30 – 3:00 PM</td>
              <td className="py-2 px-4 border-b">Organizational Block: greeting, roll call, snack</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">3:00 – 4:00 PM</td>
              <td className="py-2 px-4 border-b">Creative Workshop: Collage "Magic Tree" using natural materials</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">4:00 – 5:00 PM</td>
              <td className="py-2 px-4 border-b">Study Block: Homework completion</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-r">5:00 – 5:30 PM</td>
              <td className="py-2 px-4 border-b">Reflection & Free Time</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <p className="font-medium">
          Note: This schedule is subject to change based on children's needs, weather conditions, and special circumstances.
        </p>
      </div>
    </div>
  );

  // Regulations component with resources list
  const Regulations = () => (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Regulations</h2>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Useful Resources for Setting Up an After School Service in Ireland</h3>
        <p className="mb-4">Below is a list of key resources that are essential for researching and establishing an After School Service in compliance with Irish regulations, particularly those set by Tusla:</p>
        
        <div className="space-y-4">
          <div>
            <strong>Tusla Early Years Inspectorate - School Age Services:</strong>
            <br />The official section of the Tusla website specifically covering regulations and standards for school-age childcare services. This is the primary source for registration information and compliance details.
            <br /><a href="https://www.tusla.ie/services/family-community-support/school-age-services/" target="_blank" className="text-blue-600 hover:underline break-words">www.tusla.ie/services/family-community-support/school-age-services/</a>
          </div>
          <div>
            <strong>Tusla Main Website:</strong>
            <br />The overall website for the Child and Family Agency, where you can find general information, publications, and news related to their services.
            <br /><a href="https://www.tusla.ie/" target="_blank" className="text-blue-600 hover:underline">www.tusla.ie</a>
          </div>
          <div>
            <strong>National Childcare Scheme (NCS):</strong>
            <br />Information about the government scheme that provides financial subsidies to parents towards the cost of childcare. Registering as a provider allows you to accept these subsidies.
            <br /><a href="https://www.ncs.gov.ie/" target="_blank" className="text-blue-600 hover:underline">www.ncs.gov.ie</a>
          </div>
          <div>
            <strong>Citizens Information - Regulation of School Age Childcare:</strong>
            <br />A useful resource providing clear, accessible summaries of the regulations for school-age childcare in Ireland, including Tusla registration.
            <br /><a href="https://www.citizensinformation.ie/en/education/pre-school-education-and-childcare/regulation-of-school-age-childcare/" target="_blank" className="text-blue-600 hover:underline break-words">www.citizensinformation.ie/en/education/pre-school-education-and-childcare/regulation-of-school-age-childcare/</a>
          </div>
          <div>
            <strong>National Quality Guidelines for School Age Childcare Services (2020):</strong>
            <br />A key document outlining a framework for providing high-quality services that go beyond minimum regulatory requirements. Essential reading for program development.
            <br /><a href="https://assets.gov.ie/88025/5e6c734d-7d21-47f2-ae28-b84b581939d9.pdf" target="_blank" className="text-blue-600 hover:underline break-words">assets.gov.ie/88025/5e6c734d-7d21-47f2-ae28-b84b581939d9.pdf</a> (Direct PDF Link)
          </div>
          <div>
            <strong>County Childcare Committees (CCCs):</strong>
            <br />Local organisations that provide support, advice, and training to childcare providers in their specific county. Finding your local CCC is highly recommended.
            <br /><a href="https://myccc.ie/" target="_blank" className="text-blue-600 hover:underline">myccc.ie</a>
          </div>
          <div>
            <strong>Local Enterprise Offices (LEOs):</strong>
            <br />Provide advice, training, and financial support (grants) to small businesses in Ireland. Contacting your local LEO is beneficial for business planning and funding. This link is the national portal.
            <br /><a href="https://www.localenterprise.ie/" target="_blank" className="text-blue-600 hover:underline">www.localenterprise.ie</a>
          </div>
          <div>
            <strong>Early Childhood Ireland:</strong>
            <br />A representative organisation for the early years and school-age childcare sector, offering membership, support, training, and resources.
            <br /><a href="https://www.earlychildhoodireland.ie/" target="_blank" className="text-blue-600 hover:underline">www.earlychildhoodireland.ie</a>
          </div>
          <div>
            <strong>Department of Children, Equality, Disability, Integration and Youth:</strong>
            <br />The government department responsible for policy related to childcare and early years services. Their website provides policy updates and information on government initiatives.
            <br /><a href="https://www.gov.ie/en/organisation/department-of-children-equality-disability-integration-and-youth/" target="_blank" className="text-blue-600 hover:underline break-words">www.gov.ie/en/organisation/department-of-children-equality-disability-integration-and-youth/</a>
          </div>
        </div>
        
        <p className="mt-4">Using these resources is crucial for ensuring your After School Service meets all legal requirements, operates safely, and provides a high-quality experience for children.</p>
      </div>
    </div>
  );

  // Feedback component now renamed to Contacts
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
      <div className="p-4 md:p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Contacts</h2>
        
        {/* QR Code image */}
        <div className="mb-6 text-center">
          <img 
            src="/qrcode.png" 
            alt="QR code for Brainy Bunch" 
            className="mx-auto max-w-[250px] h-auto"
          />
        </div>
        
        {/* Temporarily hidden address block 
        <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Our Address</h3>
              <address className="not-italic">
                Two Mile Community National School,<br />
                Aughaleemore,<br />
                Killarney,<br />
                Co. Kerry,<br />
                V93 WD82.
              </address>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://www.google.com/maps/place//@52.0544822,-9.5125504,13z/data=!3m1!4b1!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" 
                target="_blank"
                className="inline-block"
                title="View on Google Maps"
              >
                <img 
                  src="https://www.google.com/images/branding/product/2x/maps_96in128dp.png" 
                  alt="Google Maps"
                  className="h-12 w-auto rounded shadow-md hover:shadow-lg transition-shadow duration-200"
                />
              </a>
            </div>
          </div>
        </div>
        */}
        
        {submitted ? (
          <p className="text-green-600">Thank you! Your message has been sent.</p>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Send us a message</h3>
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
                rows={4} 
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
    <div className="p-4 md:p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Pricing and Services</h2>
      <p className="mb-4">Below are the standard services and corresponding rates:</p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 mb-6 min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 md:px-4 py-2 text-left">Service</th>
              <th className="border px-2 md:px-4 py-2 text-left">Description</th>
              <th className="border px-2 md:px-4 py-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 md:px-4 py-2">Daily Stay</td>
              <td className="border px-2 md:px-4 py-2">Supervision after school from 2:30 p.m. to 5:30 p.m.</td>
              <td className="border px-2 md:px-4 py-2">€15 per day</td>
            </tr>
            <tr>
              <td className="border px-2 md:px-4 py-2">Snack</td>
              <td className="border px-2 md:px-4 py-2">Light meal in the afternoon</td>
              <td className="border px-2 md:px-4 py-2">included</td>
            </tr>
            <tr>
              <td className="border px-2 md:px-4 py-2">Homework Help</td>
              <td className="border px-2 md:px-4 py-2">Assistance with homework</td>
              <td className="border px-2 md:px-4 py-2">included</td>
            </tr>
            <tr>
              <td className="border px-2 md:px-4 py-2">Creative Activities</td>
              <td className="border px-2 md:px-4 py-2">Drawing, crafts, modeling</td>
              <td className="border px-2 md:px-4 py-2">included</td>
            </tr>
            <tr>
              <td className="border px-2 md:px-4 py-2">Monthly Discount</td>
              <td className="border px-2 md:px-4 py-2">For monthly payments</td>
              <td className="border px-2 md:px-4 py-2">10%</td>
            </tr>
            <tr>
              <td className="border px-2 md:px-4 py-2">Family Discount</td>
              <td className="border px-2 md:px-4 py-2">For two or more children</td>
              <td className="border px-2 md:px-4 py-2">additional 5%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>We offer flexible conditions and try to accommodate every family's needs. Contact us for a personalized quote.</p>
      <p className="mt-4">We are a registered provider for the <a href="https://www.ncs.gov.ie/" target="_blank" className="text-blue-700 underline hover:text-blue-900">National Childcare Scheme (NCS)</a>. Find out how NCS can help reduce your After School costs.</p>
    </div>
  );

  // Attendance Calendar component
  const AttendanceCalendar = () => {
    // State management
    const [selectedChild, setSelectedChild] = useState("");
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    const [weeklyAttendance, setWeeklyAttendance] = useState<WeeklyAttendance>({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0});
    const [showWarning, setShowWarning] = useState(false);
    const [weekendWarning, setWeekendWarning] = useState(false);
    const [saveNotification, setSaveNotification] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    
    // Get details for current month
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
    
    // Simple log function
    const log = (message: string) => {
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
    const getDaysInMonth = (year: number, month: number): number => {
      return new Date(year, month + 1, 0).getDate();
    };
    
    const getFirstDayOfMonth = (year: number, month: number): number => {
      const firstDay = new Date(year, month, 1).getDay();
      return firstDay === 0 ? 6 : firstDay - 1; // 0 = Monday, 6 = Sunday
    };
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOffset = getFirstDayOfMonth(year, month);
    
    // Create week map for current month
    const createWeekMap = (): WeekMap => {
      const weekMap: WeekMap = {};
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
    const handleChildChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    const toggleDay = (day: number | null, dayIndex: number) => {
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
    const updateWeeklyAttendance = (days: number[]) => {
      const newWeeklyAttendance: WeeklyAttendance = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
      
      days.forEach(day => {
        // Find which week this day belongs to
        for (const [week, weekDays] of Object.entries(weekMap)) {
          if (weekDays.includes(day)) {
            newWeeklyAttendance[parseInt(week)]++;
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
        <div key="header" className="grid grid-cols-8 gap-1 mb-2 text-xs md:text-base">
          {dayNames.map((day, index) => (
            <div 
              key={`header-${day}`} 
              className={`text-center font-bold p-1 md:p-2 ${index >= 5 ? "bg-red-100" : ""}`}
            >
              {day}
            </div>
          ))}
          <div className="text-center font-bold p-1 md:p-2 bg-blue-50 text-blue-800">Days in week</div>
        </div>
      );
      
      // Weeks
      Object.entries(weekMap).forEach(([week, weekDays]) => {
        const weekNumber = parseInt(week);
        const row = [];
        
        // Fill in days or empty cells
        weekDays.forEach((day: number | null, i: number) => {
          if (day !== null) {
            const isSelected = selectedDays.includes(day);
            const isWeekend = i >= 5; // Saturday or Sunday
            
            row.push(
              <button
                key={`day-${day}`}
                onClick={() => toggleDay(day, i)}
                className={`p-1 md:p-2 border rounded text-xs md:text-base ${
                  isSelected ? "bg-green-500 text-white" : 
                  isWeekend ? "bg-red-50" : "bg-white"
                }`}
              >
                {day}
              </button>
            );
          } else {
            row.push(<div key={`empty-${i}-${week}`} className="p-1 md:p-2"></div>);
          }
        });
        
        // Add weekly total
        row.push(
          <div key={`week-${week}-total`} className="flex items-center justify-center">
            <div className="p-1 md:p-2 bg-blue-100 border rounded w-8 md:w-14 text-center">
              <span className="font-bold text-blue-800 text-sm md:text-lg">{weeklyAttendance[weekNumber] || 0}</span>
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
      <div className="p-4 max-w-full md:max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Attendance Calendar</h2>
        
        <div className="mb-4">
          <label className="block mb-1">Select Child:</label>
          <span className="text-red-600 text-sm font-medium inline-block mb-2">(access for parents by password only)</span>
          <select
            value={selectedChild}
            onChange={handleChildChange}
            className="border p-2 rounded w-full md:w-auto"
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
          
          <div className="overflow-x-auto">{renderCalendar()}</div>
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
        return <Curriculum/>;
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      <div className="container mx-auto">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;