import React from 'react';

export default function Text3D() {
  const style = {
    fontSize: '80px',
    fontWeight: '900',
    color: '#00FFA6',
    textShadow: `
      1px 1px 0 #000,
      2px 2px 0 #222,
      3px 3px 0 #444,
      4px 4px 0 #666,
      5px 5px 5px rgba(0,0,0,0.5)
    `,
    display: 'inline-block',
    transformStyle: 'preserve-3d',
    perspective: '800px',
    userSelect: 'none',
    animation: 'rotateHorizontal 5s linear infinite',
  };

  return (
    <>
      <style>{`
        @keyframes rotateHorizontal {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        .code-box {
          padding: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 10%;
          right: 5%;
        }
          @media screen and (max-width: 1024px) {
          .code-box {
            display: none;
          }
        }

      `}</style>

      <div className="code-box">
        <div style={style}>
          {'</>'}
        </div>
      </div>
    </>
  );
}
