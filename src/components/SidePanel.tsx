import React from 'react';
import { Command } from 'lucide-react';

interface CommandItem {
  id: number;
  parent: string;
  category: string;
  command: string;
  description: string;
}

interface SidePanelProps {
  isOpen: boolean;
  commands: CommandItem[];
  selectedCommandSet: 'all' | 'idea' | 'leader' | 'vim' | 'vimium';
  onToggle: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, commands, selectedCommandSet, onToggle }) => {
  if (!isOpen) return null;

  const filteredCommands = selectedCommandSet === 'all' 
    ? commands 
    : commands.filter(cmd => cmd.parent.toLowerCase() === selectedCommandSet.toLowerCase());

  const groupedCommands = filteredCommands.reduce((acc, command) => {
    if (!acc[command.category]) {
      acc[command.category] = [];
    }
    acc[command.category].push(command);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white dark:bg-gray-800 shadow-lg overflow-y-auto p-4 transform transition-transform duration-300 ease-in-out" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
      <button 
        onClick={onToggle}
        className="absolute -left-12 top-4 p-2 bg-white dark:bg-gray-800 rounded-l-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9h14V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2H3V9z"></path>
          <path d="M15 5v2"></path>
          <path d="M15 11v2"></path>
          <path d="M15 17v2"></path>
        </svg>
      </button>
      <div className="flex items-center mb-6">
        <Command className="w-6 h-6 mr-2 text-primary" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {selectedCommandSet === 'all' ? 'All Commands' : `${selectedCommandSet} Commands`}
        </h2>
      </div>
      
      {Object.entries(groupedCommands).map(([category, commands]) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{category}</h3>
          <div className="space-y-2">
            {commands.map((cmd) => (
              <div key={cmd.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-sm font-mono text-gray-900 dark:text-gray-200">{cmd.command}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{cmd.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidePanel;
