import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src="https://spn-sta.spinny.com/blog/20230201222657/maruti-driving-school-1160x653.webp?compress=true&quality=80&w=1200&dpr=1.3" width="2000"  height="400" />
        <Carousel.Caption>
          <h3>Hariom Motor Driving School</h3>
          <p>Get best driving training here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="https://spn-sta.spinny.com/blog/20230201222657/maruti-driving-school-1160x653.webp?compress=true&quality=80&w=1200&dpr=1.3"  width="2000"  height="400" />
        <Carousel.Caption>
          <h3>Hariom Motor Driving School</h3>
          <p>Get best driving training here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://spn-sta.spinny.com/blog/20230201222657/maruti-driving-school-1160x653.webp?compress=true&quality=80&w=1200&dpr=1.3"  width="2000" height="400" />
        <Carousel.Caption>
          <h3>Hariom Motor Driving School</h3>
          <p>
          Get best driving training here.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;