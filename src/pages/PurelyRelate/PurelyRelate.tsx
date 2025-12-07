import { Outlet } from "react-router-dom";
import PRExample from "./PRExample";
import { useEffect, useState } from "react";
import "./PurelyRelate.css";

type episodes = { id: number; title: string }[];
function PurelyRelate() {
  const [episodes, setEpisodes] = useState<episodes>([]);
  const [errored, setErrored] = useState(false);
  const [loading, setLoading] = useState(true);
  const apiURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = () => {
      fetch(`${apiURL}/purelyrelate/episodes`)
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Error while accessing episodes");
          }
          return resp.json();
        })
        .then((data) => {
          setEpisodes(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setErrored(true);
        });
    };
    fetchData();
  }, [apiURL]);

  return (
    <>
      {window.location.pathname.replace(/\/$/gim, "") === "/purelyrelate" ? (
        <div className="vstack wide">
          <h1>Purely Relate</h1>
          <p>
            Here you will find questions I have written based on the BBC Quiz
            show Only Connect.{" "}
            <a href="#overview">Jump to Overview and Examples</a>.
          </p>
          <h2>Episodes</h2>
          {errored ? (
            <div className="hcenter">
              <p>An error occurred while fetching episodes</p>
            </div>
          ) : loading ? (
            <div className="hcenter">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="episodebuttonsgrid">
              {episodes.map((ep, i) => (
                <a
                  key={i}
                  href={`purelyrelate/episode/${ep.id.toString().padStart(2, "0")}/`}
                  className="episodebutton"
                >
                  <button className="ghostbutton episodebutton">
                    {ep.title}
                  </button>
                </a>
              ))}
            </div>
          )}
          <PRExample />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default PurelyRelate;
