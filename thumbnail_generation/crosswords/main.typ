#import "lib.typ": *

#let filePath = sys.inputs.i
#let crosswords = json(filePath)

#set page(margin: 0cm)
<<<<<<< Updated upstream
#set text(font: "Iosevka NFM")
=======
#set text(font: "Iosevka")
>>>>>>> Stashed changes

#for crossword in crosswords {
  set page(width: crossword.dimensions.cols * 1cm, height: crossword.dimensions.cols * 1cm)
  displayGrid(crossword)
  pagebreak(weak: true)
}
