import React from "react";
import {
  Save,
  FileDiff,
  XCircle,
  CheckCircle,
  Edit,
  CalendarDays,
  CircleDollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const EntryHeader = () => {
  const ACHPortalBtnRender = [
    { id: 1, title: "Save", icon: Save },
    { id: 2, title: "Save & New", icon: FileDiff },
    { id: 3, title: "Delete", icon: XCircle },
    { id: 4, title: "Approve", icon: CheckCircle },
    { id: 5, title: "Unapprove", icon: XCircle },
  ];
  const VendorBtnRender = [
    { id: 1, title: "Generate Scheduled Vendor", icon: CalendarDays },
    { id: 2, title: "Edit", icon: Edit },
  ];
  const AttachmentsBtnRender = [{ id: 1, title: "Add Doc", icon: XCircle }];
  const ServicesBtnRender = [
    { id: 1, title: "Services", icon: CircleDollarSign },
  ];
  return (
    <div className="flex w-full items-center justify-between max-xl:flex-col max-xl:flex-wrap max-xl:items-start">
      <span className="text-2xl text-blue-500 max-xl:mb-5 max-xl:text-4xl">
        Vendor Edit
      </span>
      <div className="flex flex-col">
        <span className="mb-2">ACH Portal Tasks</span>
        <div className="flex items-center gap-2 max-lg:flex-wrap">
          {ACHPortalBtnRender.map((btn) => (
            <Button key={btn.id} className="flex items-center gap-2">
              {React.createElement(btn.icon)}
              {btn.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mb-2">Vendor</span>
        <div className="flex items-center gap-2">
          {VendorBtnRender.map((btn) => (
            <Button key={btn.id} className="flex items-center gap-2">
              {React.createElement(btn.icon)}
              {btn.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mb-2">Attachments</span>
        <div className="flex items-center gap-2">
          {AttachmentsBtnRender.map((btn) => (
            <Button key={btn.id} className="flex items-center gap-2">
              {React.createElement(btn.icon)}
              {btn.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mb-2">Services</span>
        <div className="flex items-center gap-2">
          {ServicesBtnRender.map((btn) => (
            <Button key={btn.id} className="flex items-center gap-2">
              {React.createElement(btn.icon)}
              {btn.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntryHeader;
