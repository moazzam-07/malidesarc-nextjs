import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Contact Us | SPACWORA Design Studio',
  description:
    "Tell us about your space, requirements and vision. Discuss your luxury interior architecture, turnkey execution, or landscape project with SPACWORA Design Studio.",
};

const contactCards = [
  {
    title: 'Call Our Studio',
    subtitle: 'Direct Phone Line',
    value: '+91 88741 35497',
    href: 'tel:+918874135497',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  },
  {
    title: 'Direct WhatsApp',
    subtitle: 'Instant Messaging',
    value: '+91 88741 35497',
    href: 'https://wa.me/918874135497',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    )
  },
  {
    title: 'Studio Inquiries',
    subtitle: 'Official Inboxes',
    value: 'enquiary@spacwora.com',
    secondaryValue: 'sales@spacwora.com',
    href: 'mailto:enquiary@spacwora.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  },
  {
    title: 'Instagram',
    subtitle: 'Official Social Handle',
    value: '@spacwora',
    secondaryValue: 'Follow our portfolio',
    href: 'https://www.instagram.com/spacwora',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    title: 'Studio Hours',
    subtitle: 'Consultation Timing',
    value: 'Mon – Sat: 10:00 AM – 7:00 PM',
    secondaryValue: 'Sunday: By Appointment',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
];

export default function ContactPage() {
  return (
    <main className="contact-page-wrapper" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      
      {/* Hero Header */}
      <section 
        style={{
          backgroundColor: '#0A0A0A',
          color: '#FFFFFF',
          padding: '160px 24px 90px 24px',
          textAlign: 'center',
          position: 'relative',
          borderBottom: '1px solid rgba(244, 198, 0, 0.2)'
        }}
      >
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
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
            GET IN TOUCH
          </span>
          <h1 
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(2.4rem, 2rem + 1.8vw, 3.8rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '18px'
            }}
          >
            Contact SPACE<span style={{ color: '#F4C600' }}>WORA</span> Design Studio
          </h1>
          <p 
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#CCCCCC',
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            Tell us about your space, requirements, and vision. Let's discuss the right design, planning, and execution approach for your upcoming residential, commercial, or architectural project.
          </p>
        </div>
      </section>

      {/* 4 Contact Cards Grid */}
      <section style={{ maxWidth: '1240px', margin: '-40px auto 70px auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}
        >
          {contactCards.map((card) => (
            <div 
              key={card.title}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '28px 24px',
                border: '1px solid #EAEAEA',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: '#0A0A0A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}
                >
                  {card.icon}
                </div>
                <span 
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#888888',
                    display: 'block',
                    marginBottom: '4px'
                  }}
                >
                  {card.subtitle}
                </span>
                <h3 
                  style={{
                    fontFamily: '"Bai Jamjuree", sans-serif',
                    fontSize: '19px',
                    fontWeight: 600,
                    color: '#111111',
                    marginBottom: '10px'
                  }}
                >
                  {card.title}
                </h3>
              </div>

              <div>
                {card.href ? (
                  <a 
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#111111',
                      textDecoration: 'none',
                      display: 'block',
                      transition: 'color 0.2s ease',
                      wordBreak: 'break-word'
                    }}
                  >
                    {card.value}
                  </a>
                ) : (
                  <span 
                    style={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: '14.5px',
                      fontWeight: 600,
                      color: '#333333',
                      display: 'block',
                      lineHeight: 1.4
                    }}
                  >
                    {card.value}
                  </span>
                )}
                {card.secondaryValue && (
                  <span 
                    style={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: '13.5px',
                      color: '#666666',
                      display: 'block',
                      marginTop: '4px',
                      wordBreak: 'break-word'
                    }}
                  >
                    {card.secondaryValue}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Form & Experience Section */}
      <section style={{ maxWidth: '1240px', margin: '0 auto 100px auto', padding: '0 20px' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '48px',
            alignItems: 'start'
          }}
        >
          {/* Form */}
          <ContactForm />

          {/* Studio Experience & Trust Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div 
              style={{
                backgroundColor: '#0A0A0A',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '40px 36px',
                border: '1px solid rgba(244, 198, 0, 0.25)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.12)'
              }}
            >
              <span 
                style={{
                  color: '#F4C600',
                  textTransform: 'uppercase',
                  letterSpacing: '2.5px',
                  fontSize: '12px',
                  fontWeight: 600,
                  display: 'inline-block',
                  marginBottom: '10px'
                }}
              >
                THE SPACWORA EXPERIENCE
              </span>
              <h3 
                style={{
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontSize: '26px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  marginBottom: '20px'
                }}
              >
                What To Expect When You Work With Us
              </h3>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  {
                    num: '01',
                    title: 'Discovery & Spatial Listening',
                    desc: 'Before recommending furniture or finishes, we understand your routine, dreams, and architectural vision.'
                  },
                  {
                    num: '02',
                    title: 'Bespoke Concept & 3D Visualization',
                    desc: 'Clear layouts, detailed moodboards, and photo-realistic renders tailored strictly to your aesthetic.'
                  },
                  {
                    num: '03',
                    title: 'Transparent Timelines & Budgets',
                    desc: 'Honest communication, clear milestones, and dedicated project management with no hidden surprises.'
                  },
                  {
                    num: '04',
                    title: 'Flawless Turnkey Handover',
                    desc: 'Comprehensive execution covering civil works, electrical, custom joinery, styling, and final decor.'
                  }
                ].map((item) => (
                  <li key={item.num} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span 
                      style={{
                        fontFamily: '"Bai Jamjuree", sans-serif',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#F4C600',
                        backgroundColor: 'rgba(244, 198, 0, 0.1)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        flexShrink: 0
                      }}
                    >
                      {item.num}
                    </span>
                    <div>
                      <h4 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '16.5px', fontWeight: 600, color: '#FFFFFF', margin: '0 0 4px 0' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontFamily: '"Quicksand", sans-serif', fontSize: '14px', color: '#BBBBBB', lineHeight: 1.6, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick WhatsApp Direct Box */}
            <div 
              style={{
                backgroundColor: '#FAFAFA',
                border: '1px solid #ECECEC',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px'
              }}
            >
              <div>
                <h4 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '18px', fontWeight: 600, color: '#111111', margin: '0 0 6px 0' }}>
                  Prefer Instant Chat?
                </h4>
                <p style={{ fontFamily: '"Quicksand", sans-serif', fontSize: '14px', color: '#666666', margin: 0 }}>
                  Speak directly with our design consultants on WhatsApp.
                </p>
              </div>
              <a 
                href="https://wa.me/918874135497" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  padding: '12px 24px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                  transition: 'transform 0.2s ease'
                }}
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 20-Question Accordion FAQ Section */}
      <FaqSection />

    </main>
  );
}
