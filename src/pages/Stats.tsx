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
      <h4>
        <span className='online-indicator bitcount'>•</span>
        <span className='status-text bitcount'>Online</span>
        {
          /*
            * get status from hackatime
          */
        }
      </h4>
      </div>
      <div className='current-project-container'>
        <span className='current-project-text'>currently working on</span>
        <span className='current-project'>LockIn</span>
      </div>
    </TuiWindow>
  </div>

  <div className="projects-card">
    <TuiWindow heading="Projects">
      <h4 className='bitcount'> Total Time: 3hrs </h4>
      <div className='project-bar'>
        <p className='project-bar-name'> project name </p>
        <div className='tui-bar-container'>
          <TuiBar progress={50} total={100} />
        </div>
        <p className='project-bar-percentage'> 50% </p>
      </div>
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
