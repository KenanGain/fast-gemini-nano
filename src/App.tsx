import { useState } from 'react';
import './App.css';

async function doPrompt(prompt: string) {
  const session = await window.ai.createTextSession();
  const result = await session.prompt(prompt);
  console.log(result);
  return result;
}

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [runtime, setRuntime] = useState<number | null>(null);

  const handlePrompt = async () => {
    const startTime = performance.now();
    
    const response = await doPrompt(prompt);
    
    const endTime = performance.now();
    const runTime = endTime - startTime;
    
    setResult(response);
    setRuntime(runTime);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder='What is the capital of India?'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div>
        <button onClick={handlePrompt}>Prompt</button>
        {result && <p className="result">{result}</p>}
        {runtime !== null && <p className="runtime">Runtime: {runtime.toFixed(2)} ms</p>}
      </div>
      <a href="https://github.com/KenanGain" target="_blank" rel="noopener noreferrer" className="github-link">
        GitHub: KenanGain
      </a>
    </div>
  );
}

export default App;

// import { useState, useEffect, useCallback } from 'react';
// import './App.css';

// async function doPrompt(prompt: string) {
//   const session = await window.ai.createTextSession();
//   const result = await session.prompt(prompt);
//   console.log(result);
//   return result;
// }

// function App() {
//   const [prompt, setPrompt] = useState("");
//   const [result, setResult] = useState("");
//   const [runtime, setRuntime] = useState<number | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = useCallback(async (input: string) => {
//     if (input.length > 3) {
//       setIsLoading(true);
//       const startTime = performance.now();
      
//       try {
//         const response = await doPrompt(input);
        
//         const endTime = performance.now();
//         const runTime = endTime - startTime;
        
//         setResult(response);
//         setRuntime(runTime);
//       } catch (error) {
//         console.error("Error in AI prompt:", error);
//         setResult("An error occurred while processing your request.");
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       setResult("");
//       setRuntime(null);
//     }
//   }, []);

//   useEffect(() => {
//     const debounceTimer = setTimeout(() => {
//       handlePrompt(prompt);
//     }, 300);

//     return () => clearTimeout(debounceTimer);
//   }, [prompt, handlePrompt]);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder='What is the capital of India?'
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//       />
//       <div>
//         {isLoading && <p>Loading...</p>}
//         {result && <p>{result}</p>}
//         {runtime !== null && <p>Runtime: {runtime.toFixed(2)} ms</p>}
//       </div>
//     </>
//   );
// }

// export default App;

// import { useState, useEffect, useCallback } from 'react';
// import './App.css';

// async function* doPrompt(prompt: string) {
//   const session = await window.ai.createTextSession();
//   const stream = await session.prompt(prompt, { stream: true });
  
//   for await (const chunk of stream) {
//     yield chunk;
//   }
// }

// function App() {
//   const [prompt, setPrompt] = useState("");
//   const [result, setResult] = useState("");
//   const [runtime, setRuntime] = useState<number | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = useCallback(async (input: string) => {
//     if (input.length > 3) {
//       setIsLoading(true);
//       setResult("");
//       const startTime = performance.now();
      
//       try {
//         const generator = doPrompt(input);
//         let fullResponse = "";

//         for await (const chunk of generator) {
//           fullResponse += chunk;
//           setResult(fullResponse);
//         }
        
//         const endTime = performance.now();
//         const runTime = endTime - startTime;
        
//         setRuntime(runTime);
//       } catch (error) {
//         console.error("Error in AI prompt:", error);
//         setResult("An error occurred while processing your request.");
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       setResult("");
//       setRuntime(null);
//     }
//   }, []);

//   useEffect(() => {
//     const debounceTimer = setTimeout(() => {
//       handlePrompt(prompt);
//     }, 300);

//     return () => clearTimeout(debounceTimer);
//   }, [prompt, handlePrompt]);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder='What is the capital of India?'
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//       />
//       <div>
//         {isLoading && <p>Loading...</p>}
//         {result && <p>{result}</p>}
//         {runtime !== null && <p>Runtime: {runtime.toFixed(2)} ms</p>}
//       </div>
//     </>
//   );
// }

// export default App;