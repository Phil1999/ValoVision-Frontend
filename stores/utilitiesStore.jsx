import { create } from 'zustand';
import { fetchUtilities, createUtility, updateUtility, deleteUtility } from '@/api/Agents/utilitiesApi';

const useUtilitiesStore = create((set) => ({
    utilities: [],
    loading: false,
    error: null,
    fetchUtilities: async () => {
        set({ loading: true});
        try {
            const utilities = await fetchUtilities();
            set({ utilities, loading: false});
        } catch (error) {
            set({error: error.message, loading: false});
        }
    },
    addUtility: async (utilityData) => {
        try {
            const newUtility = await createUtility(utilityData);
            set((state) => ({ utilities: [...state.utilities, newUtility]}));
        } catch (error) {
            set({ error: error.message, loading: false});
        }
    },
    updateUtility: async (id, utilityData) => {
        try {
            await updateAgent(id, utilityData);
            set((state) => ({
                utilities: state.utilities.map(
                    (utility) => (utility.utilityID === id ? { ...utility, ...utilityData } : utility)),
            }));
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    deleteUtility: async (id) => {
        try {
            await deleteUtility(id);
            set((state) => ({
                utilities: state.utilities.filter((agent) => utility.utilityID !== id),
            }));
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

}));

export default useUtilitiesStore;
