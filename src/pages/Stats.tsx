import React from 'react';
import TuiBar from '@/components/htop/TuiBar';
import TuiWindow from '@/components/htop/TuiDiv';
import FaultyTerminal from '@/components/FaultyTerminal';
import './Stats.css'

const Projects: React.FC = () => {
  return (
    <>
      <div style={{ width: '100vw', height: '100svh', position: 'fixed', zIndex: 0 }}>
        <FaultyTerminal
          scale={1.5}
          digitSize={1.2}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#111111"
          mouseReact
          mouseStrength={0.5}
          brightness={0.6}
        />
      </div>

    <main style={{marginTop: '80px', minHeight: '870px', display: 'flex'}}>

      <TuiWindow heading='Status'>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <div className='pulse'></div><span className='status'>Online</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span> Editting ThreadVault </span><div className='cursor-blink'></div>
        </div>
      </TuiWindow>

      <TuiWindow heading='Languages'>
      <div className='language-box'>
        <div className='tsx' style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          TSX
          <TuiBar progress={40} total={100}/>
        </div>
        <div className='css' style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          CSS
          <TuiBar progress={40} total={100}/>
        </div>
        <div className='cpp' style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          C++
          <TuiBar progress={40} total={100}/>
        </div>
      </div>
      </TuiWindow>


    </main>
    </>
  );
};

export default Projects;
