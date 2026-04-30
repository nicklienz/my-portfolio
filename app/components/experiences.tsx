export function Experiences() {
  const projectData = [
    { year: "2015", title: "Outbound Transport Controller", office:"Wings" },
    { year: "2017", title: "Outbound Transport Project Senior", office:"Wings" },
    { year: "2019", title: "Logistics Solution Project Head", office:"Wings" },
    { year: "2022", title: "Logistics Solution Senior Head", office:"Wings" },
    { year: "2024", title: "Kantin Rasa Keluarga", office:"Owner" }  
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
            <p className="text-neutral-600 dark:text-neutral-400 w-[60px] tabular-nums">
              {isDuplicateYear ? "" : project.year}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {project.title}
            </p>
            <p className="px-4 text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {project.office}
            </p>
          </div>
        );
      })}
    </div>
  );
}