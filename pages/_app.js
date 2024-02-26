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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MetaTags from '../comps/metaTag';
import Head from 'next/head';
export default function App() {
  const schema = {
    "@context": "http://schema.org", // required
    "@graph": [
      {
        "@type": "Course",
        "@id": `https://hariomdrivingschool.com`,
        name: "Driving Course",
        description:"Discover Hariom Motor Driving School, where expert instructors guide you through comprehensive driving lessons with a focus on safety and confidence-building. Whether you're a beginner or seeking to refine your skills, our tailored courses prepare you for success on the road and during license tests. Join us to embark on a journey towards skilled, responsible driving",
        url: `https://hariomdrivingschool.com`,
        publisher: {
          "@type": "Organization",
          name: "Hariom Motor Driving School",
          url: "https://hariomdrivingschool.com",
          sameAs: [
            "https://www.facebook.com/geeksforgeeks.org/",
            "https://in.linkedin.com/company/geeksforgeeks",
            "https://twitter.com/geeksforgeeks",
            "https://www.instagram.com/geeks_for_geeks/",
            "https://www.youtube.com/geeksforgeeksvideos",
          ],
        },
        provider: {
          "@type": "Organization",
          name: "Hariom Motor Driving School",
          url: "https://hariomdrivingschool.com",
          sameAs: [
            "https://www.facebook.com/geeksforgeeks.org/",
            "https://in.linkedin.com/company/geeksforgeeks",
            "https://twitter.com/geeksforgeeks",
            "https://www.instagram.com/geeks_for_geeks/",
            "https://www.youtube.com/geeksforgeeksvideos",
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 5,
          ratingCount: 3000,
        },
        offers: [
          {
            "@type": "Offer",
            category: "Paid",
            price: 3000,
            priceCurrency: "INR",
          },
        ],
        about: ["Hariom Motor Driving School, Driving lessons, Defensive driving, Road safety, Driving instructors, Learner drivers, Driving courses, Driver training, License test preparation, Traffic rules"],
        teaches: [
         "Guide you through comprehensive driving lessons with a focus on safety and confidence-building"
        ],
        inLanguage: "en",
        syllabusSections: [
          {
            "@type": "Syllabus",
            name: "Driving Course",
            description: "Guide you through comprehensive driving lessons with a focus on safety and confidence-building",
            timeRequired: "PT15H",
          },
        ],
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            name: "Driving Course",
            description: "Guide you through comprehensive driving lessons with a focus on safety and confidence-building",
            courseMode: "Onsite",
            courseSchedule: {
              "@type": "Schedule",
              duration: "PT15H",
              repeatCount: 15,
              repeatFrequency: "Daily",
            },
            instructor: [{
              "@type": "Person",
              "name": "Mr. Hariom",
              "description": "20 plus years of experience as driving instructor",
           }],
          },
          {
            "@type": "CourseInstance",
            courseMode: "Onsite",
            courseWorkload: "PT15H",
          },
        ],
      },
    ],
  };

  return (
    <>
    <MetaTags/>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
    <ToastContainer />
    <Navbar/>
    <IndividualIntervalsExample/>
    <InstructorDetails/>
    <AboutUs/>
    <Gallery/>
    <DetailsSection/>
    <Services/>
    <Testinomials/>
    <ContactUs/>
    <Footer/>
    </>
  )
}
