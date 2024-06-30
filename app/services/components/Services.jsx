import { pageData } from "../../data";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {Object.entries(pageData).map(([key, data]) => {
          if (key === 'home') return null;
          return (
            <ServiceCard
              key={key}
              href={`/services/${key}`}
              icon={data.icon}
              title={data.heroTitle}
              description={data.shortDescription}
            />
          );
        })}
      </div>
  );
};
