import { create } from 'zustand';
import { fetchMaps, createMap, updateMap, deleteMap } from '@/api/Maps/mapsApi';

const useMapsStore = create((set) => ({
  maps: [],
  loading: false,
  error: null,
  fetchMaps: async () => {
    set({ loading: true });
    try {
      const maps = await fetchMaps();
      set({ maps, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  addMap: async (mapData) => {
    try {
      const newMap = await createMap(mapData);
      set((state) => ({ maps: [...state.maps, newMap] }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  updateMap: async (id, mapData) => {
    try {
      const updatedMap = await updateMap(id, mapData);
      set((state) => ({
        maps: state.maps.map((map) => (map.id === id ? { ...map, ...updatedMap } : map)),
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  deleteMap: async (id) => {
    try {
      await deleteMap(id);
      set((state) => ({
        maps: state.maps.filter((map) => map.id !== id),
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useMapsStore;
