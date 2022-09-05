import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';


interface Props {
  children: string;
  className: string;
  inline?: boolean;
  dark?: boolean;
}
function Code({ children, className = "", inline = false, dark = false }: Props) {
  const language = className.replace(/language-/, '') as Language;
  return (
    <Highlight
      {...defaultProps}

      theme={dark ? lightTheme : darkTheme}
      code={children.trim()}
      language={language || "javascript"}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => {
        return (
          <>
            {tokens.length > 0 && (
              <pre className={` relative z-10 overflow-x-auto ${inline ? "inline-block text-sm px-5 py-0 " : " py-2 text-base my-6 "} rounded-md ${className}`} style={style}>
                {tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                  >
                    {!inline && <span className="mr-5 dark:text-gray-700 text-gray-300" > {i + 1}</span>}
                    {line.map((token, key) => (
                      <span
                        key={key}
                        {...getTokenProps({ token, key })}
                      />
                    ))}
                  </div>
                ))}
              </pre>)}
          </>
        )
      }}
    </Highlight>
  )
}

export { Code };