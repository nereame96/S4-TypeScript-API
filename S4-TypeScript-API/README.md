# **🚀 S4. API: Humor & Productivity App**

This project is a web application built with **TypeScript** and **Vite** designed to measure the impact of humor on daily productivity by showing users a variety of jokes and current weather information.

It follows strict modern development standards, including modular architecture and comprehensive unit testing.

## **📋 Key Features & Requirements**

The project successfully implements the following core functionalities:

### **Implemented Features:**

* **Joke Display:** Fetches and displays a random joke upon loading and via button click. (Completed)  
* **Joke Alternation:** Alternates randomly between two external joke APIs (Dad Jokes / Chuck Norris). (Completed)  
* **Data Tracking:** Tracks user feedback in an array (reportJokes) with a score (1-3) and ISO date. (Completed)  
* **Weather API:** Fetches, processes, and displays current weather information upon app start. (Completed)

## **🛠️ Technology Stack**

The project relies on a modular architecture to ensure separation of concerns:

* **Language:** TypeScript  
* **Bundler/Dev Server:** Vite  
* **Package Manager:** npm  
* **Testing Framework:** Vitest  
* **Architecture:** Modular ES6 (Separation of Concerns: Logic is outside main.ts).
* **Structure and Style:** HTML5 and CSS3.

### **Core Modules:**

* **main.ts**: UI Coordinator. Manages DOM listeners, application state (reportJokes), and calls utility functions.  
* **utils.ts**: Pure logic for processing data (e.g., getRandomJoke, getProccesedWeather).  
* **Interfaces**: Located in src/interfaces/ for strict data contracts.

## **📂 Project Structure**

The file layout separates logic, interfaces, and testing files for clarity and maintainability:

S4-TypeScript-API  
├──public  
├──src  
│    ├──interfaces        \<-- Data Contracts (TypeScript Interfaces)  
│    │   ├──chuckNorrisJoke.ts  
│    │   ├──dadJoke.ts  
│    │   └──weatherForecast.ts  
│    ├──styles  
│    ├──createReportObject.ts  
│    ├──fetchChuckJoke.ts   \<-- API Calls  
│    ├──fetchJoke.ts        \<-- API Calls  
│    ├──fetchWeather.ts     \<-- API Calls  
│    ├──main.ts             \<-- Application Entry Point / UI Coordination  
│    └──utils.ts            \<-- Pure Logic (e.g., getRandomJoke, getProccesedWeather)  
├──test                     \<-- Unit Tests (Vitest)  
│    ├──fetchJoke.test.ts  
│    └──utils.test.ts       \<-- Logic Tests (Coordination, Weather, Reports)  
└──index.html

## **🚀 Getting Started**

To set up the project locally:

### **1\. Clone Repository**

Use Git to clone the project:

git clone \[https://github.com/nereame96/S4-TypeScript-API.git\](https://github.com/nereame96/S4-TypeScript-API.git)  
cd S4-TypeScript-API

### **2\. Installation**

Install all required Node.js dependencies:

npm install

### **3\. Run Development Server**

Start the Vite development server to view the app in your browser:

npm run dev

## **✅ Testing**

The project uses Vitest for rigorous unit testing, ensuring the asynchronous and transformation logic is bug-free.

### **Run Tests**

Execute all test suites:

npm test

### **Advanced Testing Strategy Highlights:**

* **Asynchronous Isolation:** All network calls are simulated using **vi.spyOn(globalThis, 'fetch')**.  
* **Logic Control:** The random joke selection logic is fully tested by controlling **Math.random()** to guarantee 100% coverage of the if/else branches.  
* **Data Integrity:** The date function (new Date()) is controlled using **vi.useFakeTimers()** to ensure predictable report generation.

## **Author**

**Nerea Medina Carrasco**

https://github.com/nereame96

