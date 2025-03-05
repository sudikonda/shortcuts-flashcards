import { Flashcard } from './App';

const vimCommands: Flashcard[] = [
  // Basic Navigation
  { id: 1, category: "Navigation", command: "h", description: "Move cursor left", parent: "Vim" },
  { id: 2, category: "Navigation", command: "j", description: "Move cursor down", parent: "Vim" },
  { id: 3, category: "Navigation", command: "k", description: "Move cursor up", parent: "Vim" },
  { id: 4, category: "Navigation", command: "l", description: "Move cursor right", parent: "Vim" },
  { id: 5, category: "Navigation", command: "w", description: "Move to the next word", parent: "Vim" },
  { id: 6, category: "Navigation", command: "b", description: "Move to the beginning of the word", parent: "Vim" },
  { id: 7, category: "Navigation", command: "0", description: "Move to the beginning of the line", parent: "Vim" },
  { id: 8, category: "Navigation", command: "$", description: "Move to the end of the line", parent: "Vim" },
  { id: 9, category: "Navigation", command: "gg", description: "Move to the beginning of the file", parent: "Vim" },
  { id: 10, category: "Navigation", command: "G", description: "Move to the end of the file", parent: "Vim" },

  // Editing
  { id: 11, category: "Editing", command: "i", description: "Insert before the cursor", parent: "Vim" },
  { id: 12, category: "Editing", command: "a", description: "Append after the cursor", parent: "Vim" },
  { id: 13, category: "Editing", command: "o", description: "Open a new line below the current line", parent: "Vim" },
  { id: 14, category: "Editing", command: "O", description: "Open a new line above the current line", parent: "Vim" },
  { id: 15, category: "Editing", command: "x", description: "Delete character under the cursor", parent: "Vim" },
  { id: 16, category: "Editing", command: "dd", description: "Delete the current line", parent: "Vim" },
  { id: 17, category: "Editing", command: "yy", description: "Yank (copy) the current line", parent: "Vim" },
  { id: 18, category: "Editing", command: "p", description: "Paste after the cursor", parent: "Vim" },
  { id: 19, category: "Editing", command: "P", description: "Paste before the cursor", parent: "Vim" },
  { id: 20, category: "Editing", command: "r", description: "Replace a single character", parent: "Vim" },
  { id: 21, category: "Editing", command: "cw", description: "Change word", parent: "Vim" },

  // Searching
  { id: 22, category: "Searching", command: "/", description: "Search forward", parent: "Vim" },
  { id: 23, category: "Searching", command: "?", description: "Search backward", parent: "Vim" },
  { id: 24, category: "Searching", command: "n", description: "Repeat search forward", parent: "Vim" },
  { id: 25, category: "Searching", command: "N", description: "Repeat search backward", parent: "Vim" },

  // Visual Mode
  { id: 26, category: "Visual Mode", command: "v", description: "Enter visual mode (character)", parent: "Vim" },
  { id: 27, category: "Visual Mode", command: "V", description: "Enter visual mode (line)", parent: "Vim" },
  { id: 28, category: "Visual Mode", command: "Ctrl+v", description: "Enter visual mode (block)", parent: "Vim" },
  { id: 29, category: "Visual Mode", command: "d", description: "Delete selection", parent: "Vim" },
  { id: 30, category: "Visual Mode", command: "y", description: "Yank (copy) selection", parent: "Vim" },

  // Saving and Exiting
  { id: 31, category: "Saving and Exiting", command: ":w", description: "Save the file", parent: "Vim" },
  { id: 32, category: "Saving and Exiting", command: ":q", description: "Quit Vim", parent: "Vim" },
  { id: 33, category: "Saving and Exiting", command: ":wq", description: "Save and quit", parent: "Vim" },
  { id: 34, category: "Saving and Exiting", command: ":q!", description: "Quit without saving", parent: "Vim" },
];

export { vimCommands };

