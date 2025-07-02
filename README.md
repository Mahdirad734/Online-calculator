# React Calculator

A simple, responsive calculator built with React, featuring basic arithmetic operations, clear and backspace functionality, and neatly styled with CSS Modules (optional Bootstrap integration).

---

## 🔧 Features

- **Four basic operations**: addition, subtraction, multiplication, division
- **Decimal support**: prevents multiple decimal points
- **Clear (`C`)**: resets all state to initial
- **Backspace (`⌫`)**: deletes last digit or operator
- **Error handling**: division by zero shows `Error`
- **Responsive layout**: mobile-friendly design
- **Customizable styling**:

  - Default: CSS Modules
  - Optional: Bootstrap or Tailwind

---

## 🛠 Technologies

- **React** (with Hooks)
- **CSS Modules** for scoped styling
- **Jest** & **React Testing Library** for tests
- **Bootstrap** (optional) or **Tailwind CSS** for utility-first styling alternatives

---

## 🚀 Getting Started

### Prerequisites

- Node.js v14+ and npm/yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/react-calculator.git
   cd react-calculator
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run in development mode**

   ```bash
   npm start
   # or
   yarn start
   ```

   The app will be available at `http://localhost:3000`.

---

## 📂 Project Structure

```
react-calculator/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Calculator.jsx
│   ├── styles/
│   │   └── calculator.module.css
│   ├── tests/
│   │   └── Calculator.test.jsx
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---

## 🎨 Styling Options

### Default (CSS Modules)

The project uses **CSS Modules** (`calculator.module.css`) for scoped, maintainable styles. All class names are imported as `styles` in the component.
