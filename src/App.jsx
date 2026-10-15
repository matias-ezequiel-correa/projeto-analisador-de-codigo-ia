import { useState } from "react"
import { analyzeCode } from "./services/gemini";
import './App.css';

function parseResult(text) {
  const parts = text.split('✅');
  if (parts.length < 2) return null;

  const clean = (s) =>
    s.replace('❌', '').replace(/^\s*[^:\n]{0,40}:\s*/, '').trim();

  return {
    problem: clean(parts[0]),
    solution: clean(parts[1]),
  };
}

function App() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const handleAnalyze = async () => {
    if (!code.trim()) return

    setResult('')
    setError('')
    setLoading(true)

    try {
      const analysis = await analyzeCode(code)
      setResult(analysis)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  };

  const handleClear = () => {
    setCode('')
    setResult('')
    setError('')
  };

  const parsed = result ? parseResult(result) : null;

  return (
    <main>
      <header className="header">
        <span className="logo">
          <i className="fas fa-code"></i> CodeAnalyzer
        </span>

        <button className="clear-button" onClick={handleClear}>
          <i className="fas fa-rotate-left"></i> Limpar
        </button>
      </header>
      <div className="container">
        <h1 className="title">
          Analisador de código com IA🤖
        </h1>
        <p className="subtitle">
          Cole seu código e descubra como melhorá-lo
        </p>

        <div className="input-group">
          <textarea className="code-textarea" placeholder="Cole seu código aqui (JavaScript, HTML, CSS, etc...)"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
          ></textarea>
        </div>

        <button className="analyze-button"
          onClick={handleAnalyze}
          disabled={!code.trim() || loading}
          aria-busy={loading}
        >
          {loading ? "Analisando código..." : "Analisar código"}
        </button>

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        {result && (
          <div className="result-container">
            <h2 className="result-title">Análise do código</h2>

            {parsed ? (
              <>
                <div className="finding finding--problem">
                  <span className="finding-label">Principal problema</span>
                  {parsed.problem}
                </div>
                <div className="finding finding--solution">
                  <span className="finding-label">Solução rápida</span>
                  {parsed.solution}
                </div>
              </>
            ) : (
              <div className="result-content">
                {result}
              </div>
            )}
          </div>
        )}
      </div>
      <footer className="footer">
        <div className="social">
          <a href="https://www.linkedin.com/in/matias-ezequiel-correa/" target="_blank" rel="noopener noreferrer" title="Linkedin de Matías">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/maticorrea10/" target="_blank" rel="noopener noreferrer" title="Instagram de Matías">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/matias-ezequiel-correa" target="_blank" rel="noopener noreferrer" title="GitHub de Matías">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://matias-ezequiel-correa.github.io/Portfolio1-MatiasCorrea/" target="_blank" rel="noopener noreferrer" title="Portfólio de Matías">
            <i className="fas fa-folder-open"></i>
          </a>
        </div>

        <p className="footer-text">
          As análises são geradas por inteligência artificial e podem conter erros. Revise as sugestões antes de aplicá-las ao seu código.
        </p>
        <p className="footer-text">
          © 2026 Matías Correa. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}

export default App