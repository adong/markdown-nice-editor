import React from "react";
import MarkdownNice from "markdown-nice";

// 标题，是一个字符串
const defaultTitle = "Markdown Nice";

function App() {
  return (
    <MarkdownNice
      defaultTitle={defaultTitle}
    />
  );
}

export default App;