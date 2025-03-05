import { Flashcard } from './App';

const ideaVimCommands: Flashcard[] = [
  // Leader key
  { id: 1, category: "Basic", command: "Space", description: "Leader key", parent: "IdeaVim" },
  
  // EasyMotion
  { id: 2, category: "Navigation", command: "<leader>e", description: "EasyMotion search backward", parent: "IdeaVim" },
  { id: 3, category: "Navigation", command: "<leader>f", description: "EasyMotion search forward", parent: "IdeaVim" },
  
  // Debug
  { id: 4, category: "Debug", command: "<leader>dd", description: "Start debugging", parent: "IdeaVim" },
  { id: 5, category: "Debug", command: "<leader>ds", description: "Stop debugging", parent: "IdeaVim" },
  { id: 6, category: "Debug", command: "<leader>db", description: "Toggle line breakpoint", parent: "IdeaVim" },
  { id: 7, category: "Debug", command: "<leader>do", description: "Step over", parent: "IdeaVim" },
  
  // Code
  { id: 8, category: "Code", command: "<leader>rn", description: "Rename element", parent: "IdeaVim" },
  { id: 9, category: "Code", command: "<leader>z", description: "Toggle distraction free mode", parent: "IdeaVim" },
  { id: 10, category: "Code", command: "<leader>oi", description: "Optimize imports", parent: "IdeaVim" },
  { id: 11, category: "Code", command: "<leader>rf", description: "Reformat code", parent: "IdeaVim" },
  { id: 12, category: "Code", command: "<leader>fs", description: "File structure popup", parent: "IdeaVim" },
  
  // Project
  { id: 13, category: "Project", command: "<leader>pv", description: "Select in project view", parent: "IdeaVim" },
  
  // Git
  { id: 14, category: "Git", command: "<leader>h", description: "Show tabbed file history", parent: "IdeaVim" },
  { id: 15, category: "Git", command: "<leader>a", description: "Annotate", parent: "IdeaVim" },
  { id: 16, category: "Git", command: "<leader>cm", description: "Copilot git commit", parent: "IdeaVim" },
  
  // Search
  { id: 17, category: "Search", command: "<leader>sc", description: "Go to class", parent: "IdeaVim" },
  { id: 18, category: "Search", command: "<leader>sa", description: "Go to action", parent: "IdeaVim" },
  { id: 19, category: "Search", command: "<leader>sf", description: "Go to file", parent: "IdeaVim" },
  { id: 20, category: "Search", command: "<leader>gd", description: "Go to declaration", parent: "IdeaVim" },
  { id: 21, category: "Search", command: "<leader>ge", description: "Go to next error", parent: "IdeaVim" },
  
  // Window
  { id: 22, category: "Window", command: "<leader>hw", description: "Hide active window", parent: "IdeaVim" },
  { id: 23, category: "Window", command: "<leader>hx", description: "Hide all windows", parent: "IdeaVim" },
  { id: 24, category: "Window", command: "<leader>xx", description: "Close editor", parent: "IdeaVim" },
  { id: 25, category: "Window", command: "<leader>xa", description: "Close all editors but active", parent: "IdeaVim" },
  { id: 26, category: "Window", command: "<leader>wv", description: "Split vertically", parent: "IdeaVim" },
  { id: 27, category: "Window", command: "<leader>wm", description: "Move editor to opposite tab group", parent: "IdeaVim" },
  
  // Navigation
  { id: 28, category: "Navigation", command: "<leader><<", description: "Navigate back", parent: "IdeaVim" },
  { id: 29, category: "Navigation", command: "<leader>>>", description: "Navigate forward", parent: "IdeaVim" },
  { id: 30, category: "Navigation", command: "<leader>r", description: "Recent files", parent: "IdeaVim" },
  
  // Terminal
  { id: 31, category: "Terminal", command: "<leader>t", description: "Activate terminal tool window", parent: "IdeaVim" },
  { id: 32, category: "Terminal", command: "<leader>gc", description: "Activate GitHub Copilot chat tool window", parent: "IdeaVim" },
  
  // Other
  { id: 33, category: "Other", command: "H", description: "Move cursor left (remapped from h)", parent: "IdeaVim" },
  { id: 34, category: "Other", command: "<leader>i", description: "Toggle case and start typing", parent: "IdeaVim" },
  { id: 35, category: "Other", command: "v2l<leader>u", description: "Remove selection and toggle case", parent: "IdeaVim" },
  { id: 36, category: "Other", command: "U", description: "Redo (remapped from Ctrl+R)", parent: "IdeaVim" },
];

export { ideaVimCommands };

