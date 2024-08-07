import Landing from "@/components/landing/Landing";
import NavBar from "@/components/navBar/NavBar";
import PopcornBg from '@/components/popcornbg/Popcornbg'
import Footer from "@/components/footer/Footer";

export default function LandingPage() {
  return (
    <>
      <main className="">
        <PopcornBg/>
        <NavBar/>
        <Landing/>
        <Footer/>
      </main>
    </>
  );
}
