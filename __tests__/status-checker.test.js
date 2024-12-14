
import { isGameOver } from "../status-checker";
let board;
beforeEach(() => {
  board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
  ];
});


test('Player X wins on a row', () => {
  board = [
    ['X', 'X', 'X'],
    ['_', '_', '_'],
    ['O', 'O', '_']
  ];
  expect(isGameOver(board)).toBe(true); // X has won the game!
});
test('Player X wins on a row', () => {
  board = [
    ['X', 'X', 'X'],
    ['_', '_', '_'],
    ['O', 'O', '_']
  ];
  expect(isGameOver(board)).toBe(true); // X has won the game!
});

test('Player O wins on a column', () => {
  board = [
    ['X', '_', 'O'],
    ['X', '_', 'O'],
    ['X', '_', 'O']
  ];
  expect(isGameOver(board)).toBe(true); // O has won the game!
});

test('Player X wins on a diagonal', () => {
  board = [
    ['X', '_', 'O'],
    ['_', 'X', '_'],
    ['O', '_', 'X']
  ];
  expect(isGameOver(board)).toBe(true); // X has won the game!
});

test('Tie game', () => {
  board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
  ];
  expect(isGameOver(board)).toBe(true); // Game Over - It's a tie!
});

test('Game is not over yet', () => {
  board = [
    ['X', '_', 'O'],
    ['_', '_', '_'],
    ['O', '_', '_']
  ];
  expect(isGameOver(board)).toBe(false); // Game is still ongoing
});