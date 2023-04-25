import { Counter } from 'enitities/Counter/ui/Counter';
import type { CounterSchema } from 'enitities/Counter/model/types/counterSchema';
import { counterReducer } from './model/slice/counterSlice';

export {
    counterReducer, Counter, CounterSchema,
};
