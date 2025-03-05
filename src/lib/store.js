import { create } from 'zustand';
import { supabase } from './supabase';

const useStore = create((set) => ({
  user: null,
  collections: [],
  setUser: (user) => set({ user }),
  permissions: {},
  setPermissions: (permissions) => set({ permissions }),
  
  loadPermissions: async (userId) => {
    const { data } = await supabase
      .from('user_permissions')
      .select('*')
      .eq('user_id', userId);
    set({ permissions: data || {} });
  },

  checkPermission: (permission) => {
    const { permissions } = useStore.getState();
    return permissions[permission] || false;
  }
}));

export default useStore;