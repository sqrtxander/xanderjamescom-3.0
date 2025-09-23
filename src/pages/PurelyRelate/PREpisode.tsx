import { Round1, Round2, Round3, Round4 } from "@/components/PurelyRelate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

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
	const { episodeID } = useParams();
	const apiURL = import.meta.env.VITE_API_URL;

	useEffect(() => {
		console.log("HELLO?");
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
					{episodeContent.relations && (
						<>
							<h2>Round 1: Relations</h2>
							{episodeContent.relations.map((question, i) => (
								<Round1
									key={i}
									glyph={question.glyph}
									clues={question.clues}
									relation={question.relation}
									explanation={question.explanation}
								/>
							))}
						</>
					)}
					{episodeContent.progressions && (
						<>
							<h2>Round 2: Progressions</h2>
							{episodeContent.progressions.map((question, i) => (
								<Round2
									key={i}
									glyph={question.glyph}
									clues={question.clues}
									relation={question.relation}
									explanation={question.explanation}
								/>
							))}
						</>
					)}
					{episodeContent.surfaces && (
						<>
							<h2>Round 3: Relating Surfaces</h2>
							{episodeContent.surfaces.map((question, i) => (
								<Round3
									key={i}
									glyph={question.glyph}
									groups={question.groups}
								/>
							))}
						</>
					)}
					{episodeContent.consonants && (
						<>
							<h2>Round 4: Consonants Only</h2>
							{episodeContent.consonants.map((question, i) => (
								<Round4
									key={i}
									relation={question.relation}
									clues={question.clues}
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
