'use client';

import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    num: '01',
    q: 'What can I expect when I work with your interior design studio?',
    a: 'You can expect a design experience that begins with listening. Before we talk about colours, furniture or materials, we take the time to understand you—your lifestyle, your routines, your preferences and the feeling you want your space to have. From the first concept to the final detail, we guide you through the process with thoughtful design, clear communication and attention to detail. Our goal is to make the experience as considered and comfortable as the space we create for you.'
  },
  {
    id: 2,
    num: '02',
    q: 'Will the design be completely personalized to me?',
    a: 'Yes. We believe your home should feel like your own, not like a showroom. We take inspiration from your personality, lifestyle, existing possessions and the way you use your space. Every decision—from the layout and lighting to materials, furniture and smaller details—is considered around you. Trends may influence our thinking, but they never define your home.'
  },
  {
    id: 3,
    num: '03',
    q: "I have ideas, but I don't know exactly what I want. Can you help?",
    a: "Absolutely. You don't need to arrive with a complete design brief. Sometimes all a client knows is that they want their home to feel warmer, calmer, more elegant, more spacious or simply more like them. That's where our experience helps. Through conversation, references and thoughtful questions, we help turn those feelings and ideas into a clear design direction."
  },
  {
    id: 4,
    num: '04',
    q: 'How do you balance beauty with functionality?',
    a: 'For us, good design is where beauty and everyday living naturally come together. We think about how you move through your home, where things need to be stored, how furniture will be used, how lighting will change throughout the day and how easily the space can be maintained. The result should not only look beautiful when photographed—it should feel right when you live in it.'
  },
  {
    id: 5,
    num: '05',
    q: 'Can you work within my budget without compromising the overall design?',
    a: 'Yes. We believe a considered design is more important than simply choosing the most expensive materials. Every project has priorities, and our role is to understand yours. We help allocate your investment thoughtfully, identifying where quality and craftsmanship matter most while finding sensible alternatives where appropriate. The aim is to create a refined and cohesive space that feels valuable, not unnecessarily expensive.'
  },
  {
    id: 6,
    num: '06',
    q: 'Do you take care of the entire project?',
    a: 'Depending on the scope of your project, yes. We can take the project from initial design and planning through material selection, furniture, lighting, coordination and execution to the final finishing touches. Having one design team oversee the journey allows the original vision to remain consistent from the first drawing to the finished space.'
  },
  {
    id: 7,
    num: '07',
    q: 'How involved will I be during the design process?',
    a: 'As involved as you would like to be. Some clients enjoy being part of every decision, while others prefer to trust the designer and stay involved at key milestones. We are comfortable with both approaches. We keep you informed, present options clearly and make sure important decisions are discussed with you before moving forward. After all, it is your space, and you should feel connected to the final result.'
  },
  {
    id: 8,
    num: '08',
    q: 'Can you incorporate furniture or things I already own?',
    a: "Of course. A beautiful home doesn't have to mean starting from scratch. Sometimes the most meaningful part of an interior is something you already own—a piece of furniture, artwork, photograph or an object carrying a personal memory. Wherever possible, we work these elements into the new design so the space feels personal rather than newly assembled."
  },
  {
    id: 9,
    num: '09',
    q: 'How do you choose materials and finishes?',
    a: 'We look at more than just appearance. We consider how a material feels, how it will age, how it performs in everyday life, how it works with other elements and whether it genuinely belongs in the overall design. Our selections are made to create harmony between texture, colour, form and function while keeping quality and longevity in mind.'
  },
  {
    id: 10,
    num: '10',
    q: 'How long does an interior design project usually take?',
    a: 'Every project has its own rhythm. The timeline depends on the size of the space, the scope of work, level of customization, material selection and execution requirements. Rather than rushing the process, we establish a realistic timeline at the beginning and carefully plan each stage. Our priority is to deliver the right result—not simply the fastest one.'
  },
  {
    id: 11,
    num: '11',
    q: 'Can you make a smaller space feel luxurious and comfortable?',
    a: 'Absolutely. Luxury is not defined by the size of a space. It often comes from proportion, thoughtful planning, natural light, material selection, lighting and details that make everyday life easier. With the right design approach, even a compact home can feel spacious, calm, elegant and deeply comfortable.'
  },
  {
    id: 12,
    num: '12',
    q: 'Do you follow interior design trends?',
    a: "We stay aware of trends, but we don't design homes around them. A trend may look beautiful today, but your home should continue to feel relevant years from now. We prefer to create a strong timeless foundation and introduce contemporary elements only where they genuinely add character. We want you to love your home—not feel that it belongs to a particular year."
  },
  {
    id: 13,
    num: '13',
    q: 'What makes a space feel truly premium?',
    a: "For us, premium design is found in the details. It is the proportion of a room, the way light falls across a surface, the quality of a material, the comfort of a chair, the precision of a finish and the feeling that everything has a reason to be there. True luxury doesn't always announce itself. Sometimes, it is simply the feeling that everything feels right."
  },
  {
    id: 14,
    num: '14',
    q: 'What if my family and I have different design preferences?',
    a: 'That\'s perfectly natural. A home is shared by people with different personalities, habits and tastes. Instead of trying to make everyone choose the same style, we look for the common ground between those preferences. Our role is to create a cohesive environment where different personalities can exist together comfortably and beautifully.'
  },
  {
    id: 15,
    num: '15',
    q: 'How do you make sure the final space matches the original design?',
    a: 'Good execution begins with good planning. Before work begins, we establish the design direction, materials, finishes and important details as clearly as possible. During execution, we maintain close attention to the design intent and coordinate the various elements involved. This helps ensure that what you imagined at the beginning remains true as the project comes together.'
  },
  {
    id: 16,
    num: '16',
    q: 'What if I change my mind during the project?',
    a: 'Design is a process, and conversations can evolve as you see your space taking shape. We encourage thoughtful discussions throughout the project. At the same time, we help you understand how a change may affect the design, budget or timeline before it is implemented. Our goal is to make decisions together, rather than making you feel locked into something that no longer feels right.'
  },
  {
    id: 17,
    num: '17',
    q: 'Do you design homes that are meant to impress guests?',
    a: "We certainly want your home to make an impression—but that isn't the only goal. The people who live there should enjoy it most. We design spaces that photograph beautifully, but more importantly, spaces that feel comfortable on an ordinary morning, relaxing at the end of a long day and welcoming when friends and family arrive."
  },
  {
    id: 18,
    num: '18',
    q: 'What is your approach to luxury interior design?',
    a: 'Our approach to luxury is quiet, thoughtful and personal. We believe luxury comes from having a space that has been designed around the way you live, with carefully selected materials, beautiful proportions, meaningful details and quality craftsmanship. It is less about excess and more about intention.'
  },
  {
    id: 19,
    num: '19',
    q: 'What happens during the first consultation?',
    a: 'The first consultation is simply a conversation. We want to understand your property, your requirements, your lifestyle, your preferences and what you hope to create. We can discuss your inspiration, practical needs, budget and expectations for the project. There is no need to have every answer ready. The first conversation is about understanding where you are and discovering where the project could go.'
  },
  {
    id: 20,
    num: '20',
    q: 'Why should I choose your studio?',
    a: 'Because we believe great interiors begin with understanding people. We don\'t approach every project with the same formula. We listen, question, refine and design with intention. We care about the overall experience as much as the final appearance. From the first conversation to the final detail, our aim is simple: to create a space that feels beautiful today, meaningful tomorrow and unmistakably yours.'
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Show 10 initially, or all 20 when expanded
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 10);

  return (
    <section 
      className="faq-section"
      style={{
        backgroundColor: '#FFFFFF',
        color: '#111111',
        padding: '100px 20px',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            COMMON QUESTIONS
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
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '16px',
              color: '#666666',
              maxWidth: '650px',
              margin: '0 auto 20px auto',
              lineHeight: 1.6
            }}
          >
            Everything you need to know about partnering with SPACEWORA Design Studio for your bespoke interior architecture journey.
          </p>
          <div 
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#F4C600',
              margin: '0 auto'
            }} 
          />
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {displayedFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  border: isOpen ? '1px solid #F4C600' : '1px solid #EAEAEA',
                  borderRadius: '10px',
                  backgroundColor: isOpen ? '#FAFAFA' : '#FFFFFF',
                  transition: 'all 0.25s ease',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 6px 20px rgba(0,0,0,0.06)' : 'none'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '22px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                    <span 
                      style={{
                        fontFamily: '"Bai Jamjuree", sans-serif',
                        color: '#F4C600',
                        fontSize: '17px',
                        fontWeight: 600,
                        minWidth: '28px'
                      }}
                    >
                      {faq.num}.
                    </span>
                    <span 
                      style={{
                        fontFamily: '"Bai Jamjuree", sans-serif',
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#111111',
                        lineHeight: 1.35
                      }}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <div 
                    style={{
                      minWidth: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? '#111111' : '#F4F4F4',
                      color: isOpen ? '#F4C600' : '#111111',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: 600,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </div>
                </button>

                {isOpen && (
                  <div 
                    style={{
                      padding: '0 28px 24px 74px',
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: '15.5px',
                      lineHeight: 1.75,
                      color: '#444444'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All / Collapse Button */}
        <div style={{ textAlign: 'center', marginTop: '45px' }}>
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              color: '#111111',
              backgroundColor: '#FFFFFF',
              border: '2px solid #111111',
              padding: '12px 32px',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#111111';
              e.currentTarget.style.color = '#F4C600';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#111111';
            }}
          >
            {showAll ? 'Show Less Questions' : `View All ${faqs.length} Questions`}
          </button>
        </div>
      </div>
    </section>
  );
}
