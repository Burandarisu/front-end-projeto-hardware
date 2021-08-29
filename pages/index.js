import React from 'react'
import { LineChart, Line } from 'recharts'

import api from '../services/api'

import { Container, Charts, ChartWrapper } from '../styles/index'

export async function getStaticProps () {
  const res = await api.get('/measure')
  if (res) {
    return {
      props: {
        measures: res.data
      },
      revalidate: 5
    }
  }
}

export default function Home ({ measures }) {
  console.log(measures.data)

  return (
        <>
            <Container>
                <h1>Measures Chart</h1>
                <Charts>
                    <ChartWrapper>
                        <h1>Chart 1</h1>
                        <LineChart width={400} height={400} style={{ margin: 'auto' }} data={measures.data}>
                            <Line type={'monotone'} dataKey={'temperature'} stroke={'blue'}/>
                        </LineChart>
                    </ChartWrapper>
                    <ChartWrapper>
                        <h1>Chart 2</h1>
                        <LineChart width={400} height={400} style={{ margin: 'auto' }} data={measures.data}>
                            <Line type={'monotone'} dataKey={'temperature'} stroke={'blue'}/>
                        </LineChart>
                    </ChartWrapper>
                </Charts>
            </Container>
        </>
  )
}
