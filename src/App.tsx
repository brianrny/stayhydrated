
import styled from "styled-components";
import { Controls } from "./components/Controls";
import { Bottle } from "./components/Bottle";
import { InfoPanel } from "./components/InfoPanel";
import { TopBar } from "./components/Bar";
import { ProgressActionsType, ProgressContext, ProgressPayload } from "./contexts/progresscontext";
import { useLocalStorage } from "./hooks/useLocalStorage";

let SPACING = "3rem";

const WrapContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: ${SPACING} 1rem;
  border-radius: 10px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  max-height: 750px;
  height: 65%;
  max-width: calc(650px - ${SPACING});
  gap: ${SPACING};
  position: relative;
`

function App() {
  const [mililitresWater, setMililitreswater] = useLocalStorage("mililitresWater", 0);
  const [amountOfBottles, setAmountOfBottles] = useLocalStorage("amountOfBottles", 0);

  const dispatchProgressEvent = (actionType: ProgressActionsType, payload: ProgressPayload) => {
    switch(actionType) {
      case 'INITIALIZE': {
        setMililitreswater(parseInt(localStorage.getItem("mililitresWater")!))
        setAmountOfBottles(parseInt(localStorage.getItem("amountOfBottles")!))
      }
      case 'UPDATE': {
        setMililitreswater(payload.mililitresWater)
        setAmountOfBottles(payload.amountOfBottles)
      }
    }
  }

  return (
    <ProgressContext.Provider value={{
      mililitresWater: parseInt(mililitresWater),
      amountOfBottles: parseInt(amountOfBottles),
      dispatchProgressEvent
    }}>
      <WrapContainer>
        <MainContent>
          <TopBar />
          <InfoPanel />
          <Bottle>
            <Controls />
          </Bottle>
        </MainContent>
      </WrapContainer>
    </ProgressContext.Provider>
  )
}

export default App
