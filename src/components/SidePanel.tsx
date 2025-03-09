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
  selectedCommandSet: 'all' | 'ideavim' | 'leader' | 'vim' | 'vimium';
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
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onToggle}
      />
      <div 
        className="fixed inset-y-0 right-0 w-full sm:max-w-sm bg-white dark:bg-gray-800 shadow-lg overflow-y-auto p-2 sm:p-4 transform transition-transform duration-300 ease-in-out z-50"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex justify-between items-center mb-2 sm:mb-4">
          <div className="flex items-center">
            <Command className="w-5 h-5 mr-2 text-primary" />
            <h2 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-white">
              {selectedCommandSet === 'all' ? 'All Commands' : `${selectedCommandSet} Commands`}
            </h2>
          </div>
          <button 
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close panel"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      
      {Object.entries(groupedCommands).map(([category, commands]) => (
        <div key={category} className="mb-2 sm:mb-4">
          <h3 className="text-sm sm:text-lg font-medium text-gray-900 dark:text-white mb-1 sm:mb-2">{category}</h3>
          <div className="space-y-1">
            {commands.map((cmd) => (
              <div key={cmd.id} className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-xs font-mono text-gray-900 dark:text-gray-200">{cmd.command}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{cmd.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default SidePanel;
