//so useActiveList hook holds a shared list of active user IDs.

import { create } from 'zustand'


interface ActiveListStore {
    members: string[];
    add: (id: string) => void;
    remove: (id: string) => void;
    set: (ids: string[]) => void;
}


const useActiveList = create<ActiveListStore>((set) => ({

}))