import { Flashcard } from './App';

const vimCommands: Flashcard[] = [
  // Leader key
  { id: 1, category: "Basic", command: "Space", description: "Leader key" },
  
  // EasyMotion
  { id: 2, category: "Navigation", command: "<leader>e", description: "EasyMotion search backward" },
  { id: 3, category: "Navigation", command: "<leader>f", description: "EasyMotion search forward" },
  
  // Debug
  { id: 4, category: "Debug", command: "<leader>dd", description: "Start debugging" },
  { id: 5, category: "Debug", command: "<leader>ds", description: "Stop debugging" },
  { id: 6, category: "Debug", command: "<leader>db", description: "Toggle line breakpoint" },
  { id: 7, category: "Debug", command: "<leader>do", description: "Step over" },
  
  // Code
  { id: 8, category: "Code", command: "<leader>rn", description: "Rename element" },
  { id: 9, category: "Code", command: "<leader>z", description: "Toggle distraction free mode" },
  { id: 10, category: "Code", command: "<leader>oi", description: "Optimize imports" },
  { id: 11, category: "Code", command: "<leader>rf", description: "Reformat code" },
  { id: 12, category: "Code", command: "<leader>fs", description: "File structure popup" },
  
  // Project
  { id: 13, category: "Project", command: "<leader>pv", description: "Select in project view" },
  
  // Git
  { id: 14, category: "Git", command: "<leader>h", description: "Show tabbed file history" },
  { id: 15, category: "Git", command: "<leader>a", description: "Annotate" },
  { id: 16, category: "Git", command: "<leader>cm", description: "Copilot git commit" },
  
  // Search
  { id: 17, category: "Search", command: "<leader>sc", description: "Go to class" },
  { id: 18, category: "Search", command: "<leader>sa", description: "Go to action" },
  { id: 19, category: "Search", command: "<leader>sf", description: "Go to file" },
  { id: 20, category: "Search", command: "<leader>gd", description: "Go to declaration" },
  { id: 21, category: "Search", command: "<leader>ge", description: "Go to next error" },
  
  // Window
  { id: 22, category: "Window", command: "<leader>hw", description: "Hide active window" },
  { id: 23, category: "Window", command: "<leader>hx", description: "Hide all windows" },
  { id: 24, category: "Window", command: "<leader>xx", description: "Close editor" },
  { id: 25, category: "Window", command: "<leader>xa", description: "Close all editors but active" },
  { id: 26, category: "Window", command: "<leader>wv", description: "Split vertically" },
  { id: 27, category: "Window", command: "<leader>wm", description: "Move editor to opposite tab group" },
  
  // Navigation
  { id: 28, category: "Navigation", command: "<leader><<", description: "Navigate back" },
  { id: 29, category: "Navigation", command: "<leader>>>", description: "Navigate forward" },
  { id: 30, category: "Navigation", command: "<leader>r", description: "Recent files" },
  
  // Terminal
  { id: 31, category: "Terminal", command: "<leader>t", description: "Activate terminal tool window" },
  { id: 32, category: "Terminal", command: "<leader>gc", description: "Activate GitHub Copilot chat tool window" },
  
  // Other
  { id: 33, category: "Other", command: "H", description: "Move cursor left (remapped from h)" },
  { id: 34, category: "Other", command: "<leader>i", description: "Toggle case and start typing" },
  { id: 35, category: "Other", command: "v2l<leader>u", description: "Remove selection and toggle case" },
  { id: 36, category: "Other", command: "U", description: "Redo (remapped from Ctrl+R)" },
  
];
 

 export default vimCommands;
