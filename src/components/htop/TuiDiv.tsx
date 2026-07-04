type TuiWindowProps = {
  heading: string;
  children: React.ReactNode;
};

export default function TuiWindow({
  heading,
  children,
}: TuiWindowProps) {
  return (
    <div className="jetbrains-mono" style={{border: '#555 solid 2px', display: 'flex', flexDirection: 'column', padding: '0px 20px', zIndex: '1'}}>
      <div style={{transform: 'translateY(-60%) translateX(-15px)', background: 'black', padding: '0px 0px', width: 'fit-content'}}>
        -| {heading} |-
      </div>

      <div className="tui-window-content">
        {children}
      </div>
    </div>
  );
}
