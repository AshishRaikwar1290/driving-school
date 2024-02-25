import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../styles/navbar.module.scss";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className={styles.navbar_container}>
          <div className={styles.brand_container}>
          <img src="https://randomuser.me/api/portraits/men/43.jpg" alt='' />
          <h3>Hariom Motor Driving School</h3>
          </div>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Brand href="/">Details</Navbar.Brand>
            <Navbar.Brand href="/reviews">Reviews</Navbar.Brand>
            <Navbar.Brand href="/about">About</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;