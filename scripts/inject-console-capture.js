const fs = require('fs');
const path = require('path');

function injectConsoleCapture() {
  const outDir = path.join(process.cwd(), '.next/server/app');
  const scriptPath = '/dashboard-console-capture.js';
  const scriptTag = `<script src="${scriptPath}"></script>`;

  function processHtmlFiles(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processHtmlFiles(filePath);
      } else if (file.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (!content.includes(scriptPath)) {
          content = content.replace('</head>', `${scriptTag}</head>`);
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Injected console capture into: ${filePath}`);
        }
      }
    });
  }

  processHtmlFiles(outDir);
  console.log('Console capture injection complete!');
}

injectConsoleCapture();