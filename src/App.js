import './App.css';
import Navbar from './components/Navbar'
import Header from  './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;





















/*
  # React.js: Frontent JavaScript Library to build Web UI
    Documentation: https://react.dev/learn

    Properties:
    - Create SPA: Single page application
    - Uses Virtual DOM

    - Components: Simple UI pieces which return JSX
      - Types
        - Class-based components
        - Function-based components
      - Features
        - Nested Components
        - Re-used Components
      - Export: export default ComponentName
      - Import: import ComponentName from 'RelativePath'
    - JSX: JavaScript + XML
      - 2 minor differences between JSX and HTML
        - Assign class, use 'className'
        - singleton tags need to close with a /

  React - Declarative Library (What to do?, How to do?)

  # Setup
  - Download Nodejs (+ NPM: Node Package Manager)
    - https://nodejs.org/en
  - CRA: create-react-app
    - https://www.npmjs.com/package/create-react-app
  - Create React App: npx create-react-app react-1
  - Run React App: (Within react app) npm start
*/

// Frameworks: Bootstrap, Tailwind CSS