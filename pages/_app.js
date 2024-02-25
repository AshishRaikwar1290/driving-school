import '../styles/globals.scss'
import '../styles/generic.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualIntervalsExample from '../comps/Carousal';
import Gallery from '../comps/Gallery'
import InstructorDetails from '../comps/InstructorDetails';
import Testinomials from '../comps/Testinomials';
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import DetailsSection from '../comps/detailsSection';
import AboutUs from '../comps/AboutUs';
import Services from '../comps/Services';
import ContactUs from '../comps/ContactUs';
export default function App() {
  return (
    <>
    <Navbar/>
    <IndividualIntervalsExample/>
    <InstructorDetails/>
    <AboutUs/>
    <Gallery/>
    {/* <CoachingTimeline/> */}
    <DetailsSection/>
    <Services/>
    <Testinomials/>
    <ContactUs/>
    <Footer/>
    </>
  )
}
