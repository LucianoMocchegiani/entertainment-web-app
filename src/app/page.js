import Landing from "@/components/landing/Landing";
import NavBar from "@/components/navBar/NavBar";
import PopcornBg from '@/components/popcornbg/Popcornbg'
import Footer from "@/components/footer/Footer";

export default function LandingPage() {
  return (
    <>
      <main className="bg-black max-h-screen">
        <PopcornBg/>
        <NavBar/>
        <Landing/>
        {/* <Footer/> */}
      </main>
    </>
  );
}
