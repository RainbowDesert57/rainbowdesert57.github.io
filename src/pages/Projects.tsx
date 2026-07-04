import React from 'react';
import { TilingWM } from '@/components/Tilingwm/Tilingwm';
import './Projects.css'
import FaultyTerminal from '@/components/FaultyTerminal';

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
          tint="#545454"
          mouseReact
          mouseStrength={0.5}
          brightness={0.6}
        />
      </div>

      <div className='terminal-container' style={{ display: 'flex', flexDirection: 'column', height: '100svh', width: '100vw' }}>
        <TilingWM />
          {/*
            I totally did not hit the hardest pause thinking about how tf do wm even work
            
            Tried simply replacing window positions, future Crucible dont forget this the next monring (PLEASE I BEG YOU)

            I'll just search what alg does hyprland use (nvim totally did not insert a useRefSnippet~ right here)

            tf is BSP, sounds similar to BSPWM

            why did I go down this path, what astronomical decision made me think this was the best idea

            dalright so Binary Split it is took like 50 mins of reading and I might start spiritually ascending any second
            
            okay so... I tried two appreaches... TOOK MORE THAN 3 HOURS... and everytime the window just either decides to fly off out of existence OR MULTIPLY LIKE JUST LEAVE THAT SPACE DAWG

            future crucible you would need some hell of engineering for this one, move ts to a whole new component bru ur cooked
          */}
      </div>
    </>
  );
};

export default Projects;
