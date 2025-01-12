"use client";

import { Alert } from "@/components/Alert";
import React from "react";

export default function Test() {
  return (
    <div className="flex flex-col gap-3 bg-white gap-lg w-full h-screen truncate">
      <Alert
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />

      <Alert
        hierarchy="secondary"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />

      <Alert
        hierarchy="tertiary"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />

      <Alert
        hierarchy="primary"
        color="error"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />

      <Alert
        hierarchy="secondary"
        color="error"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
      <Alert
        hierarchy="tertiary"
        color="error"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
      <Alert
        hierarchy="primary"
        color="warning"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
      <Alert
        hierarchy="secondary"
        color="warning"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
      <Alert
        hierarchy="tertiary"
        color="warning"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
      <Alert
        hierarchy="primary"
        color="gray"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
      <Alert
        hierarchy="secondary"
        color="gray"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
      <Alert
        hierarchy="tertiary"
        color="gray"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
      <Alert
        hierarchy="primary"
        color="success"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
      <Alert
        hierarchy="secondary"
        color="success"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
      <Alert
        hierarchy="tertiary"
        color="success"
        title="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
        description="Lorem ipsum dolor sit amet consectetur. Sed quis imperdiet lorem nunc tellus est."
      />
    </div>
  ); 
}
