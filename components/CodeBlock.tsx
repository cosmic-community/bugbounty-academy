import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function CodeBlock({ inline, className, children }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''

  if (inline) {
    return <code className={className}>{children}</code>
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      PreTag="div"
      customStyle={{
        margin: '1rem 0',
        borderRadius: '0.5rem',
      }}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}