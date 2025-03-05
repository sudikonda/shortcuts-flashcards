import { Flashcard } from './App';

const leaderKeyCommands: Flashcard[] = [
  // Basic Applications
  { id: 1, category: "Basic", command: "t", description: "Open Terminal", parent: "Leader" },
  { id: 2, category: "Basic", command: "i", description: "Open IntelliJ IDEA", parent: "Leader" },
  { id: 3, category: "Basic", command: "v", description: "Open Vivaldi", parent: "Leader" },
  { id: 4, category: "Basic", command: ";", description: "Open Microsoft Teams", parent: "Leader" },
  { id: 5, category: "Basic", command: "b", description: "Open Brave Browser", parent: "Leader" },
  { id: 6, category: "Basic", command: "/", description: "Lock Screen", parent: "Leader" },
  { id: 7, category: "Basic", command: "c", description: "Open Camera", parent: "Leader" },

  // Open Apps (o prefix)
  { id: 8, category: "Apps", command: "os", description: "Open System Settings", parent: "Leader" },
  { id: 9, category: "Apps", command: "oe", description: "Open Microsoft Outlook", parent: "Leader" },
  { id: 10, category: "Apps", command: "ot", description: "Open Microsoft Teams", parent: "Leader" },
  { id: 11, category: "Apps", command: "of", description: "Open Firefox Developer Edition", parent: "Leader" },
  { id: 12, category: "Apps", command: "on", description: "Open Microsoft OneNote", parent: "Leader" },
  { id: 13, category: "Apps", command: "ow", description: "Open Webex", parent: "Leader" },
  { id: 14, category: "Apps", command: "oz", description: "Open Zscaler", parent: "Leader" },
  { id: 15, category: "Apps", command: "ob", description: "Open Vivaldi", parent: "Leader" },
  { id: 16, category: "Apps", command: "op", description: "Open Postman", parent: "Leader" },
  { id: 17, category: "Apps", command: "ov", description: "Open VS Code", parent: "Leader" },
  { id: 18, category: "Apps", command: "oi", description: "Open IntelliJ IDEA", parent: "Leader" },

  // Raycast Features (r prefix)
  { id: 19, category: "Raycast", command: "re", description: "Search Emoji Symbols", parent: "Leader" },
  { id: 20, category: "Raycast", command: "rp", description: "Show Confetti", parent: "Leader" },
  { id: 21, category: "Raycast", command: "rc", description: "Open Camera", parent: "Leader" },
  { id: 22, category: "Raycast", command: "rl", description: "Open Logs", parent: "Leader" },
  { id: 23, category: "Raycast", command: "rd", description: "Open Dictionary", parent: "Leader" },
  { id: 24, category: "Raycast", command: "ru", description: "Search Snippets", parent: "Leader" },
  { id: 25, category: "Raycast", command: "rf", description: "Search Files", parent: "Leader" },

  // Data Tools (d prefix)
  { id: 26, category: "Data", command: "dd", description: "Open Aqua Data Studio", parent: "Leader" },
  { id: 27, category: "Data", command: "da", description: "Open Azure Data Studio", parent: "Leader" },

  // Finder Locations (f prefix)
  { id: 28, category: "Finder", command: "fd", description: "Open Downloads folder", parent: "Leader" },
  { id: 29, category: "Finder", command: "fh", description: "Open Home directory", parent: "Leader" },
  { id: 30, category: "Finder", command: "fc", description: "Open Workspace folder", parent: "Leader" },

  // Window Management (w prefix)
  { id: 31, category: "Window", command: "wl", description: "Move to Left Display", parent: "Leader" },
  { id: 32, category: "Window", command: "wr", description: "Move to Right Display", parent: "Leader" },
  { id: 33, category: "Window", command: "wm", description: "Maximize Window", parent: "Leader" },
  { id: 34, category: "Window", command: "wc", description: "Center Window (50% size)", parent: "Leader" }
];

export { leaderKeyCommands };
