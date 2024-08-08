import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        // TODO: Удалить
        resolve(import('./MainPage'));
    }, 1500);
}));
