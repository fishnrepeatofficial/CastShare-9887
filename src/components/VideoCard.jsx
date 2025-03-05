import { motion } from 'framer-motion';
import { FaBookmark, FaShare } from 'react-icons/fa';

export default function VideoCard({ video }) {
  const handleSave = () => {
    // TODO: Implement save functionality
  };

  const handleShare = () => {
    // TODO: Implement share functionality
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="aspect-video relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-2 py-1 text-sm">
          {video.source}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{video.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{video.author}</span>
          <div className="flex space-x-3">
            <button
              onClick={handleSave}
              className="text-gray-600 hover:text-blue-600"
            >
              <FaBookmark />
            </button>
            <button
              onClick={handleShare}
              className="text-gray-600 hover:text-blue-600"
            >
              <FaShare />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}