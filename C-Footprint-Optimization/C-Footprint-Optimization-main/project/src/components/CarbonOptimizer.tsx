import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader, AlertCircle } from 'lucide-react';
import { useGemini } from '../contexts/GeminiContext';
import ReactMarkdown from 'react-markdown';

const CarbonOptimizer = () => {
  const [userInput, setUserInput] = useState('');
  const { loading, error, response, generateResponse } = useGemini();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      await generateResponse(userInput);
    }
  };

  const placeholderQueries = [
    "How can I reduce carbon emissions in my long-haul trucking operations?",
    "What are the best practices for sustainable warehouse management?",
    "How can I optimize last-mile delivery for minimal environmental impact?",
    "What renewable energy options work best for logistics facilities?"
  ];

  return (
    <div className="card bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-6">
            <label htmlFor="userQuery" className="block text-sm font-medium text-gray-700 mb-1">
              Describe your supply chain scenario or ask a question:
            </label>
            <textarea
              id="userQuery"
              className="input-field min-h-[120px] resize-y"
              placeholder="e.g., I manage a fleet of 50 trucks delivering goods across the Northeast. How can I reduce my carbon footprint while maintaining delivery schedules?"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
            
            <div className="mt-3">
              <p className="text-sm text-gray-500 mb-2">Try these example queries:</p>
              <div className="flex flex-wrap gap-2">
                {placeholderQueries.map((query, index) => (
                  <button
                    key={index}
                    type="button"
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-2 rounded-full transition-colors"
                    onClick={() => setUserInput(query)}
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <motion.button
            type="submit"
            className="btn btn-primary w-full flex items-center justify-center"
            disabled={loading || !userInput.trim()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <Loader className="animate-spin mr-2 h-5 w-5" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Get Optimization Insights
              </>
            )}
          </motion.button>
        </form>
        
        {error && (
          <div className="mt-6 p-4 bg-error/10 border border-error/30 rounded-lg flex items-start">
            <AlertCircle className="h-5 w-5 text-error mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-error">Error</h4>
              <p className="text-sm text-gray-700">{error}</p>
              {error.includes('API key') && (
                <p className="text-sm mt-2">
                  Please create a <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code> file 
                  based on the <code className="bg-gray-100 px-1 py-0.5 rounded">.env.example</code> template 
                  and add your Google Gemini API key.
                </p>
              )}
            </div>
          </div>
        )}
        
        {response && !error && (
          <motion.div 
            className="mt-8 border-t pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-medium mb-4 text-primary">Carbon Optimization Recommendations</h3>
            <div className="prose prose-sm md:prose-base max-w-none">
              <ReactMarkdown>
                {response}
              </ReactMarkdown>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CarbonOptimizer;