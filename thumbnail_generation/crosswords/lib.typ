#let displayGrid(crossword, darkFill: black) = {
  let rows = crossword.dimensions.rows
  let cols = crossword.dimensions.cols
  let dark = ((true,) * cols,) * rows
  let cellNumbers = ("",) * rows * cols

  for clue in crossword.entries {
    let x = clue.position.x
    let y = clue.position.y
    cellNumbers.at(y * cols + x) = clue.humanNumber
    if clue.direction == "across" {
      for dx in range(clue.length) {
        dark.at(y).at(x + dx) = false
      }
    } else if clue.direction == "down" {
      for dy in range(clue.length) {
        dark.at(y + dy).at(x) = false
      }
    }
  }
  show grid.cell: set text(size: 9pt)
  grid(
    columns: (1fr,) * cols,
    rows: (1fr,) * rows,
    align: top + left,
    inset: 2pt,
    stroke: 1pt + black,
    fill: (x, y) => if dark.at(y).at(x) { darkFill },
    ..cellNumbers
  )
}

#let displayGridSolution(crossword, darkFill: black) = {
  let rows = crossword.dimensions.rows
  let cols = crossword.dimensions.cols
  let dark = ((true,) * cols,) * rows
  let cellAnswers = ("",) * rows * cols

  for clue in crossword.entries {
    let x = clue.position.x
    let y = clue.position.y
    if clue.direction == "across" {
      for dx in range(clue.length) {
        dark.at(y).at(x + dx) = false
        cellAnswers.at(y * rows + x + dx) = clue.solution.at(dx)
      }
    } else if clue.direction == "down" {
      for dy in range(clue.length) {
        dark.at(y + dy).at(x) = false
        cellAnswers.at((y + dy) * rows + x) = clue.solution.at(dy)
      }
    }
  }
  show grid.cell: set text(size: 18pt, weight: "bold")
  grid(
    columns: (1fr,) * cols,
    rows: (1fr,) * rows,
    align: center + horizon,
    inset: 2pt,
    stroke: 1pt + black,
    fill: (x, y) => if dark.at(y).at(x) { darkFill },
    ..cellAnswers
  )
}

#let displayClues(crossword) = {
  let clues = crossword.entries
  let across = clues.filter(c => c.direction == "across")
  let down = clues.filter(c => c.direction == "down")

  set text(size: 11pt)
  set enum()

  [*Across*]
  v(-1em)
  line(length: 100%)
  across.sorted(key: c => c.number).map(c => enum.item(c.number, c.clue)).join()
  [*Down*]
  v(-1em)
  line(length: 100%)
  down.sorted(key: c => c.number).map(c => enum.item(c.number, c.clue)).join()
}
