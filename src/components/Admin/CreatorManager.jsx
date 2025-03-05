import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function CreatorManager() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    loadCreators();
  }, []);

  const loadCreators = async () => {
    const { data } = await supabase
      .from('creators')
      .select('*, user:users(email)');
    setCreators(data || []);
  };

  const claimCreator = async (creatorId, userId) => {
    await supabase
      .from('creators')
      .update({ user_id: userId })
      .eq('id', creatorId);
    loadCreators();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Manage Creators</h2>
      <div className="grid gap-4">
        {creators.map(creator => (
          <div key={creator.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">{creator.name}</h3>
            <p className="text-gray-600">
              Status: {creator.user ? 'Claimed' : 'Unclaimed'}
            </p>
            {creator.user && (
              <p className="text-sm">Owned by: {creator.user.email}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}