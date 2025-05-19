import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import Card from "../../Components/Card/Card"
import "./LandingPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import homeImage from "../../Images/home.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i1 from "../../Images/i1.jpg";
import i2 from "../../Images/i2.jpg";
import i3 from "../../Images/i3.jpg";
import i4 from "../../Images/i4.jpg";
import Popup from "../../Components/Popup/Popup";


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 },
    },
  ],
};

const facultyData = [
  { name: "Ramkumar Sir", subject: "Medical Surgical Nursing", experience: "2009 – Present" },
  { name: "Naresh Goswami Sir", subject: "Fundamentals of Nursing", experience: "2016 – Present" },
  { name: "OP Sir", subject: "Community Health Nursing", experience: "2009 – Present" },
  { name: "Ratan Sir", subject: "Obstetrics & Gynaecology", experience: "2018 – Present" },
  { name: "Ajay Sir", subject: "Paediatric Nursing", experience: "2016 – Present" },
  { name: "Prashant Sir", subject: "Pharmacology", experience: "2012 – Present" },
  { name: "Piyush Sir", subject: "Psychiatric Nursing", experience: "2015 – Present" },
  { name: "Ramesh Sir", subject: "Endocrine System", experience: "2018 – Present" },
  { name: "Pushpendra Sir", subject: "Renal System", experience: "2019 – Present" },
  { name: "Kritika Mam", subject: "Nutrition, Microbiology, Research & Management", experience: "2019 – Present" },
  { name: "Arvind Mittal Sir", subject: "Maths & Reasoning", experience: "2010 – Present" },
];


