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

<main className="dashboard">
  <div className="status-card">
    <TuiWindow heading="Status">
      <div className='status-head'>
        <span className='online-indicator'>•</span>
        <span className='status-text'>Online</span>
        {
          /*
            * get status from hackatiem
          */
        }
      </div>
      <div className='current-project-container'>
        <span className='current-project-text'>currently working on</span>
        <span className='current-project'>LockIn</span>
      </div>
    </TuiWindow>
  </div>

  <div className="projects-card">
    <TuiWindow heading="Projects">
      ...
    </TuiWindow>
  </div>

  <div className="music-card">
    <TuiWindow heading="Music">
      ...
    </TuiWindow>
  </div>

  <div className="coding-card">
    <TuiWindow heading="Coding Activity">
      ...
    </TuiWindow>
  </div>

  <div className="discord-card">
    <TuiWindow heading="Discord">
      ...
    </TuiWindow>
  </div>

  <div className="github-card">
    <TuiWindow heading="GitHub">
      ...
    </TuiWindow>
  </div>
</main>
    </>
  );
};

export default Projects;
