import { printBoard, checkIfNoMovesLeft } from "../board-printer"

describe("printBoard", () => {
  test("should print the formatted tic-tac-toe board correctly", () => {
    const board = [
      ["X", "_", "_"],
      ["_", "X", "_"],
      ["O", "O", "X"],
    ];
    const expectedOutput =
      "  X  |     |     \n=================\n     |  X  |     \n=================\n  O  |  O  |  X  \n";

    expect(printBoard(board)).toBe(expectedOutput);
  });

  test("should return an empty board when provided with an empty board", () => {
    const board = [];
    const expectedOutput =
      "   |     |  \n============= \n   |     |  \n============= \n   |     |  ";

    expect(printBoard(board)).toBe(expectedOutput);
  });

  test("should handle a partially filled board", () => {
    const board = [
      ["X", "_", "O"],
      ["_", "_", "_"],
      ["X", "O", "X"],
    ];
    const expectedOutput =
      "  X  |     |  O  \n=================\n     |     |     \n=================\n  X  |  O  |  X  \n";

    expect(printBoard(board)).toBe(expectedOutput);
  });
});

describe("checkIfNoMovesLeft", () => {
  test("should return true if no moves are left", () => {
    const board = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["X", "O", "X"],
    ];
    expect(checkIfNoMovesLeft(board)).toBe(true);
  });

  test("should return false if there are moves left", () => {
    const board = [
      ["X", "_", "X"],
      ["O", "X", "O"],
      ["X", "O", "_"],
    ];
    expect(checkIfNoMovesLeft(board)).toBe(false);
  });

  test("should throw an error if the board is not an array of arrays", () => {
    const invalidBoard1 = "invalid format";
    const invalidBoard2 = ["X", "O", "_"]; // Not an array of arrays

    expect(() => checkIfNoMovesLeft(invalidBoard1)).toThrow(
      "Invalid board format. Expected an array of arrays."
    );
    expect(() => checkIfNoMovesLeft(invalidBoard2)).toThrow(
      "Invalid board format. Expected an array of arrays."
    );
  });
});
