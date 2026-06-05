# chAi - ChaiAI Learning Project

A comprehensive Node.js project demonstrating how to work with the Groq API (OpenAI-compatible) for building AI-powered applications. This project covers configuration, API calls, system prompts, function calling, and interactive chat patterns.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Configuration](#configuration)
- [File Descriptions](#file-descriptions)
- [Running Examples](#running-examples)
- [Key Concepts](#key-concepts)

## Overview

**chAi** demonstrates various patterns for interacting with the Groq API (via OpenAI SDK):
- ✅ API key validation and client initialization
- ✅ Basic API calls with system prompts
- ✅ Function calling (Tool Use)
- ✅ Interactive chat interface
- ✅ Async/await patterns with streams

## Project Structure

```
chAi/
├── 01-chAi.js           # API configuration & client initialization
├── 02-chAi.js           # Basic API call with system prompt
├── 03-chAi.js           # [Example 3]
├── 04-chAi.js           # [Example 4]
├── 05-chAi.js           # [Example 5]
├── 06-await-for.js      # Async iterator patterns
├── 07-chAi.js           # [Example 7]
├── 08-chAi-bot.js       # Interactive chat bot
├── 09-chAi.js           # Function calling with calculator tool
├── tools/
│   └── calculator.js    # Calculator tool (add, subtract, multiply, divide)
├── package.json         # Project dependencies
├── .env                 # Environment variables (add your API key here)
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Setup & Installation

### 1. Clone & Install Dependencies

```bash
git clone <repo-url>
cd chAi
npm install
```

### 2. Create `.env` File

Create a `.env` file in the project root with your Groq API key:

```
GROQ_API_KEY=your_groq_api_key_here
```

Get your API key from: https://console.groq.com

### 3. Verify Setup

```bash
node 01-chAi.js
```

You should see: `OpenAI client initialized successfully`

## Configuration

### API Configuration (01-chAi.js)

This file handles:
- Loading environment variables from `.env`
- Validating that `GROQ_API_KEY` is set
- Initializing the OpenAI client pointed to Groq's API endpoint
- Exporting the client for use in other files

**Key Export:** `checkOpenAI()` - Returns an initialized OpenAI client

```javascript
const client = await checkOpenAI();
```

## File Descriptions

### 01-chAi.js - Configuration
**Purpose:** API key validation and client initialization

- Checks if `GROQ_API_KEY` is set
- Creates OpenAI client with Groq baseURL
- Exports `apikeyChecker()` and `checkOpenAI()` functions

**Run:** `node 01-chAi.js`

---

### 02-chAi.js - Basic API Call
**Purpose:** Demonstrates calling the API with system prompts

- Calls Groq API with a basic message
- Shows how to use system prompts to modify AI behavior
- Uses the `llama-3.1-8b-instant` model

**Run:** `node 02-chAi.js`

---

### 06-await-for.js - Async Iterators
**Purpose:** Demonstrates async iteration patterns

- Shows how to create async iterators
- Demonstrates `for await...of` loops
- Useful for stream processing

**Run:** `node 06-await-for.js`

---

### 08-chAi-bot.js - Interactive Chat
**Purpose:** Interactive command-line chat bot

- Uses `readline` for user input
- Demonstrates multi-turn conversations
- Shows how to maintain conversation context

**Run:** `node 08-chAi-bot.js`

---

### 09-chAi.js - Function Calling
**Purpose:** Demonstrates tool use (function calling)

This is the most advanced example. Shows how:
1. Define tools/functions the AI can call
2. Send tool definitions to the API
3. Parse tool calls from the API response
4. Execute the tool and return results
5. Send results back for the AI to process

**Flow:**
- Request → AI decides to use calculator tool
- Parse tool call → Extract arguments (a, b, op)
- Execute tool → Get result (e.g., 83810205)
- Send back result → AI generates final response

**Run:** `node 09-chAi.js`

---

### tools/calculator.js - Calculator Tool
**Purpose:** Simple calculator function for demonstration

Supports: `add`, `subtract`, `multiply`, `divide`

**Exports:**
- `calculator(args)` - Performs calculation
- `calculateTool` - Tool definition for API

## Running Examples

### Start with Setup
```bash
node 01-chAi.js
```

### Try Basic API Call
```bash
node 02-chAi.js
```

### Try Interactive Chat
```bash
node 08-chAi-bot.js
# Then type your questions (press Ctrl+C to exit)
```

### Try Function Calling
```bash
node 09-chAi.js
# Output shows AI using calculator tool: 12345 * 6789 = 83810205
```

## Key Concepts

### 1. ES Modules
- Project uses `"type": "module"` in `package.json`
- Use `import/export` syntax (not `require`)
- Must include `.js` extension in import paths

### 2. API Key Security
- `.env` file is in `.gitignore` (never commit API keys!)
- Load keys with `dotenv.config()`
- Check that keys are set before using

### 3. Groq API Endpoint
- Uses OpenAI-compatible API
- Base URL: `https://api.groq.com/openai/v1`
- Model used: `llama-3.1-8b-instant`

### 4. Function Calling (Tool Use)
```
User Input
    ↓
API Call (with tools defined)
    ↓
AI Response (decides to use tool)
    ↓
Execute Tool (calculator)
    ↓
Send Result Back to AI
    ↓
Final Response
```

### 5. Message Format
- **User messages:** `{role: "user", content: "..."}`
- **Assistant messages:** `{role: "assistant", ...}` with `tool_calls` array
- **Tool messages:** `{role: "tool", name: "...", content: "result"}`

## Troubleshooting

### "GROQ_API_KEY is not set"
- Create `.env` file with your API key
- Make sure `dotenv` is installed: `npm install dotenv`

### "Cannot find module"
- Ensure `.js` extensions are in import paths
- Check that `package.json` has `"type": "module"`

### "for await is not defined"
- Make sure `package.json` has `"type": "module"`

## Additional Resources

- [Groq Console](https://console.groq.com)
- [OpenAI SDK Docs](https://github.com/openai/node-sdk)
- [Groq API Docs](https://console.groq.com/docs)


---

Happy coding! 🚀