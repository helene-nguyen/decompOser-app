const app = {
  row: 4,
  col: 6,
  start: {
    x: 0,
    y: 0
  },
  end: {
    x: 5,
    y: 3
  },

  init() {
    console.log("init");

    // TODO
    app.drawBoard();

    // Event listeners - TODO
  },
  drawBoard() {
    const targetBoardElement = document.getElementById("board");

    for (let indexRow = 0; indexRow < app.row; indexRow++) {
      let cellRow = document.createElement("div");
      cellRow.classList.add("cellRow");
      cellRow.setAttribute("id", `row${indexRow + 1}`);
      targetBoardElement.appendChild(cellRow);

      for (let indexCell = 0; indexCell < app.col; indexCell++) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellRow.appendChild(cellElement);

        //~create coord
        let x = indexCell;
        let y = indexRow;

        //~place elements
        if (app.start.x === x && app.start.y === y) {
          cellElement.classList.add("cellStart");
        }
        if (app.end.x === x && app.end.y === y) {
          cellElement.classList.add("cellEnd");
        }
      }
    }
  },

  handleLaunchScriptButton: function() {
    // TODO

    // TODO : get all lines as an array

    window.setTimeout(function() {
      app.codeLineLoop(codeLines, 0);
    }, 2000);
  },

  codeLineLoop(codeLines, index) {
    // Getting currentLine
    var currentLine = codeLines[index];
    console.log(currentLine);

    // Increment
    index++;

    // if still a line to interpret
    if (index < codeLines.length) {
      // Recall same method (=> make a loop)
      window.setTimeout(function() {
        app.codeLineLoop(codeLines, index);
      }, 1000);
    } else {
      window.setTimeout(function() {
        app.checkSuccess();
      }, 1000);
    }
  },

  checkSuccess() {
    // TODO display if the game is won or not
  }
};

app.init();
