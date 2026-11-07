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
                <span className="projectname">{name}</span>
                <span className="projectinfo">{about}</span>
            </button>
        </a>
    );
}

export default ProjectCard;
