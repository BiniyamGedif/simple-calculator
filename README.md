# Simple Calculator

A responsive calculator built with **React**, **JavaScript**, and **Vite**. It supports basic arithmetic through an interactive keypad or keyboard input, with a clean interface for desktop and mobile screens.

## Features

- Addition, subtraction, multiplication, and division
- Decimal numbers and positive/negative sign toggle
- Clear (`AC`) and backspace (`⌫`) controls
- Repeated calculations, such as `5 + 3 + 2 =`
- Division-by-zero error handling
- Keyboard support alongside clickable buttons
- Readable formatting for long decimal results
- Responsive layout for mobile and desktop screens
- No backend or external calculator libraries

## Tech Stack

- React
- JavaScript
- Vite
- CSS

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### 1. Clone the repository

```bash
git clone https://github.com/BiniyamGedif/simple-calculator.git
cd simple-calculator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal (Vite commonly uses `http://localhost:5173/`).

## Keyboard Controls

| Key | Action |
|---|---|
| `0`–`9` | Enter a number |
| `.` | Enter a decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter` | Calculate the result |
| `Backspace` | Delete the last character |
| `Escape` | Clear the calculator |

The keyboard uses the same calculator behavior as the on-screen buttons. Full-expression parsing (for example, typing `2 + 3 * 4` as one expression) is not supported; operations are entered step by step.

## Build for Production

Create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
simple-calculator/
├── public/
├── src/
│   ├── components/
│   │   ├── Display.jsx
│   │   └── Keypad.jsx
│   ├── utils/
│   │   └── calculate.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

- **`App.jsx`** manages calculator state and user interactions.
- **`Display.jsx`** renders the current value and previous operation.
- **`Keypad.jsx`** renders the calculator buttons.
- **`utils/calculate.js`** contains the arithmetic logic.
- **`App.css`** and **`index.css`** style the calculator and the overall page.

## Notes

This is a learning project focused on React component structure, state management, event handling, responsive CSS, and a basic Git/GitHub workflow. The calculator reduces common floating-point display artifacts, but it is not intended for high-precision scientific or financial calculations.

## Author

**Biniyam Gedif**

GitHub: [BiniyamGedif](https://github.com/BiniyamGedif)