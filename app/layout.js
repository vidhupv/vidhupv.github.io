import './globals.css';


export const metadata = {
  title: 'Vidhupv',
  description: 'Personal website of Vidhupv',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
