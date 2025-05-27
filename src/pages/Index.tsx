
import Header from '../components/Header';
import Hero from '../components/Hero';
import ExclusiveArmadale from '../components/ExclusiveArmadale';
import NeighbourhoodNews from '../components/NeighbourhoodNews';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ExclusiveArmadale />
      <NeighbourhoodNews />
      <Footer />
    </div>
  );
};

export default Index;
