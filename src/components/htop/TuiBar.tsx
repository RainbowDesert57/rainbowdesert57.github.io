import "./TuiBar.css";

function TuiBar({
  progress,
  total,
}: {
  progress: number;
  total: number;
}) {
  const width = 24;
  const filled = Math.floor((progress / total) * width);

  return (
    <span className="jetbrains-mono tui-bar">
      <span className="filled">{"⣿".repeat(filled)}</span>
      <span className="empty">{"⣀".repeat(width - filled)}</span>
    </span>
  );
}

export default TuiBar;
