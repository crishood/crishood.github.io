import Card from "../../components/Card";
import crishood from "../../assets/img/crishood.png";
import dimelo from "../../assets/img/dimelo.png";
import trello from "../../assets/img/trello.png";

const Projects = () => {
  const projects = [
    {
      title: "CrisHood",
      description:
        "This is my longlife project. Some time ago it was just an static website describing my music production profile but, I decided to turn it into an Ecommerce and blog to sell my beats licenses and share content for urban music producers. I designed all the branding .",
      picture: crishood,
      tags: [
        "WordPress",
        "Copywriting",
        "Content creation",
        "Beatmaking",
        "Design",
        "Branding",
      ],
      link: "https://crishood.com/",
    },
    {
      title: "Dímelo",
      description:
        "Dímelo is a social network to find beatmakers and songwriters in your city. I made this fullstack application as individual project for Make IT Real Bootcamp. I combined my passion for code and music in one place.",
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
        "Trello is an app to organize your tasks under the kanban system. I developed this app with two good friends of Make IT Real (Daniela and Johan).",
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
