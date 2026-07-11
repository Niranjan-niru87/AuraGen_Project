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