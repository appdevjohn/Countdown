import { openDB } from 'idb';

const mainDatabase = openDB('main-database', 1, {
    upgrade(db) {
        console.log('Upgrading...')
        if (!db.objectStoreNames.contains('countdowns')) {
            console.log('Creating Object Store...');
            db.createObjectStore('countdowns', { keyPath: 'id' });
        }
    }
});

export const getCountdowns = () => {
    return mainDatabase.then(db => {
        const tx = db.transaction('countdowns', 'readonly');
        const store = tx.objectStore('countdowns');
        return store.getAll();
    });
}

export const addCountdown = countdown => {
    return mainDatabase.then(db => {
        const tx = db.transaction('countdowns', 'readwrite');
        const store = tx.objectStore('countdowns');
        store.add(countdown);
        return tx.complete;
    });
}

export const deleteCountdown = id => {
    return mainDatabase.then(db => {
        const tx = db.transaction('countdowns', 'readwrite');
        const store = tx.objectStore('countdowns');
        store.delete(id);
        return tx.complete;
    });
}