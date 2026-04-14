import React from 'react';
import Card from './Card';
import { FaHandsHelping, FaMicrophone, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <h2 className="section-title">What We Do:</h2>

      <div className="cards-container">
        <Card 
        icon={<FaHandsHelping size={30} color="#013463" />}
        title="Sadaqah Jariyah"
        description="We build open-source tools and platforms as ongoing charity serving the Ummah and empowering local developers."
        />

        <Card 
        icon={<FaMicrophone size={30} color="#013463" />}
        title="Nujum al-Code"
        description="A bi-weekly series featuring experienced Muslim developers who share insights, career advice, and faith-driven guidance."
        />

        <Card 
        icon={<FaChalkboardTeacher size={30} color="#013463" />}
        title="Mentorship"
        description="We mentor aspiring Muslim students from basics to advanced skills, offering guidance and faith-centered support."
        />

        <Card 
        icon={<FaUsers size={30} color="#013463" />}
        title="Muslim Devs"
        description="A nationwide community of Muslim developers who collaborate, support one another, and build together."
        />
      </div>
    </section>
  );
};

export default WhatWeDo;