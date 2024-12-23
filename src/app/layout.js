import "./globals.css";

export const metadata = {
  title: "Car Doctor",
  description: "Car Doctor is your trusted car repair and maintenance workshop, providing expert services to keep your vehicle running smoothly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
