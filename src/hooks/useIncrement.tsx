import { useState } from "react";

export const useIncrement = (initialValue: number) => {
    const [value, setValue] = useState(initialValue);

    const handleIncrement = (amount: number) => setValue((prev) => prev + amount)
    const handleFlatAssignment = (amount: number) => setValue(amount)
    
    return [
        value,
        {
            setFlat: handleFlatAssignment,
            increment: handleIncrement
        }
    ] as const
}
