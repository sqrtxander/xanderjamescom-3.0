import { useEffect, useState } from "react";
import SurfaceCard from "./SurfaceCard";
import AnswerCard from "./AnswerCard";
import Glyph from "./Glyph";

type group = {
	clues: [string, string, string, string];
	relation: string;
};

type groups = Array<group>;

type cell = {
	clue: string;
	groupId: number;
	color: string;
	disabled: boolean;
	solved: boolean;
	relation: string;
};

function initSurface(groups: groups) {
	let initState: cell[] = [];
	[...groups].map(
		(group, i) =>
			(initState = [
				...initState,
				...group.clues.map((clue) => ({
					clue: clue,
					groupId: i,
					color: "var(--blue)",
					disabled: false,
					solved: false,
					relation: group.relation,
				})),
			]),
	);
	shuffle(initState, 0);
	return initState;
}

function shuffle(state: cell[], start: number) {
	for (let i = start; i < state.length; i++) {
		const j = Math.floor(Math.random() * (state.length - start)) + start;
		const temp = state[i];
		state[i] = state[j];
		state[j] = temp;
	}
}

type round3Props = {
	glyph: "O" | "J" | "I" | "T" | "L" | "Z";
	groups: groups;
	flippedAll: boolean;
};

function Round3({ glyph, groups, flippedAll }: round3Props) {
	const [selected, setSelected] = useState<number[]>([]);
	const [groupsFound, setGroupsFound] = useState(0);
	const [surface, setSurface] = useState(initSurface(groups));
	const groupColors = [
		"var(--green)",
		"var(--yellow)",
		"var(--orange)",
		"var(--pink)",
	];
	const defaultColor = "var(--blue)";

	useEffect(() => {
		if (flippedAll) {
			solveSurface();
		} else {
			resetSurface();
		}
	}, [flippedAll]);

	const resetSurface = () => {
		setGroupsFound(0);
		setSelected([]);
		setSurface(initSurface(groups));
	};

	const solveSurface = () => {
		let found = groupsFound;
		let newSurface = [...surface];
		while (found < 4) {
			const currGroup = newSurface[found * 4].groupId;
			let toSelect = [found * 4];
			for (let i = found * 4 + 1; i < newSurface.length; i++) {
				if (newSurface[i].groupId === currGroup) {
					toSelect.push(i);
				}
			}
			toSelect.map((idx, i) => {
				let temp = newSurface.splice(idx, 1);
				temp[0].solved = true;
				temp[0].color = groupColors[found];
				newSurface.splice(i + 4 * found, 0, temp[0]);
			});
			found++;
		}
		setSurface(newSurface);
		setGroupsFound(found);
		setSelected([]);
	};

	const onClick = (i: number) => {
		// deselecting
		if (selected.includes(i)) {
			setSelected(selected.filter((s) => s !== i));
			setSurface(
				surface.map((f, j) => (j === i ? { ...f, color: defaultColor } : f)),
			);
			return;
		}
		// selecting
		setSelected([...selected, i]);
		setSurface(
			surface.map((f, j) =>
				j === i ? { ...f, color: groupColors[groupsFound] } : f,
			),
		);
	};

	const isGroup = () => {
		let id = surface[selected[0]].groupId;
		for (let i = 1; i < selected.length; i++) {
			if (surface[selected[i]].groupId !== id) {
				return false;
			}
		}
		return true;
	};

	const manageGroup = () => {
		let sorted = [...selected];
		sorted.sort((a, b) => a - b);

		let newSurface = [...surface];
		sorted.map((idx, i) => {
			let temp = newSurface.splice(idx, 1);
			temp[0].solved = true;
			temp[0].color = groupColors[groupsFound];
			newSurface.splice(i + 4 * groupsFound, 0, temp[0]);
		});
		setSurface(newSurface);

		setGroupsFound(groupsFound + 1);
		setSelected([]);
	};

	useEffect(() => {
		if (selected.length !== 4) {
			return;
		}

		// 4 Selected
		if (isGroup()) {
			manageGroup();
			return;
		}

		// not a group
		setSurface(
			surface.map((w) => {
				return { ...w, disabled: true };
			}),
		);
		setTimeout(() => {
			setSurface(
				surface.map((w, j) =>
					selected.includes(j)
						? { ...w, disabled: false, color: defaultColor }
						: w,
				),
			);
			setSelected([]);
		}, 500);
	}, [selected]);

	useEffect(() => {
		if (groupsFound === 3) {
			setSelected([12, 13, 14, 15]);
		}
	}, [groupsFound]);

	const renderSurface = () => {
		const renderedItems: any = []; //TODO change any
		surface.map((card, i) => {
			renderedItems.push(
				<SurfaceCard
					key={i}
					borderColor={card.color}
					disabled={card.solved || card.disabled}
					text={card.clue}
					onClick={() => onClick(i)}
				/>,
			);
			if (i % 4 === 3 && groupsFound === 4) {
				renderedItems.push(
					<AnswerCard
						key={i * 100}
						front="Show relation"
						back={surface[i].relation}
						className="r3"
						borderColor="var(--purple)"
						flippedAll={flippedAll}
					/>,
				);
			}
		});
		return renderedItems;
	};

	return (
		<div className="round3">
			<Glyph glyphID={glyph} />
			<div className="round3buttons">
				<button
					className="ghostborder"
					onClick={solveSurface}
					disabled={groupsFound === 4}
				>
					Solve
				</button>
				<button
					className="ghostborder"
					onClick={resetSurface}
					disabled={groupsFound !== 4}
				>
					Reset
				</button>
			</div>
			<div className={`round3grid ${groupsFound === 4 ? "solved" : ""}`}>
				{renderSurface()}
			</div>
		</div>
	);
}

export default Round3;
