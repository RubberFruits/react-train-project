import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'enitities/User/model/types/user';
import i18n from 'shared/config/i18n/i18n';
import { userActions } from 'enitities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string
    password: string
}

enum LoginErrors {
    INCORRECT_DATTA = '',
    SERVER_ERROR = ''
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://127.0.0.1:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
