import useCountStore from "../../stores/count.ts";

export function Component(){
  const {count,plus,add} = useCountStore(state=>{
    return {
      count: state.count,
      add: state.add,
      plus: state.plus
    }
  })
  return <div>
    <div>dashboard count: {count}</div>
    <button onClick={add}>+1</button>
    <button onClick={()=>{
      plus(10)
    }}>plus</button>
  </div>
}