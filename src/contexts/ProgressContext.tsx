import React from "react";

export interface ProgressPayload {
    mililitresWater: number,
    amountOfBottles: number
}

export type ProgressActionsType = "UPDATE" | "INITIALIZE"

interface Progress {
    mililitresWater: number
    amountOfBottles: number
    dispatchProgressEvent: (actionType: ProgressActionsType, payload: ProgressPayload) => void
}

export const ProgressContext = React.createContext({
    mililitresWater: 0,
    amountOfBottles: 0,
} as Progress)
