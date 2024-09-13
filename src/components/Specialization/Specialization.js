import React from "react";
import "./Specialization.css";

const therapies = [
  { id: 1, name: "Mindfulness Based Cognitive Therapy" },
  { id: 2, name: "Arts Therapy" },
  { id: 3, name: "Compassion Focused Therapy" },
  { id: 4, name: "Neuro-linguistic Programming (NLP)" },
  { id: 5, name: "Progressive Muscle Relaxation Therapy" },
  { id: 6, name: "Counseling" },
  { id: 7, name: "Journaling" },
  { id: 8, name: "Cognitive Behavioural Therapy" },
];

const specialisms = [
  { id: 1, name: "Anxiety" },
  { id: 2, name: "Stress Management" },
  { id: 3, name: "Obsessive Compulsive Disorder" },
  { id: 4, name: "Suicide Prevention" },
  { id: 5, name: "Psychosexual issues" },
  { id: 6, name: "Self-esteem" },
  { id: 7, name: "Panic Attacks" },
  { id: 8, name: "Depression" },
];

const ServiceList = ({ title, data }) => (
  <div className="col-md-6 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
    <h4 className="text-center text-primary mb-4 fw-bold">{title}</h4>
    <div className="service-days p-4">
      {data?.map((item) => (
        <div key={item.id} className="py-2 border-bottom">
          <h6 className="mb-0 pb-2 pb-sm-0">{item.name}</h6>
        </div>
      ))}
    </div>
  </div>
);

const Specialization = () => {
  return (
    <div className="container-fluid service py-5">
      <div className="container service-section py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-white">Our Service</h4>
        </div>
        <div className="row g-4">
          <ServiceList title="Therapies offered" data={therapies} />
          <ServiceList title="Areas of specialism" data={specialisms} />
        </div>
      </div>
    </div>
  );
};

export default Specialization;
