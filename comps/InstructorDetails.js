import Image from 'next/image';
import styles from '../styles/instructor.module.scss';
import owner from '../assets/owner.jpeg';
import Card from 'react-bootstrap/Card';
function InstructorDetails() {
  return (
    <Card className={styles.instructor_container}>
      <Card.Body>
    <h1>Course Instructor</h1>
    <div className={styles.inner_container}>
    <div className={styles.image_container}>
        <Image src={owner} alt="instructor" width="200" />
    </div>
    <div className={styles.details_container}>
        <h3>Mr. Hariom</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse velit modi mollitia vitae, fuga adipisci culpa voluptates quae a ullam impedit sit aperiam quaerat inventore deserunt excepturi? Sint quidem praesentium illo cum ab labore eaque deleniti impedit, veritatis reprehenderit rerum temporibus rem et pariatur voluptatem. Accusantium voluptatum dicta nemo minus vel maxime obcaecati dolor. Eligendi unde libero tempore ex corrupti doloremque recusandae expedita illo voluptatum dolore, cumque nobis totam corporis vel ullam earum hic aliquam, incidunt eos quasi odio? Itaque expedita similique natus minima. Nulla nihil iusto voluptates, libero, ipsa facere odit fuga consequatur pariatur, amet fugit eum. Eveniet, placeat Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim ratione eveniet ab, porro repellat quasi fugit exercitationem, sapiente quibusdam, ea aut doloribus cumque necessitatibus quod aliquid iusto? Illum aspernatur libero assumenda sint excepturi ipsum voluptas deserunt doloribus corrupti quia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto amet quae quaerat quam expedita maxime esse laboriosam necessitatibus omnis?.
        </p>
    </div>
    </div>
    </Card.Body>
    </Card>
  )
}
export default InstructorDetails