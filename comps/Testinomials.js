import React, { useEffect, useState } from "react";
import styles from "../styles/testinomial.module.scss";
import car_running from '../assets/car_running.gif';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "1 I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "2 This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "3 This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "4 This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "5 I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "6 This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "7 This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
  },
];

const Testinomials = () => {
  const [currentTestinomial, setCurrentTestinomial] = useState(testimonials[0]);
  const [idx, setIdx] = useState(0);

//   function updateTestimonials() {
    

//     console.log(idx);
    

    
//   }
  useEffect(() => {
    console.log(idx);
    setCurrentTestinomial(testimonials[idx]);
}, [idx]);

    useEffect(()=>{
        console.log("ok")
        setInterval(()=>setIdx(prev=> (prev+1)%testimonials.length), 10000);
    },[])
  return (
    <div className={styles.testinomial}>
        <h1>Testinomials</h1>
    <div className={styles.testimonial_container}>
        {console.log(car_running)}
        <img src={car_running?.src} width="100%" height="200"></img>
        
        <br/><br/>
      <div className={styles.progress_bar}></div>
      <div
        className={`${styles.fas} ${styles.fa_quote_right} ${styles.fa_quote}`}
      ></div>
      <div
        className={`${styles.fas} ${styles.fa_quote_left} ${styles.fa_quote}`}
      ></div>
      <p className={styles.testimonial}>{currentTestinomial?.text}</p>
      <div className={styles.user}>
        <img
          src={currentTestinomial?.photo}
          alt="user"
          className={styles.user_image}
        />
        <div className={styles.user_details}>
          <h4 className={styles.username}>{currentTestinomial?.name}</h4>
          <p className={styles.role}>{currentTestinomial?.position}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testinomials;
