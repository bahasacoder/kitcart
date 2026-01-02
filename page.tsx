'use client'; // This directive ensures the component runs on the client side

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '@/features/counterSlice';
import { store } from "@/lib/store"
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}