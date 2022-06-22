import { useContext, useEffect } from "react";
import styled from "styled-components"
import { ProgressContext } from "../contexts/progresscontext";
import { useIncrement } from "../hooks/useIncrement";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { WATER_THRESHOLD } from "./Bottle";

interface Props {
    value: number;
    increment: (value: number) => void;
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .5rem 0
`

const OptionButton = styled.button`
    width: 100%;
    margin: 0.25rem 0rem;
    padding: .5rem;
    background-color: #6C91C2;
    color: #FCFCFC;
    border: none;
    cursor: pointer;
    border-radius: .25rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`

const GuideText = styled.h4`
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
`

let remaining = 1500;

function Option({ value, increment }: Props) {
    return (
        <OptionButton onClick={() => {
            increment(value)
        }}>{value}ml</OptionButton>
    )
}

export function Controls() {
    const { dispatchProgressEvent } = useContext(ProgressContext)

    const [amountOfBottles, setAmountOfBottles] = useLocalStorage("amountOfBottles", 0);
    const [mililitresWater, setMililitreswater] = useLocalStorage("mililitresWater", 0);

    const [getAmount, { increment, setFlat }] = useIncrement(parseInt(mililitresWater));

    useEffect(() => {       
        let mounted = true

        console.log(getAmount);
        
        if (mounted) {           
            if (WATER_THRESHOLD - getAmount < 0) {
                setFlat(getAmount - remaining)
                setAmountOfBottles((prev: number) => prev += 1)
            } else if (WATER_THRESHOLD - getAmount == 0) {
                setFlat(0)
                setMililitreswater(0)
                setAmountOfBottles((prev: number) => prev += 1)
            } else {
                setMililitreswater(getAmount)
            }
            dispatchProgressEvent("UPDATE", { mililitresWater: getAmount, amountOfBottles: amountOfBottles })
        }

        return () => {
            mounted = false;
        }
    }, [getAmount])

    return (
        <Container>
            <GuideText>Select units in mililitres.</GuideText>
            <Option value={250} increment={increment} />
            <Option value={500} increment={increment} />
            <Option value={1000} increment={increment} />
        </Container>
    )
}
