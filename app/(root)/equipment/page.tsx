"use client";

import EquipmentTabContent from "@/components/equipments/EquipmentTabContent";
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
