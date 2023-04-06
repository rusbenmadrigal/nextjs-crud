
import { Navbar } from "@/components/Navbar";
import { TaskProvider } from "@/context/TaskContext";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Navigation</h1>
        <TaskProvider>
          <Navbar/>
          {children}
          </TaskProvider>
      </body>
    </html>
  );
}
