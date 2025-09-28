import { Crossword as CrosswordComponent } from "@guardian/react-crossword";

// const Layout: CrosswordProps["Layout"] = ({
// 	Grid,
// 	Clues,
// 	Controls,
// 	SavedMessage,
// 	AnagramHelper,
// 	FocusedClue,
// }) => {
// 	return (
// 		<div>
// 			<AnagramHelper />
// 			<div>
// 				<FocusedClue />
// 				<Grid />
// 				<FocusedClue />
// 				<Controls />
// 				<SavedMessage />
// 			</div>
// 			<div>
// 				<Clues direction="across" />
// 				<Clues direction="down" />
// 			</div>
// 		</div>
// 	);
// };

function Crossword() {
	return (
		<CrosswordComponent
			data={{
				id: "crosswords/example/1",
				number: 1,
				name: "Example crossword No 1",
				creator: {
					name: "James",
					webUrl: "https://www.theguardian.com/profile/maskarade",
				},
				date: 1740149419743,
				webPublicationDate: 1740149419743,
				entries: [
					{
						id: "1-across",
						number: 1,
						humanNumber: "1",
						clue: "Toy on a string (2-2)",
						direction: "across",
						length: 4,
						group: ["1-across"],
						position: { x: 0, y: 0 },
						separatorLocations: {
							"-": [2],
						},
						solution: "YOYO",
					},
					{
						id: "2-across",
						number: 2,
						humanNumber: "2",
						clue: "Have a rest (3,4)",
						direction: "across",
						length: 7,
						group: ["2-across"],
						position: { x: 0, y: 2 },
						separatorLocations: {
							",": [3],
						},
						solution: "LIEDOWN",
					},
					{
						id: "1-down",
						number: 1,
						humanNumber: "1",
						clue: "Colour (6)",
						direction: "down",
						length: 6,
						group: ["1-down"],
						position: { x: 0, y: 0 },
						separatorLocations: {},
						solution: "YELLOW",
					},
					{
						id: "3-down",
						number: 3,
						humanNumber: "3",
						clue: "Bits and bobs (4,3,4)",
						direction: "down",
						length: 7,
						group: ["3-down", "4-down"],
						position: { x: 3, y: 0 },
						separatorLocations: {
							",": [4],
						},
						solution: "ODDSAND",
					},
					{
						id: "4-down",
						number: 4,
						humanNumber: "4",
						clue: "See 3 down",
						direction: "down",
						length: 4,
						group: ["3-down", "4-down"],
						position: {
							x: 6,
							y: 1,
						},
						separatorLocations: {},
						solution: "ENDS",
					},
				],
				solutionAvailable: true,
				dateSolutionAvailable: 1542326400000,
				dimensions: {
					cols: 7,
					rows: 7,
				},
				crosswordType: "quick",
				pdf: "https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf",
			}}
			gridBackgroundColor="var(--bg)"
			gridForegroundColor="var(--fg)"
			gridTextColor="var(--bg)"
			gridPrintBackgroundColor="#000000"
			textColor="var(--fg)"
			focusColor="var(--blue)"
			selectedTextColor="var(--bg)"
			buttonBackgroundColor="var(--pink)"
		/>
	);
}

export default Crossword;
