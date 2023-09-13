import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
} from "recharts";

const data = [
  {
    name: "January",
    Property: 3,
    Activities: 20,
    Transportation: 1,
    Users: 232,
    amt: 2400,
  },
  {
    name: "February",
    Property: 3000,
    Activities: 1398,
    Transportation: 182,
    Users: 547,
    amt: 2210,
  },
  {
    name: "March",
    Property: 2000,
    Activities: 6800,
    Transportation: 435,
    Users: 876,
    amt: 2290,
  },
  {
    name: "April",
    Property: 2780,
    Activities: 3908,
    Transportation: 232,
    Users: 1249,
    amt: 2000,
  },
  {
    name: "May",
    Property: 5790,
    Activities: 4800,
    Transportation: 3468,
    Users: 2563,
    amt: 2181,
  },
  {
    name: "June",
    Property: 2390,
    Activities: 3800,
    Transportation: 563,
    Users: 4821,
    amt: 2500,
  },
  {
    name: "July",
    Property: 3490,
    Activities: 4300,
    Transportation: 912,
    Users: 7435,
    amt: 2100,
  },
  {
    name: "August",
    Property: 3490,
    Activities: 7300,
    Transportation: 1753,
    Users: 232,
    amt: 2100,
  },
  {
    name: "September",
    Property: 7290,
    Activities: 2500,
    Transportation: 4572,
    Users: 8992,
    amt: 2100,
  },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Activities"
            stroke="#812A00"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Transportation"
            stroke="#FC8F3A"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Property"
            stroke="#006B5E"
            fillOpacity={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
