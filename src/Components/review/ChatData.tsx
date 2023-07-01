import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const month = ["January", "February", "March", "April", "May", "June", "July"];

const NumberArr1 = [1, 4, 48, 394, 848, 447, 984];
const NumberArr2 = [4, 5, 584, 283, 7, 984, 939];

const MyItemData: any = [];
const MyCostData: any = [];

export const MyArray1 = [
  {
    item: "January",
    cost: Math.floor(Math.random() * 1000),
  },
  {
    item: "February",
    cost: Math.floor(Math.random() * 1000),
  },
  {
    item: "March",
    cost: Math.floor(Math.random() * 1000),
  },
  {
    item: "April",
    cost: Math.floor(Math.random() * 1000),
  },
  {
    item: "May",
    cost: Math.floor(Math.random() * 1000),
  },
  {
    item: "June",
    cost: Math.floor(Math.random() * 1000),
  },
  {
    item: "July",
    cost: Math.floor(Math.random() * 1000),
  },
];

const GenerateRandom = (max: any, min: any) => {
  return Math.floor(Math.random() * (max - min));
};

Array.from({ length: 10 }, () => {
  MyItemData.push({
    item: month[Math.floor(Math.random() * month.length)],
  });
  MyCostData.push({
    cost: GenerateRandom(90, 50),
  });
});

const data = {
  labels: MyItemData.map((el: any) => el?.item),
  datasets: [
    {
      label: "Dataset 1",
      data: MyItemData.map((el: any) => el?.item),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "All Cost",
      data: MyArray1.map((el: any) => el?.cost),
      backgroundColor: "#f54446",
    },
  ],
};

const ChatData = () => {
  return (
    <div className="w-full flex mb-24 justify-center items-center">
      <div className="w-[80%]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default ChatData;
