import { Flashcard } from './App';

const leaderKeyCommands: Flashcard[] = [
  // Basic Applications
  { id: 1, parent: "Leader", category: "Basic", command: "t", description: "Open Terminal" },
  { id: 2, parent: "Leader", category: "Basic", command: "i", description: "Open IntelliJ IDEA" },
  { id: 3, parent: "Leader", category: "Basic", command: "v", description: "Open Vivaldi" },
  { id: 4, parent: "Leader", category: "Basic", command: ";", description: "Open Microsoft Teams" },
  { id: 5, parent: "Leader", category: "Basic", command: "b", description: "Open Brave Browser" },
  { id: 6, parent: "Leader", category: "Basic", command: "/", description: "Lock Screen" },
  { id: 7, parent: "Leader", category: "Basic", command: "c", description: "Open Camera" },

  // Open Apps (o prefix)
  { id: 8, parent: "Leader", category: "Apps", command: "os", description: "Open System Settings" },
  { id: 9, parent: "Leader", category: "Apps", command: "oe", description: "Open Microsoft Outlook" },
  { id: 10, parent: "Leader", category: "Apps", command: "ot", description: "Open Microsoft Teams" },
  { id: 11, parent: "Leader", category: "Apps", command: "of", description: "Open Firefox Developer Edition" },
  { id: 12, parent: "Leader", category: "Apps", command: "on", description: "Open Microsoft OneNote" },
  { id: 13, parent: "Leader", category: "Apps", command: "ow", description: "Open Webex" },
  { id: 14, parent: "Leader", category: "Apps", command: "oz", description: "Open Zscaler" },
  { id: 15, parent: "Leader", category: "Apps", command: "ob", description: "Open Vivaldi" },
  { id: 16, parent: "Leader", category: "Apps", command: "op", description: "Open Postman" },
  { id: 17, parent: "Leader", category: "Apps", command: "ov", description: "Open VS Code" },
  { id: 18, parent: "Leader", category: "Apps", command: "oi", description: "Open IntelliJ IDEA" },

  // Raycast Features (r prefix)
  { id: 19, parent: "Leader", category: "Raycast", command: "re", description: "Search Emoji Symbols" },
  { id: 20, parent: "Leader", category: "Raycast", command: "rp", description: "Show Confetti" },
  { id: 21, parent: "Leader", category: "Raycast", command: "rc", description: "Open Camera" },
  { id: 22, parent: "Leader", category: "Raycast", command: "rl", description: "Open Logs" },
  { id: 23, parent: "Leader", category: "Raycast", command: "rd", description: "Open Dictionary" },
  { id: 24, parent: "Leader", category: "Raycast", command: "ru", description: "Search Snippets" },
  { id: 25, parent: "Leader", category: "Raycast", command: "rf", description: "Search Files" },

  // Data Tools (d prefix)
  { id: 26, parent: "Leader", category: "Data", command: "dd", description: "Open Aqua Data Studio" },
  { id: 27, parent: "Leader", category: "Data", command: "da", description: "Open Azure Data Studio" },

  // Finder Locations (f prefix)
  { id: 28, parent: "Leader", category: "Finder", command: "fd", description: "Open Downloads folder" },
  { id: 29, parent: "Leader", category: "Finder", command: "fh", description: "Open Home directory" },
  { id: 30, parent: "Leader", category: "Finder", command: "fc", description: "Open Workspace folder" },

  // Window Management (w prefix)
  { id: 31, parent: "Leader", category: "Window", command: "wl", description: "Move to Left Display" },
  { id: 32, parent: "Leader", category: "Window", command: "wr", description: "Move to Right Display" },
  { id: 33, parent: "Leader", category: "Window", command: "wm", description: "Maximize Window" },
  { id: 34, parent: "Leader", category: "Window", command: "wc", description: "Center Window (50% size)" }
];

export { leaderKeyCommands };

