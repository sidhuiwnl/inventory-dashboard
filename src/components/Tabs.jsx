import { useState } from "react";

export default function Tabs({ tabs, children }) {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      
      {/* Compact Tab Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                ${
                  activeTab === tab.value
                    ? "bg-white dark:bg-gray-600 shadow text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                {tab.icon && <span>{tab.icon}</span>}
                {tab.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        <div className="animate-fadeIn">
          {children(activeTab)}
        </div>
      </div>

      {/* Active tab indicator line (alternative) */}
      <div className="px-4">
        <div className="relative h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div 
            className="absolute h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
            style={{
              width: `${100 / tabs.length}%`,
              left: `${(tabs.findIndex(tab => tab.value === activeTab) / tabs.length) * 100}%`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}