# 🚀 Dev Stack — Developer Stack Selection Tool

Dev Stack is a modern, interactive web application designed to help developers explore, compare, and assemble their ideal technology stack for software development.

---

## 🛠️ Technologies Used

* **Frontend:** React, TypeScript
* **Build Tool:** Vite
* **Styling:** CSS3 (CSS Modules / Custom Properties)
* **Icons & Assets:** SVG Icons, Custom PNGs

---

## ✨ Features

1. **Dynamic Technology Catalog & Badging:** Explore various technologies with visual category badges (e.g., Popular, Fast, Cache) and experience levels.
2. **Interactive Stack Builder:** Easily add or remove technologies from your custom stack in real-time with automatic duplicate prevention and visual feedback.
3. **Empty State & User Notifications:** Integrated `Toast` feedback system and clear empty-state visuals for seamless user experience.

---
## ❓ Frequently Asked React Questions

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets us write HTML-like code directly inside JavaScript. React uses JSX because it makes writing UI components much easier, cleaner, and faster to read.

---

### 2. What is the difference between props and state?
* **Props:** Data sent from a parent component down to a child component. It is read-only and cannot be modified by the child.
* **State:** Data created and managed inside a single component that can change over time (like when a user clicks a button).

---

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows a component to store and update data when something changes. In this project, I used `useState` in `App.tsx` to store the array of selected technologies and to control the toast notification messages.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook lets us run side-effects, like fetching data from an external source after a component loads. I used `useEffect` to fetch the technology items from `technologies.json` once when the application starts.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React identify exactly which item has changed, been added, or removed. This helps React update only that specific item instead of rendering the whole list again, keeping the app fast.

---

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different parts of the UI based on a condition (using `if` or `? :` operators). 

For example, in `Stack.tsx`, I used it to display an empty box message when no items are selected, or show the selected list when items are added:
```tsx
{selectedTechs.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <ul className="selected-list">...</ul>
)}