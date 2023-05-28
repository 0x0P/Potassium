import Nav from "@/component/nav";
import Splash from "@/component/splash";
import "@/styles/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Splash />
        <Nav />
        {children}
      </body>
    </html>
  );
}
