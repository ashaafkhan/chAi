# chAi - AI Learning Project

Learn **AI fundamentals → Workflows → Agentic Patterns** using Groq API & Inngest.

## 🚀 Quick Start

```bash
npm install
echo "GROQ_API_KEY=your_key_here" > .env  # Get from https://console.groq.com

node 01-chAi.js        # Test API
node 09-chAi.js        # AI tool use
node 08-chAi-bot.js    # Interactive chat
```

---

## 📚 Learning Path & Examples

### 1️⃣ **AI Fundamentals**

**📁 Try this first:** `node 01-chAi.js` → `node 02-chAi.js` → `node 09-chAi.js`

#### State of AI 
- **GenAI (Generative AI):** Models that generate new content (text, code, images)
- **LLMs (Large Language Models):** Deep learning models trained on massive datasets
  - Example: Llama 3.3 (used in this project via Groq)
  - Capabilities: Text generation, summarization, translation, code generation
- **Use Cases:**
  - Content creation and summarization
  - Customer service automation
  - Code assistance and debugging
  - Data analysis and insights
  - Personalized recommendations

---

### 2️⃣ **Introduction to Workflows and Agents**

**📁 Try this:** `node 08-chAi-bot.js` (see multi-turn conversation)

#### Understanding Workflows
A **workflow** is a sequence of automated steps executed in order:
- Each step can depend on previous steps
- Steps can be retried if they fail
- Perfect for long-running, complex processes
- Example: Order processing → Payment → Notification → Fulfillment

#### What are Agents?
An **agent** is an autonomous system that:
- Takes actions based on observations
- Makes decisions without explicit step-by-step instructions
- Adapts behavior based on outcomes
- Can use tools/functions to accomplish goals
- Examples: Customer service bots, automation systems, research assistants

#### How Agents Differ from Traditional Ways
| Traditional | Agentic |
|---|---|
| Hardcoded logic (if-else chains) | AI-powered decision making |
| Linear workflows | Adaptive workflows with loops |
| Requires explicit instructions | Autonomous & goal-driven |
| Limited to predefined paths | Can handle novel situations |

---

### 3️⃣ **Inngest: Orchestration Engine**

**📁 Try this:** Run `node --watch 10-todo-inngest/server.js` + `npx inngest dev`

**What is Inngest?**
- Manages reliable workflow execution
- Handles retries and error recovery
- Built-in observability and monitoring
- Local dev server for testing
- Scales to production

#### Workflow Example
```javascript
export const onTodoCreated = inngest.createFunction(
    {
        id: "on-todo-created",
        triggers: [{event: "todo/created"}]
    },
    async({event, step}) => {
        await step.run("audit", async() => {
            // Auto-retried on failure
        });
    }
);
```

---

### 4️⃣ **AI Agentic Workflows**

**📁 Try this:** `11-inngest-ai/` (AI + Workflows combined)

#### Patterns in Agentic Workflows

1. **Plan-Execute-Observe** → Agent loops observing and acting
2. **Tool Use** → AI picks right tool for the job (see `09-chAi.js`)
3. **Multi-Step Reasoning** → Break task → Execute → Combine (see `11-inngest-ai/`)

---

## 📁 Project Structure

```
chAi/
├── 01-chAi.js              # API setup & validation
├── 02-chAi.js              # Basic prompts
├── 08-chAi-bot.js          # Interactive chat
├── 09-chAi.js              # AI tool use
├── 10-todo-inngest/        # Event workflows
├── 11-inngest-ai/          # AI + workflows
├── .env                    # Your API key
└── package.json
```

---

## 🧠 Key Concepts

| Concept | What | Example |
|---------|------|---------|
| **Prompts** | Instructions for AI | "Summarize in 1 line" |
| **Tool Use** | AI picks tools to solve problems | AI chooses calculator for math |
| **Workflows** | Reliable, retrying steps | Send event → trigger → execute |
| **Agents** | Autonomous decision-making | AI + Tools + Workflows = Agent |

---

## ⚡ Quick Code Examples

### Function Calling (Tool Use)
```javascript
// AI sees tools and decides what to use
const tools = [calculatorTool];
const response = await client.chat.completions.create({
  messages, model, tools,
  tool_choice: "auto"  // AI decides
});
```

### Inngest Workflow
```javascript
export const onTodoCreated = inngest.createFunction(
  { id: "on-todo-created", triggers: [{event: "todo/created"}] },
  async({event, step}) => {
    await step.run("audit", async() => {
      // Auto-retried on failure
    });
  }
);
```

---

## 🔧 Troubleshooting

| Issue | Fix |
|-------|-----|
| API key not found | Create `.env` with `GROQ_API_KEY=...` |
| Module not found | Run `npm install` |
| Inngest dev failing | Use `npx inngest dev` (not global) |
| API key invalid | Get new one: https://console.groq.com/keys |
| Port 3000 taken | `PORT=4000 node --watch ...` |
| Functions not syncing | Restart both servers (app + inngest dev) |

---

## 📖 What You'll Learn

✅ **AI Fundamentals** - GenAI, LLMs, Use Cases  
✅ **Workflows** - Sequential, event-driven execution  
✅ **Agents** - Autonomous decision-making  
✅ **Inngest** - Orchestration engine for reliability  
✅ **Integration** - AI + Workflows = Agents  

---

## 🌐 Resources

- [Groq Console](https://console.groq.com) - Get API key
- [OpenAI SDK Docs](https://github.com/openai/node-sdk)
- [Inngest Docs](https://www.inngest.com/docs)
- [Groq API Docs](https://console.groq.com/docs)

---
