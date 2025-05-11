import * as React from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

const element = (
  <div>
    <h1>hello World!</h1>
    <p>Reactを学習中!</p>
  </div>
)



// Render your React component instead
const root = createRoot(document.getElementById('app')!);
root.render(element);
