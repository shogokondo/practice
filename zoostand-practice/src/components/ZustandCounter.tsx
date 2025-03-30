import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
  dec: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 }))
}))

function ZustandCounter() {
  const { count, inc, dec } = useStore()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>one up</button>
      <button onClick={dec}>one down</button>
    </div>
  )
}

export default ZustandCounter