export default function LandingPage() {
   const [isPopupOpen, setPopupOpen] = useState(false); 

   useEffect(()=>{
     const timer = setTimeout(()=>{
      setPopupOpen(true)
     }, 2000)
     return ()=>clearTimeout(timer)
   }, [])
  return (
    
    <div className="landing-container">
      <Navbar />
      <div>
      
      {isPopupOpen && <Popup onClose={() => setPopupOpen(false)} />}
    </div>

      {/* Home Section */}
      <section className="section home-section" id="home">
        <div className="home-content-wrapper">
          <div className="home-text">
            <h1 className="home-heading">Unlock Your Future with ZtoF Coaching Institute</h1>
            <p>
              Are you ready to unlock your potential and carve a path towards a successful future in your
              chosen field? Welcome to ZtoF Coaching Institute, based in Jaipur, where we empower students
              to reach new heights of academic success and career achievements.
            </p>
            <p>
              ZtoF is a dedicated coaching institute that offers specialized training for various
              competitive exams. Whether you are aspiring to enter the Engineering, Medical, or Government
              Services sectors, our comprehensive courses and expert guidance will help you crack some of
              the most prestigious exams in the country.
            </p>
            <p>
              We provide a range of tailor-made coaching programs for exams such as JEE, NEET, UPSC, RPSC,
              and many other state and national competitive exams. Our experienced faculty, proven study
              materials, and personalized mentorship ensure that every student is equipped with the right
              knowledge and skills to excel.
            </p>
            <p>
              Join ZtoF Coaching Institute and set the foundation for your successful career, with a
              step-by-step approach to passing your competitive exams with flying colours!
            </p>
          </div>
          <div className="home-image-wrapper">
  <img src={homeImage} alt="ZtoF Coaching" />
</div>
        </div>
      </section>

    
      {/* Director Section */}
<section className="section director-section" id="director">
  <div className="director-content-wrapper">
    <div className="director-photo">
      <img src={require("../../Images/director.png")} alt="Naresh Goswami" />
    </div>
    <div className="director-text">
      <h2 className="section-title">Director’s Introduction – Naresh Goswami</h2>
      <p>
        I’m Naresh Goswami, Director of ZtoF Coaching Institute. With years of experience in education, my goal is to empower students to reach their full potential. Our expert faculty, personalized approach, and comprehensive resources are designed to help students succeed in their exams and build a strong foundation for their future careers. Thank you for choosing ZtoF – let’s achieve success together!
      </p>
    </div>
  </div>
</section>


<section className="faculty-section" id="faculty">
      <div className="faculty-container">
        <h2 className="section-title">Our Esteemed Faculty</h2>
        <p className="faculty-intro">
          At ZtoF Coaching Institute, our accomplished faculty brings a wealth of experience and subject expertise.
          Their dedication ensures that every student receives exceptional academic support and mentorship.
        </p>

        <Slider {...sliderSettings} className="faculty-carousel">
          {facultyData.map((faculty, index) => (
            <Card
              key={index}
              name={faculty.name}
              subject={faculty.subject}
              experience={faculty.experience}
            />
          ))}
        </Slider>
      </div>
    </section>

{/* Highlights Section */}
<section className="section highlights-section" id="highlights">
  <h2 className="section-title">Life at ZtoF</h2>
  <p className="highlight-intro">
    Here’s a glimpse into the dynamic learning environment, energetic sessions, and memorable moments at ZtoF Coaching Institute.
  </p>
  <div className="highlights-grid">
    <img src={i1} alt="ZtoF Highlight 1" className="highlight-image" />
    <img src={i2} alt="ZtoF Highlight 2" className="highlight-image" />
    <img src={i3} alt="ZtoF Highlight 3" className="highlight-image" />
    <img src={i4} alt="ZtoF Highlight 4" className="highlight-image" />
  </div>
</section>



 <section className="section tutorial-section" id="tutorials">
  <h2 className="section-title">Tutorials & Video Resources</h2>
  <p className="tutorial-subtitle">
    Explore our curated video content including demo classes, mobile app walkthroughs, and our official YouTube channel.
  </p>

  <div className="tutorial-cards-container">
    {/* YouTube Channel */}
    <div className="tutorial-card">
      <h3 className="tutorial-title">📺 Official YouTube Channel</h3>
      <p className="tutorial-description">Discover our lectures, student success stories, and more educational content.</p>
      <a
        className="tutorial-link"
        href="https://www.youtube.com/@ZtoFMedicalAndNursingAcademy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Channel →
      </a>
    </div>

    {/* Demo Classes */}
    <div className="tutorial-card">
      <h3 className="tutorial-title">🎥 Demo Classes on YouTube</h3>
      <p className="tutorial-description">Preview our teaching style through handpicked demo sessions:</p>
      <div className="tutorial-links">
        <a href="https://youtu.be/R4UJQlf6yas" target="_blank" rel="noopener noreferrer">  Demo Class 1</a><br/>
        <a href="https://youtu.be/2JtxAFBrwr8" target="_blank" rel="noopener noreferrer">  Demo Class 2</a><br/>
        <a href="https://youtu.be/PU_zbeocSvs" target="_blank" rel="noopener noreferrer">  Demo Class 3</a>
      </div>
    </div>

    {/* App Demo */}
    <div className="tutorial-card">
      <h3 className="tutorial-title">📱 Demo Class on Our App</h3>
      <p className="tutorial-description">Access premium demo sessions right within our mobile app.</p>
      <a
        className="tutorial-link"
        href="https://classplusapp.com/diy/courses/add/content/36821145?id=649453&isCourseOverview=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on ClassPlus →
      </a>
    </div>

    {/* App Guide */}
    <div className="tutorial-card">
      <h3 className="tutorial-title">🛠️ App Usage Guide</h3>
      <p className="tutorial-description">New to our platform? Here's how to get started using the app effectively.</p>
      <a
        className="tutorial-link"
        href="https://youtu.be/9h56DFFBZro"
        target="_blank"
        rel="noopener noreferrer"
      >
        How to Use the App →
      </a>
    </div>
  </div>
</section>



      <Footer />
    </div>
  );
}
