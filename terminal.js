document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  // Command database built from your profile & resume
  const commands = {
    help: `
      <span class="highlight">ls</span> - List portfolio sections / files<br/>
      <span class="highlight">cat [file]</span> - View details (e.g., 'cat research.txt', 'cat projects.txt')<br/>
      <span class="highlight">skills</span> - List all technical proficiencies<br/>
      <span class="highlight">contact</span> - Display contact details & links<br/>
      <span class="highlight">clear</span> - Clear the terminal screen
    `,
    ls: `
      about.txt &nbsp;&nbsp; projects.txt &nbsp;&nbsp; research.txt &nbsp;&nbsp; skills.txt &nbsp;&nbsp; certs.txt
    `,
    'cat about.txt': `
      <strong>Faiqa Abid</strong> | Computer Science Undergraduate @ UCP<br/>
      CGPA: 3.60 | Seeking Associate Software Engineer roles.<br/>
      Focus: Full Stack Web Dev, Machine Learning, Cybersecurity, Cloud.
    `,
    'cat projects.txt': `
      1. AI Credit Card Fraud Intelligence Platform (React, FastAPI, Random Forest, SMOTE)<br/>
      2. Spotify Hit Song Prediction (Decision Trees, Scikit-Learn)<br/>
      3. ReadSmart AWS Cloud Bookstore (AWS Infrastructure Deployment)<br/>
      4. Secure Prompting & Avatar Learning FYP (React, FastAPI, DistilBERT)<br/>
      5. Smart Campus Network Architecture (Cisco OSPF, VLANs)<br/>
      6. C++ Library Management & Trie Data Structure
    `,
    'cat research.txt': `
      • Optimizing Edge-Cloud RAG for Industrial IoT (Vector Cache Coherency)<br/>
      • Data Poisoning Attacks on Fine-tuned LLMs (DistilBERT Security)
    `,
    skills: `
      • Languages: C++, Python, JavaScript, SQL, HTML/CSS<br/>
      • Frameworks: ReactJS, FastAPI, Tailwind CSS<br/>
      • ML & Data: PyTorch, Scikit-Learn, Pandas, NumPy, SMOTE<br/>
      • Cloud & Cyber: AWS, Google Cloud, Wireshark, Cisco Packet Tracer
    `,
    contact: `
      • Email: faiqaabid422@gmail.com<br/>
      • LinkedIn: linkedin.com/in/faiqaabid<br/>
      • GitHub: github.com/faiqaabid
    `
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      
      if (cmd === 'clear') {
        output.innerHTML = '';
      } else if (commands[cmd]) {
        output.innerHTML += `<div class="cmd-line"><span class="prompt">$ ${cmd}</span></div><div>${commands[cmd]}</div><br/>`;
      } else if (cmd === '') {
        // Do nothing on empty enter
      } else {
        output.innerHTML += `<div class="cmd-line"><span class="prompt">$ ${cmd}</span></div><div>Command not found. Type <span class="highlight">'help'</span> for available options.</div><br/>`;
      }
      
      input.value = '';
      // Auto-scroll terminal body to bottom
      const terminalBody = document.querySelector('.terminal-body');
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });
});