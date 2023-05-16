import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";

interface Props {
  children: string;
  className: string;
  inline?: boolean;
  dark?: boolean;
}
function Code({
  children,
  className = "",
  inline = false,
  dark = false,
}: Props) {
  const language = className.replace(/language-/, "") as Language;
  const [copy, setCopy] = React.useState(false);
  return (
    <div className="relative code-block">
      <button
        className="copy-button transition-opacity opacity-0 absolute top-2 right-5 z-50"
        onClick={() => {
          navigator.clipboard.writeText(children.trim());
          setCopy(true);
          setTimeout(() => {
            setCopy(false);
          }
            , 10000);
        }}
      >
        {copy ? "Copied!" : "Copy"}
      </button>
      <Highlight
        {...defaultProps}
        theme={dark ? lightTheme : darkTheme}
        code={children.trim()}
        language={language || "javascript"}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          return (
            <>
              {tokens.length > 0 && (
                <pre
                  className={` relative overflow-x-auto ${
                    inline
                      ? "inline-block text-sm px-5 py-0 "
                      : " py-2 text-base my-6 "
                  } rounded-md ${className}`}
                  style={style}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {!inline && (
                        <span
                          className={` ${
                            i >= 9 ? "mr-3" : "mr-5"
                          }  dark:text-gray-700 text-gray-300`}
                        >
                          {" "}
                          {i + 1}
                        </span>
                      )}
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </>
          );
        }}
      </Highlight>
    </div>
  );
}

export { Code };
