import { useState } from "react";

export default function Tabs({ tabs, children }) {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      
      {/* Tabs Header */}
      <div className="border-b border-gray-100">
        <div
          className="
            flex gap-2 px-4 py-2
            overflow-x-auto
            scrollbar-hide
          "
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`
                  flex items-center gap-2
                  whitespace-nowrap
                  px-4 py-2
                  text-sm font-medium
                  rounded-lg
                  transition-colors
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {tab.icon && (
                  <span className="text-base">
                    {tab.icon}
                  </span>
                )}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {children(activeTab)}
      </div>
    </div>
  );
}
