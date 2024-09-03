"use client";
import React, { useState } from "react";
import {
  SquareAsterisk,
  LayoutDashboard,
  MessageCircle,
  TriangleRight,
  SquareMenu,
  FileBarChart,
  Building2,
  DollarSign,
  SquareCheck,
  Trophy,
  ChevronsUp,
  Church,
  Menu,
} from "lucide-react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { marketingDocumentsTable } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";

const icons = [
  {
    id: 1,
    title: "Logos & Brands",
    icon: <SquareAsterisk key="apple" size={25} />,
  },
  {
    id: 2,
    title: "WAVIT",
    icon: <LayoutDashboard key="apple" size={25} />,
  },
  {
    id: 3,
    title: "Private Equity",
    icon: <MessageCircle key="apple" size={25} />,
  },
  {
    id: 4,
    title: "High Risk",
    icon: <TriangleRight key="apple" size={25} />,
  },
  {
    id: 5,
    title: "MIPOS",
    icon: <SquareMenu key="apple" size={25} color="yellow" />,
  },
  {
    id: 6,
    title: "Case Studies",
    icon: <FileBarChart key="apple" size={25} />,
  },
  {
    id: 7,
    title: "MiCamp Corporate",
    icon: <Building2 key="apple" size={25} />,
  },
  {
    id: 8,
    title: "MiPayment Choice",
    icon: <DollarSign key="apple" size={25} color="green" />,
  },
  {
    id: 9,
    title: "FSP",
    icon: <SquareCheck key="apple" size={25} />,
  },
  {
    id: 10,
    title: "MiCamp Sports",
    icon: <Trophy key="apple" size={25} color="gold" />,
  },
  {
    id: 11,
    title: "MiCamp Booster",
    icon: <ChevronsUp key="apple" size={25} color="lightgreen" />,
  },
  {
    id: 12,
    title: "MiCamp Church",
    icon: <Church key="apple" size={25} />,
  },
  {
    id: 13,
    title: "View All",
    icon: <Menu key="apple" size={25} />,
  },
];

const Page: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + icons.length) % icons.length,
    );
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "#" },
    { accessorKey: "DocName", header: "File Name" },
    { accessorKey: "FileSize", header: "File Size" },
    { accessorKey: "UploadDateTime", header: "Upload Date/Time" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <div className="relative mx-auto flex w-full max-w-xs items-center justify-center">
        <button
          className="absolute left-0 rounded-full border border-gray-300 bg-white px-2 text-xl text-gray-700 shadow-md hover:bg-gray-100"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <div className="flex h-24 items-center justify-center gap-2">
          {icons[currentIndex].icon}
          <p className="text-center">{icons[currentIndex].title}</p>
        </div>
        <button
          className="absolute right-0 rounded-full border border-gray-300 bg-white px-2 text-xl text-gray-700 shadow-md hover:bg-gray-100"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>

      <div className="grid flex-auto grid-cols-1 overflow-auto rounded-md">
        <DataTable
          columns={columns}
          data={marketingDocumentsTable}
          enableColumnFilter={true}
          filteredBy="DocName"
        />
      </div>
    </section>
  );
};

export default Page;
