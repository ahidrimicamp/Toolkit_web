"use client";

import EquipmentReportForm from "@/components/equipments/EquipmentReportForm";
import EquipmentTabContent from "@/components/equipments/EquipmentTabContent";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { equipmentData } from "@/constants";
import { DataTypes } from "@/types";
import React, { useState } from "react";


const Equipment = () => {

  const [activeItem, setActiveItem] = useState<string>("");
  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
      <EquipmentTabContent />
    </> 
  );
};

export default Equipment;
