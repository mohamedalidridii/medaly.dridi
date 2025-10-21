import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Braille patterns for creating pixel art in URL
function createBraillePattern(dots) {
  let code = 0x2800;
  for (let i = 0; i < 8; i++) {
    if (dots[i]) code |= (1 << i);
  }
  return String.fromCharCode(code);
}

// Create pixel art letters
function createPixelArtName() {
  const letters = {
    'M': [
      [1,1,0,0,1,1],
      [1,1,1,1,1,1],
      [1,0,1,1,0,1],
      [1,0,0,0,0,1]
    ],
    'E': [
      [1,1,1,1,1,1],
      [1,1,0,0,0,0],
      [1,1,1,1,0,0],
      [1,1,1,1,1,1]
    ],
    'D': [
      [1,1,1,1,1,0],
      [1,1,0,0,1,1],
      [1,1,0,0,1,1],
      [1,1,1,1,1,0]
    ],
    'A': [
      [0,1,1,1,1,0],
      [1,1,0,0,1,1],
      [1,1,1,1,1,1],
      [1,1,0,0,1,1]
    ],
    'L': [
      [1,1,0,0,0,0],
      [1,1,0,0,0,0],
      [1,1,0,0,0,0],
      [1,1,1,1,1,1]
    ],
    'I': [
      [1,1,1,1,1,1],
      [0,0,1,1,0,0],
      [0,0,1,1,0,0],
      [1,1,1,1,1,1]
    ],
    'R': [
      [1,1,1,1,1,0],
      [1,1,0,0,1,1],
      [1,1,1,1,1,0],
      [1,1,0,1,1,0]
    ],
    ' ': [
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]
    ]
  };

  const name = "MED ALI DRIDI";
  let result = "";
  
  for (let charIndex = 0; charIndex < name.length; charIndex++) {
    const letter = letters[name[charIndex]] || letters[' '];
    
    for (let col = 0; col < 3; col++) {
      const x = col * 2;
      const dots = [
        letter[0][x] || 0,
        letter[1][x] || 0,
        letter[2][x] || 0,
        letter[0][x+1] || 0,
        letter[1][x+1] || 0,
        letter[2][x+1] || 0,
        letter[3][x] || 0,
        letter[3][x+1] || 0
      ];
      result += createBraillePattern(dots);
    }
  }
  
  return result;
}

// Animation: Scrolling text
let scrollPosition = 0;
function createScrollingAnimation(text, width = 30) {
  const padded = text + '░░░░░' + text;
  const visible = padded.slice(scrollPosition, scrollPosition + width);
  scrollPosition = (scrollPosition + 1) % text.length;
  return visible;
}

// Animation: Blinking effect
let blinkState = false;
function createBlinkingAnimation(text) {
  blinkState = !blinkState;
  return blinkState ? text : text.replace(/[^\u2800]/g, '░');
}

// Animation: Wave effect
let waveOffset = 0;
function createWaveAnimation(text) {
  const chars = text.split('');
  const result = chars.map((char, i) => {
    const wave = Math.sin((i + waveOffset) * 0.5);
    return wave > 0 ? char : '░';
  }).join('');
  waveOffset += 0.3;
  return result;
}

// Animation: Loading bar
let loadProgress = 0;
function createLoadingAnimation(text) {
  const totalChars = text.length;
  const visibleChars = Math.floor((loadProgress / 100) * totalChars);
  loadProgress = (loadProgress + 2) % 105;
  
  return text.slice(0, visibleChars) + '░'.repeat(totalChars - visibleChars);
}

// Animation: Glitch effect
function createGlitchAnimation(text) {
  if (Math.random() > 0.8) {
    const chars = text.split('');
    const randomIndex = Math.floor(Math.random() * chars.length);
    chars[randomIndex] = String.fromCharCode(0x2800 + Math.floor(Math.random() * 256));
    return chars.join('');
  }
  return text;
}

// Choose your animation style here!
const ANIMATION_STYLE = 'scroll'; // Options: 'scroll', 'blink', 'wave', 'loading', 'glitch', 'none'

let animationFrame = 0;
const baseText = createPixelArtName();

function updateUrl() {
  let displayText = baseText;
  
  switch(ANIMATION_STYLE) {
    case 'scroll':
      displayText = createScrollingAnimation(baseText, 40);
      break;
    case 'blink':
      displayText = createBlinkingAnimation(baseText);
      break;
    case 'wave':
      displayText = createWaveAnimation(baseText);
      break;
    case 'loading':
      displayText = createLoadingAnimation(baseText);
      break;
    case 'glitch':
      displayText = createGlitchAnimation(baseText);
      break;
    default:
      displayText = baseText;
  }
  
  const replacement = '░';
  const displayString = displayText.replace(/\u2800/g, replacement);
  
  window.history.replaceState(
    null, 
    null, 
    window.location.pathname + '#|' + displayString + '|[frame:' + animationFrame + ']'
  );
  
  animationFrame++;
}

updateUrl();

let animationInterval;
if (ANIMATION_STYLE !== 'none') {
  animationInterval = setInterval(updateUrl, 300);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (animationInterval) clearInterval(animationInterval);
  } else {
    if (ANIMATION_STYLE !== 'none') {
      animationInterval = setInterval(updateUrl, 200);
    }
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
