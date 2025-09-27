import { Round1, Round2, Round3, Round4 } from "@/components/PurelyRelate";
import { useState } from "react";
import { IconContext } from "react-icons";
import { LuEye, LuEyeClosed } from "react-icons/lu";

function PRExample() {
    const [flippedAll, setFlippedAll] = useState(false);
    const flipAll = () => setFlippedAll(!flippedAll)
	return (
		<div>
			<h1 id="overview">Overview and Examples</h1>
			<button className="ghostbutton flipallbutton" onClick={flipAll}>
				<IconContext.Provider
					value={{ style: { height: "2em", width: "2em" } }}
				>
					{flippedAll ? <LuEyeClosed /> : <LuEye />}
					<p style={{ padding: "1em" }}> Flip all </p>
					{flippedAll ? <LuEyeClosed /> : <LuEye />}
				</IconContext.Provider>
			</button>
			<h2>Round 1: Relations</h2>
			<ul style={{ listStyleType: "-" }}>
				<li>This round has six questions.</li>
				<li>Each question has four clues, revealed from left to right.</li>
				<li>The four clues are related in some way.</li>
				<li>Figure out what relates the four clues.</li>
				<li>Your score depends on how many clues you need.</li>
				<ul>
					<li>1 clue: 5 points,</li>
					<li>2 clues: 3 points,</li>
					<li>3 clues: 2 points,</li>
					<li>4 clues: 1 point.</li>
				</ul>
			</ul>
			<Round1
				glyph="O"
				clues={["Jade", "Mint", "Chartreuse", "Emerald"]}
				relation="Shades of green"
                flippedAll={flippedAll}
			/>

			<h2>Round 2: Progressions</h2>
			<ul style={{ listStyleType: "-" }}>
				<li>This round has six questions.</li>
				<li>
					Each question has three clues, revealed from left to right, and one
					answer.
				</li>
				<li>The three clues and the answer are related in some way.</li>
				<li>The three clues and the answer form a progression.</li>
				<li>Figure out what comes fourth in the progression.</li>
				<li>Your score depends on how many clues you need.</li>
				<ul>
					<li>1 clue: 5 points,</li>
					<li>2 clues: 3 points,</li>
					<li>3 clues: 2 points.</li>
				</ul>
			</ul>
			<Round2
				glyph="Z"
				clues={[
					"US Department of Defence building",
					"Honeycomb cell",
					"50p coin",
					"(e.g.) Stop sign",
				]}
				relation="Pentagon to octagon"
                flippedAll={flippedAll}
			/>

			<h2>Round 3: Relating Surfaces</h2>
			<ul style={{ listStyleType: "-" }}>
				<li>This round has two surfaces.</li>
				<li>Each surface has sixteen clues.</li>
				<li>
					The sixteen clues can be grouped into four related groups of four.
				</li>
				<li>Group the clues, then identify each groups relation.</li>
				<ul>
					<li>1 point per group found,</li>
					<li>1 point per relation identified,</li>
					<li>
						2 bonus points if you found every group and identified every
						relation.
					</li>
				</ul>
			</ul>
			<Round3
				glyph="J"
				groups={[
					{
						clues: ["Non", "Nei", "Nein", "Nee"],
						relation: "No in different languages",
					},
					{
						clues: ["Helium", "Neon", "Krypton", "Radon"],
						relation: "Noble gases",
					},
					{
						clues: ["Colonel", "Captain", "General", "Lieutenant"],
						relation: "Military ranks",
					},
					{
						clues: ["Scales", "Feathers", "Fur", "Skin"],
						relation: "Body coverings",
					},
				]}
                flippedAll={flippedAll}
			/>

			<h2>Round 4: Consonants Only</h2>
			<ul style={{ listStyleType: "-" }}>
				<li>This round has an undetermined number of sets of related clues.</li>
				<li>Each set of related clues has a relation given at the top.</li>
				<li>
					Each clue in each set only shows its consonants, and the spacing has
					been messed up.
				</li>
				<li>Figure out the original clue that fits the relation.</li>
				<ul>
					<li>+1 point for a correct answer,</li>
					<li>-1 point for an incorrect answer,</li>
					<li>0 points for abstaining.</li>
				</ul>
			</ul>
			<Round4
				clues={[
					{ clue: "FRNS TNCE", answer: "FOR INSTANCE" },
					{
						clue: "B YWY FL LSTR TN",
						answer: "BY WAY OF ILLUSTRATION",
					},
					{ clue: "CSN PNT", answer: "CASE IN POINT" },
					{ clue: "X MP LGRT", answer: "EXEMPLI GRATIA" },
				]}
				relation="For example"
                flippedAll={flippedAll}
			/>
		</div>
	);
}

export default PRExample;
