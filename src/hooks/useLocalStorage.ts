import { useEffect, useState } from "react";

function getLocalStorageValue<T>(key: string, defaultValue: T): T {
    const saved = localStorage.getItem(key)
    const initial = saved ? JSON.parse(saved) : null
    return initial !== null ? initial : defaultValue
}

const useLocalstorage = <T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(() => {
        return getLocalStorageValue(key, defaultValue);
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

export default useLocalstorage;