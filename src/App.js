import React from "react";
import MarkdownNice from "markdown-nice";
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

import { GUIDE_STEPS } from "./utils/guide";

// 标题，是一个字符串
const defaultTitle = "Markdown Nice";

class App extends React.Component {
  componentDidMount() {
    const isFirstUse = window.localStorage.getItem("is_first_use") === null;

    if (isFirstUse) {
      const guide = new Driver({
        doneBtnText: "完成",
        closeBtnText: "关闭",
        nextBtnText: "前进",
        prevBtnText: "后退",
        opacity: 0.5
      });
      guide.defineSteps(GUIDE_STEPS);
      guide.start();
      window.localStorage.setItem("is_first_use", false);
    }
  }
  render() {
    return (
      <MarkdownNice
        defaultTitle={defaultTitle}
        useImageHosting={{
          url: "https://math.mdnice.com/qiniuFree",
          name: "mdnice"
        }}
      />
    );
  }
}

export default App;
