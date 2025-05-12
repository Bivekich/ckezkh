import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/layout/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Advantages } from '@/components/sections/advantages';
import { Testimonials } from '@/components/sections/testimonials';
import { Contacts } from '@/components/sections/contacts';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Advantages />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
