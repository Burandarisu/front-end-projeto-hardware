import React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis, Legend } from "recharts";

import api from "../services/api";

import {
  Global,
  Header,
  Container,
  Charts,
  ChartWrapper,
  Title,
  TooltipContainer,
} from "../styles/index";

export async function getStaticProps() {
  const res = await api.get("/measure");
  if (res) {
    return {
      props: {
        measures: res.data,
      },
      revalidate: 5,
    };
  }
}

export default function Home({ measures }) {
  const tooltipTemperature = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipContainer>
          <p className="label">{`Hour: ${new Date(
            label
          ).toLocaleTimeString()} : `}</p>
          <p className="desc">{`Temperature: ${payload[0].payload.temperature}ºC`}</p>
        </TooltipContainer>
      );
    }

    return null;
  };

  const tooltipHumidity = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipContainer>
          <p className="label">{`Hour: ${new Date(
            label
          ).toLocaleTimeString()} : `}</p>
          <p className="desc">{`Humidity: ${payload[0].payload.humidity}%`}</p>
        </TooltipContainer>
      );
    }

    return null;
  };

  return (
    <Global>
      <Header />
      <Container>
        <Title>Measure Charts</Title>
        <Charts>
          <ChartWrapper>
            <Title>Tempreature</Title>
            <LineChart
              width={1000}
              height={400}
              style={{ margin: "auto" }}
              data={measures.data}
            >
              <Tooltip content={tooltipTemperature} />
              <Legend verticalAlign={"top"} />
              <YAxis domain={[0, 50]} dataKey={"temperature"} />
              <XAxis
                reversed
                dataKey={"created_at"}
                tickFormatter={(data) => {
                  return new Date(data).toLocaleTimeString();
                }}
              />
              <Line type={"monotone"} dataKey={"temperature"} stroke={"blue"} />
            </LineChart>
          </ChartWrapper>
          <ChartWrapper>
            <Title>Humidity</Title>
            <LineChart
              width={1000}
              height={400}
              style={{ margin: "auto" }}
              data={measures.data}
            >
              <Tooltip content={tooltipHumidity} />
              <Legend verticalAlign={"top"} />
              <YAxis domain={[0, 100]} dataKey={"humidity"} />
              <XAxis
                reversed
                dataKey={"created_at"}
                tickFormatter={(data) => {
                  return new Date(data).toLocaleTimeString();
                }}
              />
              <Line type={"monotone"} dataKey={"humidity"} stroke={"blue"} />
            </LineChart>
          </ChartWrapper>
        </Charts>
      </Container>
    </Global>
  );
}
