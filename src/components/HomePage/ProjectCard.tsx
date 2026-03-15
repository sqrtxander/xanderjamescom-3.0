import "./ProjectCard.css";

function ProjectCard({
    name,
    href,
    about,
}: {
    name: string;
    href: string;
    about: string;
}) {
    return (
        <a className="projectcard" href={href}>
            <button className="ghostbutton projectbutton">
                <h2 className="projectheading">{name}</h2>
                <p>{about}</p>
            </button>
        </a>
    );
}

export default ProjectCard;
