import React from 'react';

const steps = [
  {
    step: 'Step 01',
    title: 'Discovery',
    description: 'We begin by understanding your lifestyle, aspirations, functional needs, and design vision.'
  },
  {
    step: 'Step 02',
    title: 'Concept Development',
    description: 'Mood boards, layouts, space planning, and 3D visualizations help transform ideas into a clear design direction.'
  },
  {
    step: 'Step 03',
    title: 'Design Detailing',
    description: 'Every finish, material, texture, lighting fixture, and furniture element is carefully selected to create a cohesive experience.'
  },
  {
    step: 'Step 04',
    title: 'Execution',
    description: 'Our experienced team executes every detail with precision while maintaining quality standards and project timelines.'
  },
  {
    step: 'Step 05',
    title: 'Styling & Handover',
    description: 'The final layer of styling transforms the completed project into a beautifully finished space ready to be lived in.'
  }
];

export default function ProcessSection() {
  return (
    <section 
      className="spacewora-process-section"
      style={{
        padding: '90px 20px',
        backgroundColor: '#FFFFFF',
        color: '#111111'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span 
            style={{
              color: '#F4C600',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontSize: '13px',
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '14px'
            }}
          >
            OUR PROCESS
          </span>
          <h2 
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(2rem, 1.8rem + 1.5vw, 3.2rem)',
              fontWeight: 500,
              color: '#111111',
              lineHeight: 1.25,
              marginBottom: '18px'
            }}
          >
            A Thoughtful Process. An Extraordinary Result.
          </h2>
          <div 
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#F4C600',
              margin: '0 auto'
            }} 
          />
        </div>

        {/* 5-Step Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}
        >
          {steps.map((item) => (
            <div key={item.step} className="spacewora-process-card">
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}
              >
                <span 
                  style={{
                    color: '#F4C600',
                    fontFamily: '"Bai Jamjuree", sans-serif',
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  {item.step}
                </span>
                <span 
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#F4C600',
                    display: 'inline-block'
                  }} 
                />
              </div>
              <h3 
                style={{
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontSize: '19px',
                  fontWeight: 600,
                  color: '#111111',
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}
              >
                {item.title}
              </h3>
              <p 
                style={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: '14.5px',
                  lineHeight: 1.65,
                  color: '#555555',
                  margin: 0
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
