import { Flashcard } from './App';

const vimCommands: Flashcard[] = [
  // Basic Navigation
  { id: 1, parent: "Vim", category: "Navigation", command: "h", description: "Move cursor left" },
  { id: 2, parent: "Vim", category: "Navigation", command: "j", description: "Move cursor down" },
  { id: 3, parent: "Vim", category: "Navigation", command: "k", description: "Move cursor up" },
  { id: 4, parent: "Vim", category: "Navigation", command: "l", description: "Move cursor right" },
  { id: 5, parent: "Vim", category: "Navigation", command: "w", description: "Move to the next word" },
  { id: 6, parent: "Vim", category: "Navigation", command: "b", description: "Move to the beginning of the word" },
  { id: 7, parent: "Vim", category: "Navigation", command: "0", description: "Move to the beginning of the line" },
  { id: 8, parent: "Vim", category: "Navigation", command: "$", description: "Move to the end of the line" },
  { id: 9, parent: "Vim", category: "Navigation", command: "gg", description: "Move to the beginning of the file" },
  { id: 10, parent: "Vim", category: "Navigation", command: "G", description: "Move to the end of the file" },

  // Editing
  { id: 11, parent: "Vim", category: "Editing", command: "i", description: "Insert before the cursor" },
  { id: 12, parent: "Vim", category: "Editing", command: "a", description: "Append after the cursor" },
  { id: 13, parent: "Vim", category: "Editing", command: "o", description: "Open a new line below the current line" },
  { id: 14, parent: "Vim", category: "Editing", command: "O", description: "Open a new line above the current line" },
  { id: 15, parent: "Vim", category: "Editing", command: "x", description: "Delete character under the cursor" },
  { id: 16, parent: "Vim", category: "Editing", command: "dd", description: "Delete the current line" },
  { id: 17, parent: "Vim", category: "Editing", command: "yy", description: "Yank (copy) the current line" },
  { id: 18, parent: "Vim", category: "Editing", command: "p", description: "Paste after the cursor" },
  { id: 19, parent: "Vim", category: "Editing", command: "P", description: "Paste before the cursor" },
  { id: 20, parent: "Vim", category: "Editing", command: "r", description: "Replace a single character" },
  { id: 21, parent: "Vim", category: "Editing", command: "cw", description: "Change word" },

  // Searching
  { id: 22, parent: "Vim", category: "Searching", command: "/", description: "Search forward" },
  { id: 23, parent: "Vim", category: "Searching", command: "?", description: "Search backward" },
  { id: 24, parent: "Vim", category: "Searching", command: "n", description: "Repeat search forward" },
  { id: 25, parent: "Vim", category: "Searching", command: "N", description: "Repeat search backward" },

  // Visual Mode
  { id: 26, parent: "Vim", category: "Visual Mode", command: "v", description: "Enter visual mode (character)" },
  { id: 27, parent: "Vim", category: "Visual Mode", command: "V", description: "Enter visual mode (line)" },
  { id: 28, parent: "Vim", category: "Visual Mode", command: "Ctrl+v", description: "Enter visual mode (block)" },
  { id: 29, parent: "Vim", category: "Visual Mode", command: "d", description: "Delete selection" },
  { id: 30, parent: "Vim", category: "Visual Mode", command: "y", description: "Yank (copy) selection" },

  // Saving and Exiting
  { id: 31, parent: "Vim", category: "Saving and Exiting", command: ":w", description: "Save the file" },
  { id: 32, parent: "Vim", category: "Saving and Exiting", command: ":q", description: "Quit Vim" },
  { id: 33, parent: "Vim", category: "Saving and Exiting", command: ":wq", description: "Save and quit" },
  { id: 34, parent: "Vim", category: "Saving and Exiting", command: ":q!", description: "Quit without saving" },
];

export { vimCommands };

