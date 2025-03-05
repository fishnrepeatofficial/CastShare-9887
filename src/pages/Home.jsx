import { useState } from 'react';
import VideoCard from '../components/VideoCard';

const MOCK_VIDEOS = [
  {
    id: 1,
    title: "Monster Bass Catch at Sunset",
    description: "Amazing catch at Lake Powell using topwater lure",
    thumbnail: "https://images.unsplash.com/photo-1544650039-22886faf0c8a?w=800",
    author: "BassPro99",
    source: "YouTube"
  },
  {
    id: 2,
    title: "Quick Fishing Tips & Tricks",
    description: "Essential tips for catching more fish",
    thumbnail: "https://images.unsplash.com/photo-1511424323602-d3c4a1ab0de9?w=800",
    author: "FishingMaster",
    source: "TikTok"
  }
];

export default function Home() {
  const [videos] = useState(MOCK_VIDEOS);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Latest Casts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}