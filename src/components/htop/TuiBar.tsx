import './TuiBar.css'
function TuiBar({
  progress,
  total,
}: {
  progress: number;
  total: number;
}) {
  const width = 24;
  const filled = Math.round((progress / total) * width);

  return (
<span className="jetbrains-mono" style={{fontSize: '1.2rem', display: 'flex', alignItems: 'center'}}>
  [
  <span className="bar" style={{fontSize: '1rem'}}>
      {"|".repeat(filled)}
  </span>
      {"\u00A0".repeat(width - filled)}
  ]
</span>

  );
}

export default TuiBar;
