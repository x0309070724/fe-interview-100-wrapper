import { useState, useEffect } from "react";

function ErrorDemo() {
  const [num] = useState(100);

  function clickHandler() {
    num(); // ErrorBoundary 无法监听事件报错，需要自行 try-catch
  }

  useEffect(() => {
    // throw new Error('mounted error') // ErrorBoundary 可监听渲染过程的报错
    let hd = `
        #1 js,200元 #
        #2 php,300元 #
        #9 houdunren.com # 后盾人
        #3 node.js,180元 #
     `;
    // [{name:'js',price:'200元'}]
    let lessons = hd.match(/^\s*#\d+\s+.+\s+#$/gm).map((v) => {
        console.log('v',v);
      v = v.replace(/\s*#\d+\s*/, "")
      .replace(/\s+#/, "");
      let [name, price] = v.split(",");
      return { name, price };
    });
    console.log(JSON.stringify(lessons, null, 2));
  }, []);

  return (
    <div>
      <p>error demo - functional</p>
      <button onClick={clickHandler}>error</button>
    </div>
  );
}

export default ErrorDemo;
