import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: auto;
`

export const Charts = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`

export const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 25px;

  h1 {

  }

  .recharts-wrapper {
    border: solid 1px black;
    border-radius: 8px;
  }
`
