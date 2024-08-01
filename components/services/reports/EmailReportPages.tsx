import React from "react";

const DailySplitReport = () => {
  return <div>Daily Split Report</div>;
};

const WeeklyRemittancesReports = () => {
  return <div>Weekly Remittances Reports</div>;
};

export default function EmailReportPages({ title }: { title: string }) {
  switch (title) {
    case "Daily Split Report":
      return <DailySplitReport />;
    case "Weekly Remittances Reports":
      return <WeeklyRemittancesReports />;
  }
}
