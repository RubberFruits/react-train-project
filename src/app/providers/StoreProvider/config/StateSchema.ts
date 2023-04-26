import { CounterSchema } from 'enitities/Counter';
import { UserSchema } from 'enitities/User';

export interface StateSchema{
    counter: CounterSchema,
    user: UserSchema
}
