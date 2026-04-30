export function Projects() {
  const projectData = [
    { year: "2017", title: "Shipment Planning SAP Automation" },
    { year: "2017", title: "Fleet Management System" },
    { year: "2018", title: "Route Optimization & Dispatcher Automation" },
    { year: "2019", title: "Delivery Execution Mobile App (Driver App)" },
    { year: "2019", title: "Warehouse Picking Mobile App (Picker App)" },
    { year: "2020", title: "Warehouse Checking App (Mobile App)" },
    { year: "2020", title: "Warehouse - Retail Picking & Packing System" },
    { year: "2021", title: "Distribution Center Head Mobile App" },
    { year: "2022", title: "Yard Management System (Firstmile - Midmile Logistics System)" },
    { year: "2023", title: "Internal E-Commerce Mobile App for Employee" },
    { year: "2024", title: "Mobile Checkpoint App" },
  ];

  return (
    <div>
      {projectData.map((project, index) => {
        const isNewYear = index > 0 && project.year !== projectData[index - 1].year;
        const isDuplicateYear = index > 0 && project.year === projectData[index - 1].year;

        return (
          <div 
            key={index} 
            className={`w-full flex flex-col md:flex-row space-x-0 md:space-x-2 ${isNewYear ? "mt-4" : ""}`}
          >
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {isDuplicateYear ? "" : project.year}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {project.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}