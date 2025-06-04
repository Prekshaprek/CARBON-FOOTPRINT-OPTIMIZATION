import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Factory, Leaf, BarChart3 } from 'lucide-react';

const InfoCards = () => {
  const cards = [
    {
      icon: Truck,
      title: "Transportation Optimization",
      description: "Reduce emissions through route optimization, vehicle efficiency, and alternative fuels.",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Factory,
      title: "Warehouse Sustainability",
      description: "Implement energy-efficient facilities, sustainable packaging, and waste reduction.",
      color: "from-secondary/20 to-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: Leaf,
      title: "Green Supply Chain",
      description: "Develop sustainable sourcing, partner with eco-conscious vendors, and reduce packaging.",
      color: "from-success/20 to-success/10",
      iconColor: "text-success"
    },
    {
      icon: BarChart3,
      title: "Emissions Analytics",
      description: "Track, measure, and report carbon footprint across your entire supply chain network.",
      color: "from-accent/20 to-accent/10",
      iconColor: "text-accent"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-6 bg-gradient-to-br ${card.color} border border-gray-100 shadow-sm`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`rounded-full w-12 h-12 flex items-center justify-center ${card.iconColor} bg-white shadow-sm mb-4`}>
                <card.icon size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;