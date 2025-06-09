import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './cert.css';
import CAP1 from '../assets/CAP1.png';
import CAP2 from '../assets/CAP2.png';
import Msits1 from '../assets/MSITS1.png';
import Msits2 from '../assets/MSITS2.png';
import certs1 from '../assets/cert1.png';
import certs2 from '../assets/cert1.png';

const CertificateCarousel = () => {
  const certificates = [
    {
      id: 1,
      title: "Capstone Project Writing 1",
      imageUrl: CAP1,
    },
    {
      id: 2,
      title: "Capstone Project Writing 2",
      imageUrl: CAP2,
    },
    {
      id: 3,
      title: "MSITS 2023",
      imageUrl: Msits1,
    },
    {
      id: 4,
      title: "MSITS 2024",
      imageUrl: Msits2,
    },
    {
      id: 5,
      title: "MSITS 2023",
      imageUrl: certs2,
    },
    {
      id: 6,
      title: "Coursera Certificate",
      imageUrl: certs1,
    }
  ];

  return (
    <section className="certificates-section" id="certificates">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">My Certifications</h1>
          <h3 className="section-subtitle">Professional credentials and achievements</h3>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="certificates-swiper"
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div className="certificate-card">
                <div className="certificate-image">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    loading="lazy"
                  />
                </div>
                <div className="certificate-content">
                  <h3>{cert.title}</h3>
                  <div className="certificate-meta">
                    <span className="issuer">{cert.issuer}</span>
                    <span className="date">{cert.date}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CertificateCarousel;