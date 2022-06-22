import styled from "styled-components"

interface Props {
    color: string;
}

const Bar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    position: absolute;
    top: 0;
    left: 0;
    padding: .75rem 1rem .25rem;
    width: calc(100% - 2rem);
    height: 20px;
    background-color: #2F2D2E;
    border-bottom: 1px solid lightgrey;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
`

function ActionCircle({ color }: Props) {
    return <Circle style={{backgroundColor: color}}></Circle>
}

export function TopBar() {
    return (
        <Bar>
            <ActionCircle color="#ec6452" />
            <ActionCircle color="#f4b345" />
            <ActionCircle color="#61b849" />
        </Bar>
    )
}
