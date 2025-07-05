"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function CarDetails() {
  const [carDetails] = useState({
    carName: "Honda City",
    carNumber: "KA-01-AB-1234",
    services: [
      {
        id: "insurance",
        name: "Insurance",
        status: "Expired",
        date: "15 Jan 2024",
        type: "expiry",
      },
      {
        id: "fastag",
        name: "FastTag",
        status: "Active",
        date: "31 Dec 2025",
        type: "expiry",
      },
      {
        id: "challans",
        name: "Challans",
        status: "Pending",
        count: 2,
        date: "15 Feb 2024",
        type: "due",
      },
      {
        id: "pollution",
        name: "Pollution",
        status: "Expired",
        date: "20 Mar 2024",
        type: "expiry",
      },
    ],
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Expired":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Pending":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const getStatusText = (service) => {
    if (service.id === "challans") {
      return `${service.count} Pending`;
    }
    return service.status;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      {/* Car Image Section */}
      <div className="relative">
        <div className="w-full h-64 rounded-xl overflow-hidden">
          <img
            src="/images/carImg.jpg"
            alt="Car"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-4">
        {carDetails.services.map((service) => (
          <Card
            key={service.id}
            className="cursor-pointer hover:shadow-md transition-shadow"
          >
            <CardContent className="p-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="font-medium">{service.name}</div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div
                      className={`px-2 py-1 rounded-full w-fit text-xs font-medium ${getStatusColor(
                        service.status
                      )}`}
                    >
                      {getStatusText(service)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {service.date}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CarDetails;
