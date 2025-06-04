import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, CheckCircle, Video } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      category: "Guides & Whitepapers",
      icon: FileText,
      items: [
        {
          title: "The Complete Guide to Green Logistics",
          description: "Comprehensive strategies for sustainable supply chain operations.",
          link: "#"
        },
        {
          title: "Carbon Measurement & Reporting",
          description: "Best practices for tracking and reporting your carbon footprint.",
          link: "#"
        },
        {
          title: "Electric Fleet Transition Roadmap",
          description: "Step-by-step guide to electrifying your logistics fleet.",
          link: "#"
        }
      ]
    },
    {
      category: "Sustainability Checklists",
      icon: CheckCircle,
      items: [
        {
          title: "Warehouse Sustainability Audit",
          description: "Identify opportunities for energy and waste reduction.",
          link: "#"
        },
        {
          title: "Sustainable Supplier Evaluation",
          description: "Criteria for assessing supplier environmental practices.",
          link: "#"
        },
        {
          title: "Transportation Carbon Reduction Checklist",
          description: "Quick actions to reduce emissions in logistics operations.",
          link: "#"
        }
      ]
    },
    {
      category: "Educational Resources",
      icon: BookOpen,
      items: [
        {
          title: "Sustainable Logistics Fundamentals",
          description: "Learn the basics of environmental impact in supply chains.",
          link: "#"
        },
        {
          title: "Carbon Offset Programs Explained",
          description: "Understanding and implementing effective offset strategies.",
          link: "#"
        },
        {
          title: "Regulatory Compliance Guide",
          description: "Navigating environmental regulations for logistics companies.",
          link: "#"
        }
      ]
    },
    {
      category: "Case Studies & Videos",
      icon: Video,
      items: [
        {
          title: "Global Retailer Reduces Emissions by 35%",
          description: "How optimization technology transformed their logistics.",
          link: "#"
        },
        {
          title: "Sustainable Packaging Revolution",
          description: "Manufacturer cuts carbon footprint with innovative materials.",
          link: "#"
        },
        {
          title: "Alternative Fuel Success Story",
          description: "Fleet operator's transition to renewable energy sources.",
          link: "#"
        }
      ]
    }
  ];
  
  return (
    <section id="resources" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Sustainability Resources</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Explore our curated collection of guides, tools, and case studies to help you implement sustainable practices in your supply chain.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {resources.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="card h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.a
                    key={itemIndex}
                    href={item.link}
                    className="block p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-medium text-primary">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;