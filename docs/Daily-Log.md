# AuraGen - Daily Development Log

---

# Day 1 - Project Planning & Environment Setup

## Objective
Set up the project foundation and development environment.

## Completed Tasks
- Created the AuraGen project repository.
- Initialized Git repository.
- Connected project to GitHub.
- Created the project folder structure.
- Created documentation folders.
- Added README.md.
- Added LICENSE file.
- Created assets, backend, frontend, docs, diagrams and screenshots folders.

## Learned
- Project architecture planning.
- Importance of Git version control.
- Repository organization.
- Software development workflow.

## Deliverables
✅ Project Repository
✅ GitHub Repository
✅ Folder Structure
✅ Documentation Structure

## Git Commit
```bash
Initial project setup and folder structure
```

---

# Day 2 - React & Tailwind CSS Setup

## Objective
Build the frontend foundation using React and Tailwind CSS.

## Completed Tasks
- Created React project using Vite.
- Installed project dependencies.
- Installed Tailwind CSS v4.
- Configured Vite for Tailwind.
- Configured global CSS.
- Verified Tailwind installation.
- Created first AuraGen screen.
- Learned React project structure.

## Learned
- React fundamentals.
- Vite development server.
- Tailwind CSS basics.
- React project architecture.
- Purpose of App.jsx, main.jsx and package.json.

## Deliverables
✅ React Application Running
✅ Tailwind CSS Working
✅ Vite Configured
✅ First AuraGen Screen

## Git Commit
```bash
feat(frontend): setup Tailwind CSS and React project
```

---

# Day 3 - Frontend Architecture

## Objective
Design a scalable frontend architecture for AuraGen.

## Completed Tasks
- Created professional React folder structure.
- Organized components folder.
- Created pages folder.
- Created hooks folder.
- Created services folder.
- Created context folder.
- Created utils folder.
- Created styles folder.
- Created telemetry, ui and wizard component folders.
- Prepared reusable component architecture.

## Learned
- Component-based architecture.
- Separation of concerns.
- React folder organization.
- Reusable UI design.
- Page-based architecture.

## Deliverables
✅ Professional Folder Structure
✅ Reusable Architecture
✅ Clean Project Organization

## Git Commit
```bash
feat(frontend): create professional project architecture
```

---

# Day 4 - AuraGen Landing Page

## Objective
Develop the first version of the AuraGen user interface.

## Completed Tasks
- Created Navbar component.
- Created Hero component.
- Created Features component.
- Created Footer component.
- Created Home page.
- Connected Home page to App.jsx.
- Displayed complete landing page.
- Implemented responsive layout using Tailwind CSS.
- Rendered feature cards dynamically using React map().

## Components Developed
- Navbar
- Hero
- Features
- Footer
- Home

## Learned
- Functional Components.
- JSX.
- Component composition.
- Import and Export.
- React map() rendering.
- Dynamic UI generation.
- Tailwind responsive layout.

## Deliverables
✅ Professional Landing Page
✅ Reusable Components
✅ Responsive Layout
✅ Dynamic Feature Cards

## Git Commit
```bash
feat(ui): build AuraGen landing page using reusable React components
```
# Day 5 - Friction Engine (Telemetry System)

## Objective
Build the frontend telemetry engine to collect user interaction data.

## Completed Tasks
- Created useMouseTracker custom hook.
- Created useClickTracker custom hook.
- Created useHesitationTracker custom hook.
- Created useMouseVelocity custom hook.
- Built TelemetryPanel component.
- Displayed live mouse coordinates.
- Displayed live click count.
- Displayed idle time.
- Calculated mouse velocity.
- Implemented a prototype Cognitive Load Score.

## Learned
- React Custom Hooks
- useState
- useEffect
- Event Listeners
- Cleanup Functions
- Mouse Events
- Click Events
- Velocity Calculation
- Telemetry Collection

## Deliverables
✅ Mouse Tracking
✅ Click Tracking
✅ Hesitation Tracking
✅ Velocity Tracking
✅ Cognitive Load Score
✅ Live Telemetry Panel

## Git Commit
```bash
feat(telemetry): implement friction engine with cognitive load tracking
```
# Day 6 - Backend & WebSocket Integration

## Objective
Connect the frontend telemetry engine to the backend using WebSockets.

## Completed Tasks
- Set up Express backend server.
- Configured CORS.
- Created WebSocket server using `ws`.
- Connected React frontend to the backend.
- Sent live telemetry data through WebSockets.
- Verified telemetry received by the backend.
- Created AI prompt builder template for future LLM integration.

## Learned
- Express.js basics.
- WebSocket communication.
- Client-server architecture.
- JSON serialization.
- Prompt engineering fundamentals.

## Deliverables
✅ Express Backend
✅ WebSocket Communication
✅ Live Telemetry Streaming
✅ Prompt Builder

## Git Commit
```bash
feat(backend): add WebSocket telemetry pipeline and AI prompt builder
```

# Week 2 - Day 7: Prompt Engineering

## Objective
Build a professional AI prompt pipeline for AuraGen.

## Completed Tasks
- Created `systemPrompt.js`
- Created `promptTemplates.js`
- Created `promptBuilder.js`
- Combined system prompt, task template, and telemetry into one final prompt
- Tested prompt generation using sample telemetry

## Learned
- System prompts
- Task prompts
- Prompt engineering
- Dynamic prompt generation
- Telemetry-driven AI context

## Deliverables
✅ System Prompt
✅ Prompt Template
✅ Prompt Builder
✅ Prompt Testing

## Git Commit
```bash
feat(ai): implement prompt engineering pipeline
```


# Week 2 - Day 8: Gemini AI Integration

## Objective
Integrate Google Gemini AI into the AuraGen backend and establish successful communication between the application and the AI model.

---

## Topics Covered

- Google GenAI SDK
- Gemini API
- Environment Variables
- Google AI Studio
- Google Cloud Configuration
- AI Model Integration

---

## Tasks Completed

### 1. Installed Google GenAI SDK

```bash
npm uninstall @google/generative-ai
npm install @google/genai dotenv
```

---

### 2. Configured Environment Variables

Created the `.env` file and securely stored the Gemini API key.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

### 3. Created Gemini Client

Created the AI client to initialize and connect with the Gemini API.

**File Created**

```
backend/ai/geminiClient.js
```

---

### 4. Tested Gemini API Connection

Created a test script to verify communication with the AI model.

**File Created**

```
backend/testGemini.js
```

Successfully received a response from Gemini.

---

### 5. Verified API Configuration

- API Key configured successfully
- Google AI Studio project verified
- Gemini API enabled
- Backend connected successfully

---

## Files Created / Updated

```
backend/
│
├── ai/
│   └── geminiClient.js
│
├── testGemini.js
│
└── .env
```

---

## Skills Learned

- Google GenAI SDK
- Gemini API Integration
- API Authentication
- Environment Variable Management
- Backend to AI Communication
- Google AI Studio Configuration

---

## Outcome

✅ Successfully integrated Google Gemini AI into AuraGen.

✅ Backend can now send prompts and receive responses from the Gemini AI model.

---

## Next Goal

Build the JSON Generation Engine to receive structured JSON responses from Gemini AI for dynamic UI rendering.