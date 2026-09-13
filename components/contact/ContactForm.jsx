'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Interiors',
    area: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          border: '2px solid #F4C600',
          borderRadius: '16px',
          padding: '48px 36px',
          textAlign: 'center',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.06)'
        }}
      >
        <div 
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(244, 198, 0, 0.15)',
            color: '#D4AC0D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto',
            fontSize: '32px'
          }}
        >
          ✓
        </div>
        <h3 
          style={{
            fontFamily: '"Bai Jamjuree", sans-serif',
            fontSize: '26px',
            fontWeight: 600,
            color: '#111111',
            marginBottom: '12px'
          }}
        >
          Inquiry Received Successfully
        </h3>
        <p 
          style={{
            fontFamily: '"Quicksand", sans-serif',
            fontSize: '16px',
            lineHeight: 1.7,
            color: '#555555',
            maxWidth: '520px',
            margin: '0 auto 24px auto'
          }}
        >
          Thank you, <strong>{formData.name || 'valued client'}</strong>. Our principal design team at SPACEWORA Design Studio will review your project requirements and connect with you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              projectType: 'Residential Interiors',
              area: '',
              message: ''
            });
          }}
          style={{
            backgroundColor: '#111111',
            color: '#FFFFFF',
            fontFamily: '"Quicksand", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            padding: '12px 28px',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EAEAEA',
        borderRadius: '16px',
        padding: '44px 36px',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div style={{ marginBottom: '28px' }}>
        <span 
          style={{
            color: '#F4C600',
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-block',
            marginBottom: '8px'
          }}
        >
          BOOK A CONSULTATION
        </span>
        <h3 
          style={{
            fontFamily: '"Bai Jamjuree", sans-serif',
            fontSize: '28px',
            fontWeight: 600,
            color: '#111111',
            lineHeight: 1.3,
            margin: 0
          }}
        >
          Let's Create A Space You'll Love
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        {/* Full Name */}
        <div>
          <label 
            style={{
              display: 'block',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#333333',
              marginBottom: '8px'
            }}
          >
            Full Name <span style={{ color: '#F4C600' }}>*</span>
          </label>
          <input 
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            style={{
              width: '100%',
              padding: '13px 16px',
              borderRadius: '8px',
              border: '1px solid #D8D8D8',
              backgroundColor: '#FAFAFA',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '15px',
              color: '#111111',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label 
            style={{
              display: 'block',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#333333',
              marginBottom: '8px'
            }}
          >
            Phone / WhatsApp <span style={{ color: '#F4C600' }}>*</span>
          </label>
          <input 
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            style={{
              width: '100%',
              padding: '13px 16px',
              borderRadius: '8px',
              border: '1px solid #D8D8D8',
              backgroundColor: '#FAFAFA',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '15px',
              color: '#111111',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        {/* Email Address */}
        <div>
          <label 
            style={{
              display: 'block',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#333333',
              marginBottom: '8px'
            }}
          >
            Email Address <span style={{ color: '#F4C600' }}>*</span>
          </label>
          <input 
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="rahul@example.com"
            style={{
              width: '100%',
              padding: '13px 16px',
              borderRadius: '8px',
              border: '1px solid #D8D8D8',
              backgroundColor: '#FAFAFA',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '15px',
              color: '#111111',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Project Type */}
        <div>
          <label 
            style={{
              display: 'block',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#333333',
              marginBottom: '8px'
            }}
          >
            Project Type <span style={{ color: '#F4C600' }}>*</span>
          </label>
          <select 
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '13px 16px',
              borderRadius: '8px',
              border: '1px solid #D8D8D8',
              backgroundColor: '#FAFAFA',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '15px',
              color: '#111111',
              boxSizing: 'border-box'
            }}
          >
            <option value="Residential Interiors">Residential Interiors</option>
            <option value="Commercial Interiors">Commercial Interiors</option>
            <option value="Hospitality Design">Hospitality Design</option>
            <option value="Exhibition Design">Exhibition Design</option>
            <option value="Luxury Bungalows">Luxury Bungalows</option>
            <option value="Penthouse Interiors">Penthouse Interiors</option>
            <option value="Turnkey Interior Projects">Turnkey Interior Projects</option>
            <option value="Landscape Design">Landscape Design</option>
            <option value="Design Consultation">Design Consultation</option>
            <option value="Other Project">Other Bespoke Project</option>
          </select>
        </div>
      </div>

      {/* Approximate Area / Location */}
      <div style={{ marginBottom: '20px' }}>
        <label 
          style={{
            display: 'block',
            fontFamily: '"Quicksand", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#333333',
            marginBottom: '8px'
          }}
        >
          Carpet Area (sq. ft.) & Location (Optional)
        </label>
        <input 
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
          placeholder="e.g. 2,800 sq. ft., South Mumbai"
          style={{
            width: '100%',
            padding: '13px 16px',
            borderRadius: '8px',
            border: '1px solid #D8D8D8',
            backgroundColor: '#FAFAFA',
            fontFamily: '"Quicksand", sans-serif',
            fontSize: '15px',
            color: '#111111',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: '28px' }}>
        <label 
          style={{
            display: 'block',
            fontFamily: '"Quicksand", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#333333',
            marginBottom: '8px'
          }}
        >
          Tell Us About Your Vision & Timeline
        </label>
        <textarea 
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your design aspirations, preferred style, or key requirements..."
          style={{
            width: '100%',
            padding: '13px 16px',
            borderRadius: '8px',
            border: '1px solid #D8D8D8',
            backgroundColor: '#FAFAFA',
            fontFamily: '"Quicksand", sans-serif',
            fontSize: '15px',
            color: '#111111',
            boxSizing: 'border-box',
            resize: 'vertical'
          }}
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isSubmitting}
        style={{
          width: '100%',
          backgroundColor: '#111111',
          color: '#FFFFFF',
          fontFamily: '"Quicksand", sans-serif',
          fontSize: '16px',
          fontWeight: 700,
          padding: '16px 28px',
          borderRadius: '30px',
          border: '2px solid #111111',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          transition: 'all 0.3s ease',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#F4C600';
          e.currentTarget.style.borderColor = '#F4C600';
          e.currentTarget.style.color = '#000000';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#111111';
          e.currentTarget.style.borderColor = '#111111';
          e.currentTarget.style.color = '#FFFFFF';
        }}
      >
        {isSubmitting ? 'Submitting Details...' : 'Book Free Consultation →'}
      </button>
    </form>
  );
}
