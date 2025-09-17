import KVStore from 'expo-sqlite/kv-store';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type User = {
    id: string;
    name: string;
};

type StoreState = {
    count: number;
    user: User | null;
    loading: boolean;

    // sync actions
    increment: (by?: number) => void;
    reset: () => void;
    setUser: (user: User | null) => void;

    // async actions
    fetchProfile: (userId: string) => Promise<void>;
};

const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            count: 0,
            user: null,
            loading: false,

            increment: (by = 1) => set((s) => ({ count: s.count + by })),

            reset: () => set({ count: 0, user: null }),

            setUser: (user) => set({ user }),

            fetchProfile: async (userId: string) => {
                set({ loading: true });
                try {
                    // Replace with your real API call:
                    // const res = await fetch(`https://api.example.com/users/${userId}`);
                    // const data = await res.json();
                    // Example simulated fetch:
                    await new Promise((r) => setTimeout(r, 700));
                    const data: User = { id: userId, name: `User ${userId}` };

                    set({ user: data, loading: false });
                } catch (e) {
                    // handle error as needed
                    set({ loading: false });
                }
            },
        }),
        {
            name: 'hexaa-storage', // unique name
            storage: createJSONStorage(() => KVStore),
            // only persist the parts you want (exclude transient/loading)
            partialize: (state: StoreState) => ({ count: state.count, user: state.user }),
        }
    )
);

export default useStore;