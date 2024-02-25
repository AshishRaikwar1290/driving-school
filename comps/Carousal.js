import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import styles from '../styles/generic.module.scss';
import carousel_bg_1 from '../assets/carousel_bg_1.jpeg';
import carousel_bg_2 from '../assets/carousel_bg_2.jpeg';
// import carousel_bg_3 from '../assets/carousel_bg_3.jpeg';

function IndividualIntervalsExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <Image className={styles.image} src={carousel_bg_1}/>
        <Carousel.Caption>
          <h3>Hariom Motor Driving School</h3>
          <p>Get best driving training here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Image className={styles.image} src={carousel_bg_2}/>
        <Carousel.Caption>
          <h3>Hariom Motor Driving School</h3>
          <p>Get best driving training here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className={styles.image} src={carousel_bg_1}/>
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