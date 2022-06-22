import { useContext, useEffect } from "react";
import styled from "styled-components"
import { ProgressContext } from "../contexts/progresscontext";
import { Children } from "../interfaces/htmlelement";


interface TrackerProps {
    amountOfBottles?: number;
}

interface IndicatorProps {
    milestone?: number;
}

const Container = styled.div`
    flex: 1;
    align-self: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const BottleVisuals = styled.div`
    position: relative;
    height: 400px;
    border: 1px solid black;
`

export const WATER_THRESHOLD = 1500;

function BottleIndicator({ milestone = 0 }: IndicatorProps) {
    let calculatedHeight = milestone / WATER_THRESHOLD * 100

    return (
        <div style={{
            position: "absolute",
            height: `${calculatedHeight}%`,
            width: "100%",
            borderTop: "1px solid #C1292E",
            backgroundColor: "#639fab",
            bottom: 0,
            transition: "0.25s height ease-in-out"
        }}>
        </div>
    )
}

const TrackerHolder = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`

const TrackerCount = styled.h1`
    z-index: 99;
    color: #EEEEEE;
    background-color: #2F2D2E;
    border-radius: 5px;
    padding: 0 10px 5px;
`

const TrackerExtra = styled.h3`
    z-index: 99;
    color: #2F2D2E;
`

function Tracker({ amountOfBottles = 0 }: TrackerProps) {
    return (
        <TrackerHolder>
            <TrackerCount>{amountOfBottles}</TrackerCount>
            <TrackerExtra>bottles.</TrackerExtra>
        </TrackerHolder>
    )
}

function VirtualBottle() {
    const { amountOfBottles, mililitresWater } = useContext(ProgressContext);

    return (
        <BottleVisuals>
            <Tracker amountOfBottles={amountOfBottles} />
            <BottleIndicator milestone={mililitresWater} />
        </BottleVisuals>
    )
}

export function Bottle({ children }: Children) {
    return (
        <Container>
            <VirtualBottle />
            {children}
        </Container>
    )
}
