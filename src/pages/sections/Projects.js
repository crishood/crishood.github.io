import Card from "../../components/Card";
import crishood from "../../assets/img/crishood.png";
import dimelo from "../../assets/img/dimelo.png";
import trello from "../../assets/img/trello.png";

const Projects = () => {
  const projects = [
    {
      title: "CrisHood",
      description:
        "Ecommerce and blog to sell my beats licenses and share content for urban music producers.",
      picture: crishood,
      tags: ["WordPress", "Copywriting", "Content creation", "Beatmaking"],
      link: "https://crishood.com/",
    },
    {
      title: "Dímelo",
      description:
        "Dímelo is a social network to find beatmakers and songwriters in your city. Individual project for Make IT Real Bootcamp.",
      picture: dimelo,
      tags: [
        "React",
        "Redux Toolkit",
        "Mantine",
        "SASS",
        "Node",
        "Mongo",
        "Mongoose",
      ],
      link: "https://dimelo-ma-g.netlify.app/",
    },
    {
      title: "Trello",
      description:
        "Trello is an app to organize your tasks under the kanban system. Team project made for Make IT Real Bootcamp.",
      picture: trello,
      tags: [
        "React",
        "SASS",
        "Beautiful DnD",
        "Redux",
        "Node",
        "Mongo",
        "Mongoose",
        "Scrum",
        "Heroku",
      ],
      link: "https://trello.top/",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="cards-grid">
        {projects.map((project) => {
          return (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              picture={project.picture}
              tags={project.tags}
              link={project.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
