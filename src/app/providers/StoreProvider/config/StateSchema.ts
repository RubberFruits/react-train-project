import { CounterSchema } from 'enitities/Counter';
import { UserSchema } from 'enitities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema{
    counter: CounterSchema,
    user: UserSchema,
    loginForm: LoginSchema
}
