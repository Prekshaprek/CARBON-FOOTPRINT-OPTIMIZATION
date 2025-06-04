import React from 'react';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsSection = () => {
  // Chart data
  const chartData = {
    labels: ['Transportation', 'Warehousing', 'Packaging', 'Returns', 'Administrative'],
    datasets: [
      {
        label: 'Traditional Supply Chain (CO₂ tons/year)',
        data: [450, 200, 150, 100, 50],
        backgroundColor: 'rgba(26, 117, 159, 0.7)', // secondary color
        borderColor: 'rgba(26, 117, 159, 1)',
        borderWidth: 1,
      },
      {
        label: 'Optimized Supply Chain (CO₂ tons/year)',
        data: [200, 120, 70, 50, 30],
        backgroundColor: 'rgba(45, 106, 79, 0.7)', // primary color
        borderColor: 'rgba(45, 106, 79, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Carbon Emissions by Supply Chain Activity',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'CO₂ Emissions (tons/year)',
        },
      },
    },
  };

  const impactStats = [
    { label: "Average Carbon Reduction", value: "45%", description: "potential reduction in logistics carbon footprint with optimized processes" },
    { label: "Cost Savings", value: "23%", description: "average operational cost reduction from sustainable supply chain practices" },
    { label: "Customer Preference", value: "73%", description: "of consumers prefer to purchase from environmentally responsible companies" },
    { label: "ROI Timeframe", value: "18 mos", description: "average time to achieve return on investment for green logistics initiatives" }
  ];

  return (
    <section id="statistics" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Environmental Impact</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Optimizing your supply chain can significantly reduce carbon emissions while improving operational efficiency.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Chart */}
          <motion.div 
            className="card shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Bar data={chartData} options={chartOptions} />
          </motion.div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impactStats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="card bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-text mb-1">{stat.label}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 md:p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-center">Did You Know?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">8%</p>
              <p className="text-gray-700">of global greenhouse gas emissions come from freight transport</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">30%</p>
              <p className="text-gray-700">of truck miles are driven with empty or partially-filled trucks</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">52%</p>
              <p className="text-gray-700">of companies list sustainability as a top supply chain priority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;