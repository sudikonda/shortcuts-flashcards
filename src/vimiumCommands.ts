import { Flashcard } from './App';

const vimiumCommands: Flashcard[] = [
  // Navigating the page
  { id: 35, parent: "Vimium", category: "Navigating the page", command: "j", description: "Scroll down" },
  { id: 36, parent: "Vimium", category: "Navigating the page", command: "k", description: "Scroll up" },
  { id: 37, parent: "Vimium", category: "Navigating the page", command: "gg", description: "Scroll to the top of the page" },
  { id: 38, parent: "Vimium", category: "Navigating the page", command: "G", description: "Scroll to the bottom of the page" },
  { id: 39, parent: "Vimium", category: "Navigating the page", command: "j", description: "Scroll a half page down" },
  { id: 40, parent: "Vimium", category: "Navigating the page", command: "k", description: "Scroll a half page up" },
  { id: 41, parent: "Vimium", category: "Navigating the page", command: "h", description: "Scroll left" },
  { id: 42, parent: "Vimium", category: "Navigating the page", command: "l", description: "Scroll right" },
  { id: 43, parent: "Vimium", category: "Navigating the page", command: "zH", description: "Scroll all the way to the left" },
  { id: 44, parent: "Vimium", category: "Navigating the page", command: "zL", description: "Scroll all the way to the right" },
  { id: 45, parent: "Vimium", category: "Navigating the page", command: "r", description: "Reload the page" },
  { id: 46, parent: "Vimium", category: "Navigating the page", command: "yy", description: "Copy the current URL to the clipboard" },
  { id: 47, parent: "Vimium", category: "Navigating the page", command: "p", description: "Open the clipboard's URL in the current tab" },
  { id: 48, parent: "Vimium", category: "Navigating the page", command: "P", description: "Open the clipboard's URL in a new tab" },
  { id: 49, parent: "Vimium", category: "Navigating the page", command: "gu", description: "Go up the URL hierarchy" },
  { id: 50, parent: "Vimium", category: "Navigating the page", command: "gU", description: "Go to root of current URL hierarchy" },
  { id: 51, parent: "Vimium", category: "Navigating the page", command: "i", description: "Enter insert mode" },
  { id: 52, parent: "Vimium", category: "Navigating the page", command: "v", description: "Enter visual mode" },
  { id: 53, parent: "Vimium", category: "Navigating the page", command: "V", description: "Enter visual line mode" },
  { id: 54, parent: "Vimium", category: "Navigating the page", command: "gi", description: "Focus the first text input on the page" },
  { id: 55, parent: "Vimium", category: "Navigating the page", command: "f", description: "Open a link in the current tab" },
  { id: 56, parent: "Vimium", category: "Navigating the page", command: "F", description: "Open a link in a new tab" },
  { id: 57, parent: "Vimium", category: "Navigating the page", command: "mf", description: "Open multiple links in a new tab" },
  { id: 58, parent: "Vimium", category: "Navigating the page", command: "yf", description: "Copy a link URL to the clipboard" },
  { id: 59, parent: "Vimium", category: "Navigating the page", command: "[[", description: "Follow the link labeled previous or <" },
  { id: 60, parent: "Vimium", category: "Navigating the page", command: "]]", description: "Follow the link labeled next or >" },
  { id: 61, parent: "Vimium", category: "Navigating the page", command: "gf", description: "Select the next frame on the page" },
  { id: 62, parent: "Vimium", category: "Navigating the page", command: "gF", description: "Select the page's main/top frame" },
  { id: 63, parent: "Vimium", category: "Navigating the page", command: "`", description: "Go to a mark" },

  // Using the vomnibar
  { id: 64, parent: "Vimium", category: "Using the vomnibar", command: "o", description: "Open URL, bookmark or history entry" },
  { id: 65, parent: "Vimium", category: "Using the vomnibar", command: "O", description: "Open URL, bookmark or history entry in a new tab" },
  { id: 66, parent: "Vimium", category: "Using the vomnibar", command: "b", description: "Open a bookmark" },
  { id: 67, parent: "Vimium", category: "Using the vomnibar", command: "B", description: "Open a bookmark in a new tab" },
  { id: 68, parent: "Vimium", category: "Using the vomnibar", command: "T", description: "Search through your open tabs" },
  { id: 69, parent: "Vimium", category: "Using the vomnibar", command: "ge", description: "Edit the current URL" },
  { id: 70, parent: "Vimium", category: "Using the vomnibar", command: "gE", description: "Edit the current URL and open in a new tab" },

  // Using find
  { id: 71, parent: "Vimium", category: "Using find", command: "/", description: "Enter find mode" },
  { id: 72, parent: "Vimium", category: "Using find", command: "n", description: "Cycle forward to the next find match" },
  { id: 73, parent: "Vimium", category: "Using find", command: "N", description: "Cycle backward to the previous find match" },

  // Navigating history
  { id: 74, parent: "Vimium", category: "Navigating history", command: "H", description: "Go back in history" },
  { id: 75, parent: "Vimium", category: "Navigating history", command: "L", description: "Go forward in history" },

  // Manipulating tabs
  { id: 76, parent: "Vimium", category: "Manipulating tabs", command: "t", description: "Create new tab" },
  { id: 77, parent: "Vimium", category: "Manipulating tabs", command: "J", description: "Go one tab left" },
  { id: 78, parent: "Vimium", category: "Manipulating tabs", command: "K", description: "Go one tab right" },
  { id: 79, parent: "Vimium", category: "Manipulating tabs", command: "zl", description: "Go to previously-visited tab" },
  { id: 80, parent: "Vimium", category: "Manipulating tabs", command: "g0", description: "Go to the first tab" },
  { id: 81, parent: "Vimium", category: "Manipulating tabs", command: "g$", description: "Go to the last tab" },
  { id: 82, parent: "Vimium", category: "Manipulating tabs", command: "yt", description: "Duplicate current tab" },
  { id: 83, parent: "Vimium", category: "Manipulating tabs", command: "<a-p>", description: "Pin or unpin current tab" },
  { id: 84, parent: "Vimium", category: "Manipulating tabs", command: "M", description: "Mute or unmute current tab" },
  { id: 85, parent: "Vimium", category: "Manipulating tabs", command: "x", description: "Close current tab" },
  { id: 86, parent: "Vimium", category: "Manipulating tabs", command: "X", description: "Restore closed tab" },
  { id: 87, parent: "Vimium", category: "Manipulating tabs", command: "w", description: "Move tab to new window" },
  { id: 88, parent: "Vimium", category: "Manipulating tabs", command: "gL", description: "Close tabs on the left" },
  { id: 89, parent: "Vimium", category: "Manipulating tabs", command: "gR", description: "Close tabs on the right" },
  { id: 90, parent: "Vimium", category: "Manipulating tabs", command: "gc", description: "Close all other tabs" },
  { id: 91, parent: "Vimium", category: "Manipulating tabs", command: "<<", description: "Move tab to the left" },
  { id: 92, parent: "Vimium", category: "Manipulating tabs", command: ">>", description: "Move tab to the right" },

  // Miscellaneous
  { id: 93, parent: "Vimium", category: "Miscellaneous", command: "?", description: "Show help" },
  { id: 94, parent: "Vimium", category: "Miscellaneous", command: "gs", description: "View page source" },
];

export { vimiumCommands };
