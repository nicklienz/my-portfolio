export function Skills() {
  const skillData = [
    { category: "Language", name: "English (Full Professional Proficiency)" },
    { category: "Language", name: "Indonesian (Native Proficiency)" },
    { category: "Office Tools", name: "Ms. Office" }, 
    { category: "Office Tools", name: "Google Workspace" },
    { category: "Project Tools", name: "Jira" },    
    { category: "Project Tools", name: "Trello" },      
    { category: "Editing Tools", name: "Adobe Photoshop" },        
    { category: "Editing Tools", name: "Adobe Premiere Pro" },
    { category: "Editing Tools", name: "Adobe Illustrator" },    
    { category: "Editing Tools", name: "Adobe After Effects" },
    
    { category: "Tech Stack", name: ".NET" },
    { category: "Tech Stack", name: "React" },        
    { category: "Tech Stack", name: "Node.js" }, 
];

  return (
    <div className="flex flex-col">
      {skillData.map((skill, index) => {
        const isDuplicateCategory = index > 0 && skill.category === skillData[index - 1].category;

        return (
          <div key={index} className={`w-full flex flex-col md:flex-row space-x-0 md:space-x-2 ${!isDuplicateCategory && index > 0 ? "mt-4" : ""}`}>
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {isDuplicateCategory ? "" : skill.category}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {skill.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}