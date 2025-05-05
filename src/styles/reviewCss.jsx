'use client'

function ReviewCss() {
  return (
    <style jsx global>{`
        .reviewer-details h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: #7f1d1d;
        }
        
        .profile-content {
          display: flex;
          flex-direction: column;
        }
        
        @media (min-width: 768px) {
          .profile-content {
            flex-direction: row;
            gap: 2rem;
          }
        }
        
        .profile-image {
          flex-shrink: 0;
          margin-bottom: 1rem;
        }
        
        @media (min-width: 768px) {
          .profile-image {
            margin-bottom: 0;
          }
        }
        
        .profile-image img {
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .profile-text p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .author {
          font-style: italic;
          text-align: right;
          color: #6b7280;
          margin-top: 1.5rem;
        }
      `}</style>
  )
}

export default ReviewCss