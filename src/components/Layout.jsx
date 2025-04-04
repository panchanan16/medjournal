// components/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';


function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;