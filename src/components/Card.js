import Tag from "./Tag";
const Card = ({ picture, title, description, tags, link }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img className="card-picture" src={picture} alt="" />
      </div>
      <div className="card-content">
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tags-container">
            {tags.map((item) => {
              return <Tag key={item} text={item} />;
            })}
          </div>
        </div>
        <button>
          <a href={link} target="_blank">
            Visit website
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
