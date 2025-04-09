import React, { useMemo } from 'react';

const AnimatedShapes = () => {
  const shapeCount = 20;
  const shapes = useMemo(() => {
    return Array.from({ length: shapeCount }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDelay: Math.random() * 10,
    }));
  }, [shapeCount]);

  return (
    <div className="shapes-container">
      {shapes.map((pos, i) => (
        <div
          key={i}
          className={`shape shape-${i % 5}`}
          style={{
            top: `${pos.top}vh`,
            left: `${pos.left}vw`,
            animationDelay: `${pos.animationDelay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

const UglyPage = () => {
  return (
    <div className="ugly-page h-screen">
      <h1 className="animated-heading glitch">Yaroslav K's page</h1>
      <div className="animated-box"></div>
      <button className="crazy-button">ggggggggggg</button>
      <p className="chaotic-text unreadable">
        ABCDEFGHIGKLMNOPQRSTUVWXYZ
      </p>
      <div className="spinning-div">!!!!!</div>
      <p className="glitch-text">
      When the spent sun throws up its rays on cloud
And goes down burning into the gulf below,
No voice in nature is heard to cry aloud
At what has happened. Birds, at least, must know
It is the change to darkness in the sky.
Murmuring something quiet in its breast,
One bird begins to close a faded eye;
Or overtaken too...
      </p>
      <div className="blurry-container">
        <p>
          You are enjoying this novelty UI design
        </p>
      </div>
      <AnimatedShapes />
    </div>
  );
};

export default UglyPage;