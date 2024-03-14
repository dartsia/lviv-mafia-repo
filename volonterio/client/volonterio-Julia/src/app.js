import React from 'react';
import { createRoot } from 'react-dom';
import SignUpComponent from './index.js'; 
const root = createRoot(document.getElementById('root'));

const App = () => {
    return (
        <div>
            <SignUpComponent />
        </div>
    );
}

root.render(<App />);
