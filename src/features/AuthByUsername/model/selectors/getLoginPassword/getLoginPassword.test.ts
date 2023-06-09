import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return ( password: "321" )', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '321',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('321');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
