"use client";

function StyleSheet() {
  return (
    <style jsx global>{`
      /* Base styles for HTML content */
      .html-content h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      .html-content h2 {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--color-red-700);
        margin-bottom: 1rem;
      }

      .html-content h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #374151;
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #e5e7eb;
      }

      .html-content h4 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #4b5563;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
      }

      .html-content p {
        margin-bottom: 1rem;
        line-height: 1.6;
        color: #4b5563;
      }

      .html-content strong {
        font-weight: 600;
        color: #374151;
      }

      .html-content em {
        font-style: italic;
        color: #6b7280;
      }

      .html-content ul {
        list-style-type: disc;
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
      }

      ul li::marker {
        color: var(--color-red-700);
        font-size: 20px;
      }

      .html-content ol {
        list-style-type: decimal;
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .html-content li {
        margin-bottom: 0.5rem;
        color: #4b5563;
      }

      .html-content a {
        color: var(--color-red-700);
        text-decoration: none;
        transition: color 0.2s;
      }

      .html-content a:hover {
        color: var(--color-red-600);
        text-decoration: underline;
      }

      .html-content blockquote {
        border-left: 4px solid #10b981;
        padding-left: 1rem;
        font-style: italic;
        color: #6b7280;
        margin: 1.5rem 0;
      }

      .html-content table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
      }

      .html-content th,
      .html-content td {
        border: 1px solid var(--color-rose-200);
        padding: 0.75rem;
        text-align: left;
      }

      .html-content th {
        background-color: var(--color-rose-50);
        font-weight: 600;
        color: var(--color-red-700);
      }

      /* Special styling for the journals grid */
      .html-content .journals-grid {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 1rem;
      }

      @media (min-width: 768px) {
        .html-content .journals-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (min-width: 1024px) {
        .html-content .journals-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }

      .html-content .journals-grid a {
        display: block;
        padding: 1rem;
        background-color: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 0.375rem;
        transition: background-color 0.2s, border-color 0.2s;
      }

      .html-content .journals-grid a:hover {
        background-color: var(--color-red-50);
        border-color: var(--color-red-600);
        text-decoration: none;
      }
    `}</style>
  );
}

export default StyleSheet;
