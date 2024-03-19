import { create } from 'zustand';
import { fetchStrategies, createStrategy, updateStrategy, deleteStrategy } from '@/api/Strategies/strategiesApi';

const useStrategiesStore = create((set) => ({
    strategies: [],
    loading: false,
    error: null,
    fetchStrategies: async () => {
        set({ loading: true});
        try {
            const strategies = await fetchStrategies();
            set({ strategies, loading: false});
        } catch (error) {
            set({error: error.message, loading: false});
        }
    },
    addStrategy: async (strategyData) => {
        try {
            const newStrategy = await createStrategy(strategyData);
            set((state) => ({ strategies: [...state.strategies, newStrategy]}));
        } catch (error) {
            set({ error: error.message, loading: false});
        }
    },
    updateStrategy: async (id, strategyData) => {
        try {
            await updateStrategy(id, strategyData);
            set((state) => ({
                strategies: state.strategies.map(
                    (strategy) => (strategy.id === id ? { ...strategy, ...strategyData } : strategy)),
            }));
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    deleteStrategy: async (id) => {
        try {
            await deleteStrategy(id);
            set((state) => ({
                strategies: state.strategies.filter((strategy) => strategy.id !== id),
            }));
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

}));

export default useStrategiesStore;
