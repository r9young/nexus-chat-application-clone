//so useActiveList hook holds a shared list of active user IDs.

import { create } from 'zustand'


interface ActiveListStore {
    members: string[];
    add: (id: string) => void;
    remove: (id: string) => void;
    set: (ids: string[]) => void;
}


const useActiveList = create<ActiveListStore>((set) => ({
    members:[],
    add: (id) => set((state) => ({ members: [...state.members, id]})),
    remove: (id) =>
        set((state) => ({ members: state.members.filter((mId) => mId !== id) })),
    set:(ids) => set(() => ({ members:ids}))
}))

export default useActiveList