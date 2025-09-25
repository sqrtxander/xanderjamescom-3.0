import { Round1, Round2, Round3, Round4 } from "@/components/PurelyRelate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound/NotFound";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { IconContext } from "react-icons";

type glyph = "O" | "L" | "I" | "T" | "J" | "Z";
type relation = {
	glyph: glyph;
	clues: [string, string, string, string];
	relation: string;
	explanation?: string;
};

type progression = relation;

type surfaceGroup = {
	clues: [string, string, string, string];
	relation: string;
};

type surface = {
	glyph: glyph;
	groups: [surfaceGroup, surfaceGroup, surfaceGroup, surfaceGroup];
};

type consonant = {
	clues: { answer: string; clue: string }[];
	relation: string;
};

type episodeContent = {
	title: string;
	relations?: relation[];
	progressions?: progression[];
	surfaces?: surface[];
	consonants?: consonant[];
};

function PREpisode() {
	const [episodeContent, setEpisodeContent] = useState<episodeContent>({
		title: "",
	});
	const [loading, setLoading] = useState(true);
	const [errorred, setErrored] = useState(false);
	const [flippedAll, setFlippedAll] = useState(false);
	const { episodeID } = useParams();
	const apiURL = import.meta.env.VITE_API_URL;

	const flipAll = () => setFlippedAll(!flippedAll);

	useEffect(() => {
		console.log(flippedAll);
	}, [flippedAll]);

	useEffect(() => {
		const fetchDataAndSetTitle = (episodeIDInt: number) => {
			fetch(`${apiURL}/purelyrelate/${episodeIDInt}`)
				.then((resp) => {
					if (!resp.ok) {
						throw new Error(`Episode ${episodeID} not found`);
					}
					return resp.json();
				})
				.then((data) => {
					setEpisodeContent(data);
					setLoading(false);
				})
				.catch((err) => {
					console.error(err);
					setErrored(true);
				});
		};
		if (
			episodeID === undefined ||
			!/^\d+$/.test(episodeID) ||
			episodeID.length !== 2
		) {
			setErrored(true);
		} else {
			fetchDataAndSetTitle(parseInt(episodeID, 10));
		}
	}, []);

	return (
		<>
			{errorred ? (
				<NotFound />
			) : loading ? (
				<p>LOADING...</p>
			) : (
				<div className="vstack wide">
					<h1>Purely Relate {episodeContent.title}</h1>
					<button className="ghostbutton flipallbutton" onClick={flipAll}>
						<IconContext.Provider
							value={{ style: { height: "2em", width: "2em" } }}
						>
							{flippedAll ? <LuEyeClosed /> : <LuEye />}
							<p style={{ padding: "1em" }}> Flip all </p>
							{flippedAll ? <LuEyeClosed /> : <LuEye />}
						</IconContext.Provider>
					</button>
					<h2>Jump to Section</h2>
					<ul>
						{episodeContent.relations &&
							episodeContent.relations.length > 0 && (
								<li>
									<a href="#round1">Round 1: Relations</a>
								</li>
							)}
						{episodeContent.progressions &&
							episodeContent.progressions.length > 0 && (
								<li>
									<a href="#round2">Round 2: Progressions</a>
								</li>
							)}
						{episodeContent.surfaces && episodeContent.surfaces.length > 0 && (
							<li>
								<a href="#round3">Round 3: Relating Surfaces</a>
							</li>
						)}
						{episodeContent.consonants &&
							episodeContent.consonants.length > 0 && (
								<li>
									<a href="#round4">Round 4: Consonants Only</a>
								</li>
							)}
					</ul>
					{episodeContent.relations && episodeContent.relations.length > 0 && (
						<>
							<h2 id="round1">Round 1: Relations</h2>
							{episodeContent.relations.map((question, i) => (
								<Round1
									key={i}
									glyph={question.glyph}
									clues={question.clues}
									relation={question.relation}
									explanation={question.explanation}
									flippedAll={flippedAll}
								/>
							))}
						</>
					)}
					{episodeContent.progressions &&
						episodeContent.progressions.length > 0 && (
							<>
								<h2 id="round2">Round 2: Progressions</h2>
								{episodeContent.progressions.map((question, i) => (
									<Round2
										key={i}
										glyph={question.glyph}
										clues={question.clues}
										relation={question.relation}
										explanation={question.explanation}
										flippedAll={flippedAll}
									/>
								))}
							</>
						)}
					{episodeContent.surfaces && episodeContent.surfaces.length > 0 && (
						<>
							<h2 id="round3">Round 3: Relating Surfaces</h2>
							{episodeContent.surfaces.map((question, i) => (
								<Round3
									key={i}
									glyph={question.glyph}
									groups={question.groups}
									flippedAll={flippedAll}
								/>
							))}
						</>
					)}
					{episodeContent.consonants &&
						episodeContent.consonants.length > 0 && (
							<>
								<h2 id="round4">Round 4: Consonants Only</h2>
								{episodeContent.consonants.map((question, i) => (
									<Round4
										key={i}
										relation={question.relation}
										clues={question.clues}
										flippedAll={flippedAll}
									/>
								))}
							</>
						)}
				</div>
			)}
		</>
	);
}

export default PREpisode;
