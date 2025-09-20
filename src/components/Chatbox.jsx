import React from 'react'
import { GoogleGenAI } from '@google/genai'
import { Send } from "lucide-react";
import { useState } from 'react';

function Chatbox() {
    const [loading, setLoading] = useState(false);
    const [message,setMeassage] = useState("");
    

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-black">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 flex flex-col h-[600px]">
        
        {/* Header */}
        <div className="text-center py-2 border-b border-gray-500 text-white font-semibold">
          ChatBot
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 p-2 scrollbar-thin scrollbar-thumb-gray-500">
          {/* Bot message */}
          <div className="flex justify-start">
            <div className="px-4 py-2 rounded-2xl bg-gray-300 text-black rounded-bl-none max-w-xs">
              Hello 👋, how can I help you today?
            </div>
          </div>
          {/* User message */}
          <div className="flex justify-end">
          </div>
          {/* Bot message */}
          <div className="flex justify-start">
          </div>
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 border-t border-gray-500 pt-2">
          <input

            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-xl bg-white/20 text-white outline-none"
          />
          <button className="p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chatbox