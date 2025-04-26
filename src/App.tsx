import { ScratchToReveal } from "./components/magicui/ScratchToReveal";
import './App.css';
 
export function ScratchToRevealDemo() {
 
}

function App() {
  const handleComplete = () => {
    alert("Scratching complete!");
  };
  return (
    <>
      <h1>刮刮乐</h1>
      {/* Scratch to Reveal Section */}
      <ScratchToReveal
        width={300}
        height={300}
        minScratchPercentage={70}
        className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
        gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
        onComplete={handleComplete}
        
      >
        
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "14px",
          whiteSpace: "pre-wrap",    // 保留换行，同时自动换行
          maxWidth: "35vw",          // 限制最大宽度，防止横向溢出
          overflowWrap: "break-word",// 超长行也换行
          lineHeight: "1.2"    ,      // 可以适当调小行距
          userSelect: "none"  , // 禁止文字被选中
          pointerEvents: "none" // ⭐ 加这一句
        }}>{"\n"}                                
⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑
⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐
⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐
⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀
⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇
⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰
⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕
⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵
⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿
⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿
⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀
⣿⣿⣿⢻⣿⣿⣿⣿⠻⣿⣿⡿⠿⠿⠿⣿⠻⡿⠻⠿⣿⡟⠛⠛⢛⣿⣿
⣿⠏⣼⢸⡄⢿⢋⢸⣷⣇⢻⣿⣿⣿⣿⣿⡗⣥⠂⢦⣿⣭⢩⡍⣭⣽⣿
⣿⣾⣛⣸⣿⣾⣾⣈⣛⣠⣿⣤⣤⣤⣤⣼⣴⣫⣶⣌⣻⣋⣼⣇⣋⣼⣿
        </div>
      </ScratchToReveal>
    </>
  );
  
}

export default App;




