import { useState } from 'react';
import VideoCard from '../components/VideoCard';

export default function SavedCasts() {
  const [savedVideos] = useState([]);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Saved Casts</h1>
      {savedVideos.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No saved casts yet. Start saving some videos!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}