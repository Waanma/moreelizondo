import { FC } from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const images: string[] = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.png',
  './images/7.png',
  './images/8.png',
];

const Page: FC = () => (
  <main className="overflow-x-hidden">
    <Hero />
    <Gallery images={images} />
    <About />
    <Contact />
    <Footer />
  </main>
);

export default Page;
