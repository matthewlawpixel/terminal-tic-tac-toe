import { makeMove } from "../move-maker";

let board;

beforeEach(() => {
    // Reset the board before each test
    board = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];
});

test('allows a valid move and updates the board', () => {
    const result = makeMove(board, '1,1', 'X');
    expect(result).toBe(true);
    expect(board[0][0]).toBe('X'); // Zero-based index for row and column
});

test('rejects a move outside the board boundaries', () => {
    expect(makeMove(board, '4,1', 'X')).toBe(false); // Row out of bounds
    expect(makeMove(board, '0,1', 'X')).toBe(false); // Row out of bounds
    expect(makeMove(board, '1,4', 'X')).toBe(false); // Column out of bounds
    expect(makeMove(board, '1,0', 'X')).toBe(false); // Column out of bounds
});

test('rejects a move in an occupied space', () => {
    board[0][0] = 'X'; // Pre-occupy a cell
    const result = makeMove(board, '1,1', 'O'); // Try to overwrite
    expect(result).toBe(false);
    expect(board[0][0]).toBe('X'); // Ensure the board didn't change
});

test('rejects invalid move formats', () => {
    expect(makeMove(board, 'invalid', 'X')).toBe(false); // Non-numeric input
    expect(makeMove(board, '1-1', 'X')).toBe(false);    // Wrong delimiter
    expect(makeMove(board, '1,', 'X')).toBe(false);     // Missing column
    expect(makeMove(board, ',1', 'X')).toBe(false);     // Missing row
});

test('allows moves on the edges of the board', () => {
    expect(makeMove(board, '1,3', 'O')).toBe(true); // Top-right corner
    expect(board[0][2]).toBe('O'); // Check board update

    expect(makeMove(board, '3,1', 'X')).toBe(true); // Bottom-left corner
    expect(board[2][0]).toBe('X'); // Check board update
});