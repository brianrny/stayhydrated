import styled from "styled-components"

interface Props {
    props?: Quote;
}

interface Quote {
    quote: string,
    author: string,
}

const Header = styled.h1`
    margin-bottom: 10px;
`

const Container = styled.div`
    flex: 1;
    align-self: start;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Description = styled.p`
    margin-bottom: 1rem;
`

const QuoteMessage = styled.i`
    margin-top: auto;
`

const Quote = ({ props }: Props) => {
    return (
        <QuoteMessage>{props?.quote} - {props?.author}</QuoteMessage>
    )
}

export function InfoPanel() {
    return (
        <Container>
            <Header>Stay hydrated</Header>
            <Description>I've been starting to live more healthy and one of the most important source that kept me going was water. </Description>
            <Description>So I decided to create a tool that will assist me and track how much water I drink, with input of myself ofcourse. </Description>
            <Quote props={{
                quote: "Be good and stay good. Even for yourself.",
                author: "Brian"
            }} />
        </Container>
    )
}
