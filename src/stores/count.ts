import {create} from "zustand";
interface ICountState{
  count: number,
  add:()=>void,
  plus:(num: number)=>void
}
const useCountStore = create<ICountState>()((set) => {
  return {
    count: 0,
    add: () => {
      set((state) => {
        return {
          count: state.count + 1
        }
      })
    },
    plus:(num)=>{
      set((state)=> {
        return {
          count: state.count+num
        }
      })
    }
  }
})

export default useCountStore