import { create } from 'zustand'


interface ActiveListStore {
    members: string[];
    add: (id: string) => void
}