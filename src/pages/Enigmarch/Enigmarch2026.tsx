import Puzzle from "@/components/Enigmarch/Puzzle";

function Enigmarch2026() {
    return (
        <>
            <h1>My EnigMarch 2026 Puzzles</h1>
            <Puzzle
                day="01"
                src="/assets/enigmarch/2026/day01.png"
                hints={[
                    "Is there anything unusual about the events in the calendar?",
                    "Each event in the calendar contains a hidden number",
                    "The names in the flavour text relate to the calendar in some way",
                    "Ruby relates to the ruby (red) events, and Indigo relates to the indigo events",
                    "The flavour text says Ruby picks and Indigo decides on locations. This can be applied to letters",
                    "There is precisely one event of each colour in each column",
                ]}
                solution="NEMESIA"
            />
            <Puzzle
                day="02"
                src="/assets/enigmarch/2026/day02.png"
                hints={[
                    "This puzzle uses a specific type of cipher that requires a key",
                    "The cipher is known as a Vigenère cipher",
                ]}
                solution="RAINBOW"
            />
            <Puzzle
                day="03"
                src="/assets/enigmarch/2026/day03.png"
                hints={[
                    "Consider each ring individually",
                    "What shape is formed when joining the points in each ring with straight lines?",
                    "The shapes are isosceles trianges. They look a bit like arrows!",
                    "Now that you can map each ring to a letter, look at the flavour text for the ordering",
                ]}
                solution="SLINGSHOT"
            />
            <Puzzle
                day="04"
                src="/assets/enigmarch/2026/day04.png"
                hints={[
                    "How many icons (including covered) are there on the bottom two rows?",
                    "Can you see a pattern within the visible icons on the bottom two rows?",
                    "Can you use this pattern to extrapolate the hidden icons on the bottom two rows?",
                ]}
                solution="ICON"
            />
            <Puzzle
                day="05"
                src="/assets/enigmarch/2026/day05.png"
                hints={[
                    "Each pair of numbers in the top string relates to a character in the bottom chunk of text in some way",
                    "This is a form of book cipher",
                    "Special characters and spaces are considered in the cipher",
                ]}
                solution="DIRECTORY"
            />
            <Puzzle
                day="06"
                src="/assets/enigmarch/2026/day06.png"
                hints={[
                    "The notes in the sheet music spell out names",
                    "The speakers next to 'Structure extending into the water' indicates a homophone",
                    "This puzzle's answer is not clued directly, instead it uses a clue phrase",
                ]}
                solution="LOVELACE"
            />
            <Puzzle
                day="07"
                src="/assets/enigmarch/2026/day07.png"
                hints={[
                    "Each playing card represents a letter in some way",
                    "Each player's hand represents a word or name that is related to their name",
                    "Like the other suits, the jokers spell out a word",
                    "There are five jokers in play, including one face down",
                    "Of the cards that can represent a letter, which aren't visible?",
                    "There is only one arrangement of the face-down cards that spells a valid word",
                ]}
                solution="MIDDLE"
            />
        </>
    );
}

export default Enigmarch2026;
