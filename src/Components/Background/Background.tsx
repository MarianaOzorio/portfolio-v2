import styles from "./Background.module.css";
import Doodle from "../../doodle";
import "css-doodle";
import React from "react";

function Background() {
  return (
    <div className={styles.container}>
      <Doodle
        rule={`
  --color: #000, #fff;

  @grid: 30x1 / 100vw 100vh / #141414; 
  
  :container {
    perspective: 30vmin;
    --deg: @p(-180deg, 180deg);
  }
  
  :after, :before {
    content: '';
    background: @p(--color); 
    @place: @r(100%) @r(100%);
    @size: @r(6px);
    @shape: circle;
  }

  @place: center;
  @size: 18vmin; 

  background: @m100(
    radial-gradient(@p(--color) 50%, transparent 0) 
    @r(-20%, 120%) @r(-20%, 100%) / 1px 1px
    no-repeat
  );

  will-change: transform, opacity;
  animation: scale-up 12s linear infinite;
  animation-delay: calc(-12s / @I * @i);

  @keyframes scale-up {
    0%, 95.01%, 100% {
      transform: translateZ(0) rotate(0);
      opacity: 0;
    }
    10% { 
      opacity: 1; 
    }
    95% {
      transform: 
        translateZ(35vmin) rotateZ(var(--deg));
    }
  }`}
      />
    </div>
  );
}

export default Background;
