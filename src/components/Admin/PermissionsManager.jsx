import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { PERMISSIONS } from '../../lib/permissions';

export default function PermissionsManager() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*, user_permissions(*)');
    
    if (!error) {
      setUsers(data);
    }
    setLoading(false);
  };

  const updatePermission = async (userId, permission, value) => {
    await supabase
      .from('user_permissions')
      .upsert({ user_id: userId, permission, value });
    
    loadUsers();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th>User</th>
            {Object.values(PERMISSIONS).map(permission => (
              <th key={permission}>{permission}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              {Object.values(PERMISSIONS).map(permission => (
                <td key={`${user.id}-${permission}`}>
                  <input
                    type="checkbox"
                    checked={user.user_permissions?.some(p => 
                      p.permission === permission && p.value
                    )}
                    onChange={(e) => updatePermission(
                      user.id,
                      permission,
                      e.target.checked
                    )}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}