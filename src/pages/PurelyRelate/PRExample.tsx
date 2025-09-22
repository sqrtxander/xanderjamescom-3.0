import { Round1, Round2, Round3, Round4 } from "@/components/PurelyRelate";

function PRExample() {
	return (
		<div style={{ width: "80%" }}>
			<h1>Purely Relate</h1>

			<h2>Round 1: Relations</h2>
			<Round1
                glyph="O"
				clues={["Jade", "Mint", "Chartreuse", "Emerald"]}
				relation="Shades of green"
			/>

			<h2>Round 2: Progressions</h2>
			<Round2
                glyph="Z"
				clues={[
					"US Department of Defence building",
					"Honeycomb cell",
					"50p coin",
					"(e.g.) Stop sign",
				]}
				relation="Pentagon to octagon"
			/>

			<h2>Round 3: Relating Surfaces</h2>
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
			/>

			<h2>Round 4: Consonants Only</h2>
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
			/>
		</div>
	);
}

export default PRExample;
