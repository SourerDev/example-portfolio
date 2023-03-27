//components
import Project from "../../components/cards/Project";
import HTitle from "../../components/headers/HTitle";

import {PROJECTS as projects} from "../../information/english"

export default function Projects() {
  return (
    <div className="bg-main text-textOne min-h-screen px-6" id="projects">
      <HTitle title="Projects" sub="Main Projects"/>
      <div className="grid md:grid-cols-2 gap-8 py-6">
        {projects.map((project,i) => <Project key={i} image={project.URLs[0]} description={project.shortDescription} title={project.name} gitLink={project.gitLink}/>)}
      </div>
    </div>
  );
}
