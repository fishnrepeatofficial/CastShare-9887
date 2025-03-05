import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewCast() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement video submission
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6"
      >
        <h1 className="text-3xl font-bold mb-6">Share New Cast</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Video URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube or TikTok URL"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Share Cast
          </button>
        </form>
      </motion.div>
    </div>
  );
}