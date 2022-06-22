import { useEffect, useState } from "react"

function getStorageValue(key: string, defaultValue: any) {
    const storedItem = localStorage.getItem(key)!;
    const initialValue = JSON.parse(storedItem);

    if (initialValue == 0 || initialValue == null || initialValue == undefined) {
        return defaultValue
    }

    return initialValue
}

export const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    })

    useEffect(() => {
        let mounted = true

        if (mounted) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        return () => {
            mounted = false
        }
    }, [key, value])

    return [value, setValue] as const
}
