import { Projects } from "app/components/projects";

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Projects</h1>
      <p className="mb-4">Design, development, deployment, and go-live of various logistics and supply chain management applications across 80+ distribution centers. Top big projects are listed here.</p>
      <Projects />
    </section>
  )
}