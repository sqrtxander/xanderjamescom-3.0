import { useCallback, useEffect, useRef, useState } from "react";
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

class RelatingSurface {
    state: cell[];
    groupsFound: number = 0;
    static groupColors: string[] = [
        "var(--green)",
        "var(--yellow)",
        "var(--orange)",
        "var(--pink)",
    ];
    static defaultColor: string = "var(--blue)";

    constructor(groups: groups) {
        this.state = [];
        this.reset(groups);
    }

    reset(groups: groups) {
        let initState: cell[] = [];
        [...groups].map(
            (group, i) =>
                (initState = [
                    ...initState,
                    ...group.clues.map((clue) => ({
                        clue: clue,
                        groupId: i,
                        color: RelatingSurface.defaultColor,
                        disabled: false,
                        solved: false,
                        relation: group.relation,
                    })),
                ]),
        );
        shuffle(initState, 0);
        this.state = initState;
        this.groupsFound = 0;
    }

    solve() {
        const newState = [...this.state];
        while (this.groupsFound < 4) {
            const currGroup = newState[this.groupsFound * 4].groupId;
            const toSelect = [this.groupsFound * 4];
            for (let i = this.groupsFound * 4 + 1; i < newState.length; i++) {
                if (newState[i].groupId === currGroup) {
                    toSelect.push(i);
                }
            }
            toSelect.map((idx, i) => {
                const temp = newState.splice(idx, 1);
                temp[0].solved = true;
                temp[0].color = RelatingSurface.groupColors[this.groupsFound];
                newState.splice(i + 4 * this.groupsFound, 0, temp[0]);
            });
            this.groupsFound++;
        }
        this.state = newState;
    }

    colorI(i: number, color: string | null = null) {
        color = color || RelatingSurface.groupColors[this.groupsFound];
        this.state[i].color = color;
    }

    select(selected: number[]) {
        const isGroup = () => {
            const id = this.state[selected[0]].groupId;
            for (let i = 1; i < selected.length; i++) {
                if (this.state[selected[i]].groupId !== id) {
                    return false;
                }
            }
            return true;
        };

        const manageGroup = (selected: number[]) => {
            const sorted = [...selected];
            sorted.sort((a, b) => a - b);

            const newState = [...this.state];
            sorted.map((idx, i) => {
                const temp = newState.splice(idx, 1);
                temp[0].solved = true;
                temp[0].color = RelatingSurface.groupColors[this.groupsFound];
                newState.splice(i + 4 * this.groupsFound, 0, temp[0]);
            });
            this.state = newState;

            this.groupsFound++;
        };

        if (selected.length !== 4) {
            return;
        }

        // 4 Selected
        if (isGroup()) {
            manageGroup(selected);
            if (this.groupsFound == 3) {
                manageGroup([12, 13, 14, 15]);
            }
            return true;
        }

        // not a group
        this.state.forEach((cell) => {
            cell.disabled = true;
        });

        return false;
    }

    enableCells() {
        console.log("CALLED");
        this.state.forEach((cell, i) => {
            if (i >= this.groupsFound * 4) {
                cell.disabled = false;
                cell.color = RelatingSurface.defaultColor;
            }
        });
    }

    isSolved() {
        return this.groupsFound === 4;
    }
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
    const surfaceRef = useRef<RelatingSurface>(new RelatingSurface(groups));
    const [, setTick] = useState(0);
    const forceRerender = () => setTick((t) => t + 1);

    const resetSurface = useCallback(() => {
        surfaceRef.current.reset(groups);
        setSelected([]);
    }, [groups]);

    const solveSurface = useCallback(() => {
        surfaceRef.current.solve();
        setSelected([]);
    }, []);

    useEffect(() => {}, [surfaceRef]);

    useEffect(() => {
        if (flippedAll) {
            solveSurface();
        } else {
            resetSurface();
        }
    }, [flippedAll, solveSurface, resetSurface]);

    const onClick = (i: number) => {
        // deselecting
        if (selected.includes(i)) {
            setSelected(selected.filter((s) => s !== i));
            surfaceRef.current.colorI(i, RelatingSurface.defaultColor);
            return;
        }
        // selecting
        setSelected([...selected, i]);
        surfaceRef.current.colorI(i);
    };

    useEffect(() => {
        const isGroup = surfaceRef.current.select(selected);
        if (!isGroup && selected.length === 4) {
            setTimeout(() => {
                surfaceRef.current.enableCells();
                forceRerender();
            }, 500);
        }
        if (selected.length === 4) {
            setSelected([]);
        }
    }, [selected]);

    const renderSurface = () => {
        const renderedItems: React.ReactElement[] = [];
        surfaceRef.current.state.map((card, i) => {
            renderedItems.push(
                <SurfaceCard
                    key={i}
                    borderColor={card.color}
                    disabled={card.solved || card.disabled}
                    text={card.clue}
                    onClick={() => onClick(i)}
                />,
            );
            if (i % 4 === 3 && surfaceRef.current.isSolved()) {
                renderedItems.push(
                    <AnswerCard
                        key={i * 100}
                        front="Show relation"
                        back={surfaceRef.current.state[i].relation}
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
                    disabled={surfaceRef.current.isSolved()}
                >
                    Solve
                </button>
                <button
                    className="ghostborder"
                    onClick={resetSurface}
                    disabled={!surfaceRef.current.isSolved()}
                >
                    Reset
                </button>
            </div>
            <div
                className={`round3grid ${surfaceRef.current.isSolved() ? "solved" : ""}`}
            >
                {renderSurface()}
            </div>
        </div>
    );
}

export default Round3;
