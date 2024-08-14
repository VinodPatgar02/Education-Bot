import React from 'react';

function Suggestions({ suggestions, onSelect }) {
    return ( <
        div className = "suggestions-container" > {
            suggestions.map((suggestion, index) => ( <
                button key = { index }
                onClick = {
                    () => onSelect(suggestion) } > { suggestion } <
                /button>
            ))
        } <
        /div>
    );
}

export default Suggestions;