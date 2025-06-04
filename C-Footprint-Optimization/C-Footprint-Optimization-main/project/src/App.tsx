import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import CarbonOptimizer from './components/CarbonOptimizer';
import InfoCards from './components/InfoCards';
import StatisticsSection from './components/StatisticsSection';
import ResourcesSection from './components/ResourcesSection';
import { GeminiProvider } from './contexts/GeminiContext';

function App() {
  return (
    <GeminiProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-primary/90 to-secondary/90 text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Optimize Your Supply Chain's Carbon Footprint
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Leverage AI-powered insights to reduce environmental impact while 
                  maintaining efficiency in your logistics operations.
                </p>
                <motion.a
                  href="#optimizer"
                  className="btn bg-white text-primary hover:bg-gray-100 transition duration-300 px-8 py-3 rounded-full font-medium inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            </div>
          </section>

          <InfoCards />
          
          <section id="optimizer" className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Carbon Footprint Optimizer
                </h2>
                <CarbonOptimizer />
              </div>
            </div>
          </section>
          
          <StatisticsSection />
          <ResourcesSection />
        </main>
        <Footer />
      </div>
    </GeminiProvider>
  );
}

export default App;