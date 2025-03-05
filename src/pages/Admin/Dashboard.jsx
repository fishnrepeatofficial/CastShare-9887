import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useStore from '../../lib/store';
import PermissionsManager from '../../components/Admin/PermissionsManager';
import CreatorManager from '../../components/Admin/CreatorManager';

export default function Dashboard() {
  const user = useStore(state => state.user);
  const checkPermission = useStore(state => state.checkPermission);

  if (!user || !checkPermission('admin.access')) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">User Permissions</h2>
          <PermissionsManager />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Creators</h2>
          <CreatorManager />
        </section>
      </div>
    </div>
  );
}