import { Flashcard } from './App';

const vimiumCommands: Flashcard[] = [
  // Navigating the page
  { id: 35, category: "Navigating the page", command: "j", description: "Scroll down", parent: "Vimium" },
  { id: 36, category: "Navigating the page", command: "k", description: "Scroll up", parent: "Vimium" },
  { id: 37, category: "Navigating the page", command: "gg", description: "Scroll to the top of the page", parent: "Vimium" },
  { id: 38, category: "Navigating the page", command: "G", description: "Scroll to the bottom of the page", parent: "Vimium" },
  { id: 39, category: "Navigating the page", command: "j", description: "Scroll a half page down", parent: "Vimium" },
  { id: 40, category: "Navigating the page", command: "k", description: "Scroll a half page up", parent: "Vimium" },
  { id: 41, category: "Navigating the page", command: "h", description: "Scroll left", parent: "Vimium" },
  { id: 42, category: "Navigating the page", command: "l", description: "Scroll right", parent: "Vimium" },
  { id: 43, category: "Navigating the page", command: "zH", description: "Scroll all the way to the left", parent: "Vimium" },
  { id: 44, category: "Navigating the page", command: "zL", description: "Scroll all the way to the right", parent: "Vimium" },
  { id: 45, category: "Navigating the page", command: "r", description: "Reload the page", parent: "Vimium" },
  { id: 46, category: "Navigating the page", command: "yy", description: "Copy the current URL to the clipboard", parent: "Vimium" },
  { id: 47, category: "Navigating the page", command: "p", description: "Open the clipboard's URL in the current tab", parent: "Vimium" },
  { id: 48, category: "Navigating the page", command: "P", description: "Open the clipboard's URL in a new tab", parent: "Vimium" },
  { id: 49, category: "Navigating the page", command: "gu", description: "Go up the URL hierarchy", parent: "Vimium" },
  { id: 50, category: "Navigating the page", command: "gU", description: "Go to root of current URL hierarchy", parent: "Vimium" },
  { id: 51, category: "Navigating the page", command: "i", description: "Enter insert mode", parent: "Vimium" },
  { id: 52, category: "Navigating the page", command: "v", description: "Enter visual mode", parent: "Vimium" },
  { id: 53, category: "Navigating the page", command: "V", description: "Enter visual line mode", parent: "Vimium" },
  { id: 54, category: "Navigating the page", command: "gi", description: "Focus the first text input on the page", parent: "Vimium" },
  { id: 55, category: "Navigating the page", command: "f", description: "Open a link in the current tab", parent: "Vimium" },
  { id: 56, category: "Navigating the page", command: "F", description: "Open a link in a new tab", parent: "Vimium" },
  { id: 57, category: "Navigating the page", command: "mf", description: "Open multiple links in a new tab", parent: "Vimium" },
  { id: 58, category: "Navigating the page", command: "yf", description: "Copy a link URL to the clipboard", parent: "Vimium" },
  { id: 59, category: "Navigating the page", command: "[[", description: "Follow the link labeled previous or <" , parent: "Vimium" },
  { id: 60, category: "Navigating the page", command: "]]", description: "Follow the link labeled next or >" , parent: "Vimium" },
  { id: 61, category: "Navigating the page", command: "gf", description: "Select the next frame on the page" , parent: "Vimium" },
  { id: 62, category: "Navigating the page", command: "gF", description: "Select the page's main/top frame" , parent: "Vimium" },
  { id: 63, category: "Navigating the page", command: "`", description: "Go to a mark" , parent: "Vimium" },

  // Using the vomnibar
  { id: 64, category: "Using the vomnibar", command: "o", description: "Open URL, bookmark or history entry", parent: "Vimium" },
  { id: 65, category: "Using the vomnibar", command: "O", description: "Open URL, bookmark or history entry in a new tab", parent: "Vimium" },
  { id: 66, category: "Using the vomnibar", command: "b", description: "Open a bookmark", parent: "Vimium" },
  { id: 67, category: "Using the vomnibar", command: "B", description: "Open a bookmark in a new tab", parent: "Vimium" },
  { id: 68, category: "Using the vomnibar", command: "T", description: "Search through your open tabs", parent: "Vimium" },
  { id: 69, category: "Using the vomnibar", command: "ge", description: "Edit the current URL", parent: "Vimium" },
  { id: 70, category: "Using the vomnibar", command: "gE", description: "Edit the current URL and open in a new tab", parent: "Vimium" },

  // Using find
  { id: 71, category: "Using find", command: "/", description: "Enter find mode", parent: "Vimium" },
  { id: 72, category: "Using find", command: "n", description: "Cycle forward to the next find match", parent: "Vimium" },
  { id: 73, category: "Using find", command: "N", description: "Cycle backward to the previous find match", parent: "Vimium" },

  // Navigating history
  { id: 74, category: "Navigating history", command: "H", description: "Go back in history", parent: "Vimium" },
  { id: 75, category: "Navigating history", command: "L", description: "Go forward in history", parent: "Vimium" },

  // Manipulating tabs
  { id: 76, category: "Manipulating tabs", command: "t", description: "Create new tab", parent: "Vimium" },
  { id: 77, category: "Manipulating tabs", command: "J", description: "Go one tab left", parent: "Vimium" },
  { id: 78, category: "Manipulating tabs", command: "K", description: "Go one tab right", parent: "Vimium" },
  { id: 79, category: "Manipulating tabs", command: "zl", description: "Go to previously-visited tab", parent: "Vimium" },
  { id: 80, category: "Manipulating tabs", command: "g0", description: "Go to the first tab", parent: "Vimium" },
  { id: 81, category: "Manipulating tabs", command: "g$", description: "Go to the last tab", parent: "Vimium" },
  { id: 82, category: "Manipulating tabs", command: "yt", description: "Duplicate current tab", parent: "Vimium" },
  { id: 83, category: "Manipulating tabs", command: "<a-p>", description: "Pin or unpin current tab", parent: "Vimium" },
  { id: 84, category: "Manipulating tabs", command: "M", description: "Mute or unmute current tab", parent: "Vimium" },
  { id: 85, category: "Manipulating tabs", command: "x", description: "Close current tab", parent: "Vimium" },
  { id: 86, category: "Manipulating tabs", command: "X", description: "Restore closed tab", parent: "Vimium" },
  { id: 87, category: "Manipulating tabs", command: "w", description: "Move tab to new window", parent: "Vimium" },
  { id: 88, category: "Manipulating tabs", command: "gL", description: "Close tabs on the left", parent: "Vimium" },
  { id: 89, category: "Manipulating tabs", command: "gR", description: "Close tabs on the right", parent: "Vimium" },
  { id: 90, category: "Manipulating tabs", command: "gc", description: "Close all other tabs", parent: "Vimium" },
  { id: 91, category: "Manipulating tabs", command: "<<", description: "Move tab to the left", parent: "Vimium" },
  { id: 92, category: "Manipulating tabs", command: ">>", description: "Move tab to the right", parent: "Vimium" },

  // Miscellaneous
  { id: 93, category: "Miscellaneous", command: "?", description: "Show help", parent: "Vimium" },
  { id: 94, category: "Miscellaneous", command: "gs", description: "View page source", parent: "Vimium" },
];

export { vimiumCommands };
