import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { marked } from 'marked';
import './index.css';


function Editor({id, onChange, initialText}) {
  return (
  <textarea id={id} onChange={e => onChange(e.target.value)}>{initialText}</textarea>
  )
}

function Preview({id, markdown}) {
  return (
    <div id={id} dangerouslySetInnerHTML={{__html: marked(markdown)}} />
   )
}

function App() {
const initialText = `# Markdown Previewer
## Made for fCC certificate
[Link to FreeCodeCamp](https://www.freecodecamp.org)

\`const arrow = () => bow\`

\`\`\`
function practiceCoding(){
  return success
}
\`\`\`

- List item

>  “I think everybody in this country should learn how to program a computer because it teaches you how to think.”

![javascript](https://yongzeyao.gallerycdn.vsassets.io/extensions/yongzeyao/dom-code-snippets/1.0.2/1566450649258/Microsoft.VisualStudio.Services.Icons.Default)

**Bold statement**`;

 const [text, setText] = useState(initialText)
 
 function handleInput(inputText) {
   setText(inputText)
 }
  
  return (
  <div id='app'>
    <Editor id='editor' onChange={handleInput} initialText={initialText}/>
    <Preview id='preview' markdown={marked.parse(text)}/>
  </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
