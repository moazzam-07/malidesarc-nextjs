import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | SPACWORA Design Studio",
  description: "Privacy Policy and data protection terms of SPACWORA Design Studio (https://www.spacwora.com).",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#111111', padding: '140px 24px 90px 24px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <span 
          style={{
            color: '#F4C600',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '13px',
            fontWeight: 700,
            display: 'inline-block',
            marginBottom: '12px'
          }}
        >
          LEGAL & COMPLIANCE
        </span>
        <h1 
          style={{
            fontFamily: '"Bai Jamjuree", sans-serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#111111',
            margin: '0 0 24px 0',
            lineHeight: 1.2
          }}
        >
          Privacy Policy
        </h1>
        <div style={{ width: '50px', height: '2px', backgroundColor: '#F4C600', marginBottom: '40px' }} />

        <div style={{ fontFamily: '"Quicksand", sans-serif', fontSize: '15.5px', lineHeight: 1.8, color: '#444444' }}>
          <h2 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '22px', fontWeight: 600, color: '#111111', marginTop: '30px', marginBottom: '14px' }}>
            1. Overview
          </h2>
          <p>
            SPACWORA Design Studio (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website <a href="https://www.spacwora.com" style={{ color: '#111111', fontWeight: 600 }}>https://www.spacwora.com</a>. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website or engage our interior architecture and turnkey design services.
          </p>

          <h2 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '22px', fontWeight: 600, color: '#111111', marginTop: '30px', marginBottom: '14px' }}>
            2. Information Collection & Use
          </h2>
          <p>
            While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number / WhatsApp Contact</li>
            <li>Property Location and Architectural Requirements</li>
          </ul>

          <h2 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '22px', fontWeight: 600, color: '#111111', marginTop: '30px', marginBottom: '14px' }}>
            3. Use of Data
          </h2>
          <p>
            SPACWORA Design Studio uses the collected information for various purposes:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
            <li>To schedule and provide personalized interior consultations and architectural proposals.</li>
            <li>To communicate project status, quotation details, and design milestone updates.</li>
            <li>To improve our website experience and user navigation.</li>
          </ul>

          <h2 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '22px', fontWeight: 600, color: '#111111', marginTop: '30px', marginBottom: '14px' }}>
            4. Security of Data
          </h2>
          <p>
            The security of your personal data is important to us. We implement industry-standard technical measures to maintain the safety of your information. We do not sell, trade, or transfer your personal data to outside parties.
          </p>

          <h2 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '22px', fontWeight: 600, color: '#111111', marginTop: '30px', marginBottom: '14px' }}>
            5. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact us:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
            <li>Email: <a href="mailto:enquiary@spacwora.com" style={{ color: '#111111', fontWeight: 600 }}>enquiary@spacwora.com</a></li>
            <li>Phone / WhatsApp: <a href="tel:+918874135497" style={{ color: '#111111', fontWeight: 600 }}>+91 88741 35497</a></li>
            <li>Studio Address: Mumbai, Maharashtra, India</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
