import Link from "next/link";
import React from "react";

export const ServiceCard = ({href, icon, title, description}) => {
  return (
    <Link href={href} class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-primary p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
      <img src={icon} alt={`${title} icon`} className="w-10 h-10 mb-4" />
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground font-light">{description}</p>
        </div>
      </div>
    </Link>
  );
};
