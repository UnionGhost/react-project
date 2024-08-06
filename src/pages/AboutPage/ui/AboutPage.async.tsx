import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        // TODO: Удалить
        resolve(import('./AboutPage'));
    }, 1500);
}));
