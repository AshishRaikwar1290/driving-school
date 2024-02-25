import IndividualIntervalsExample from '../comps/Carousal';
import Gallery from '../comps/Gallery'
import InstructorDetails from '../comps/InstructorDetails';
import Testinomials from '../comps/Testinomials';
// import CoachingTimeline from '../comps/CoachingTimeline';

export default function Home() {
  return (
    <>
    <div>
    <IndividualIntervalsExample/>
    <InstructorDetails/>
    <Gallery/>
    {/* <CoachingTimeline/> */}
    <Testinomials/>
    </div>
    </>
  )
}
