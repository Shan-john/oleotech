import React, { useEffect, useRef, useState } from "react";

function CircularProgress({name}) {
  const [percentage, setPercentage] = useState(0);
  const requestRef = useRef();
  const directionRef = useRef(1); // 1 for forward, -1 for backward
  const pauseRef = useRef(false);
  const pauseStartTimeRef = useRef(null);

  const values = [0, 9, 80];

  useEffect(() => {
    const pauseDurations = {
      0: 1000,
      9: 1000,
      80: 1500,
    };

    let currentIndex = 0;

    const animate = (time) => {
      if (pauseRef.current) {
        if (time - pauseStartTimeRef.current >= pauseDurations[values[currentIndex]]) {
          pauseRef.current = false;

          if (directionRef.current === 1) {
            currentIndex++;
            if (currentIndex >= values.length) {
              currentIndex = values.length - 2;
              directionRef.current = -1;
            }
          } else {
            currentIndex--;
            if (currentIndex < 0) {
              currentIndex = 1;
              directionRef.current = 1;
            }
          }

          setPercentage(values[currentIndex]);
          pauseRef.current = true;
          pauseStartTimeRef.current = time;
        }
      } else {
        pauseRef.current = true;
        pauseStartTimeRef.current = time;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Circle calculations
  const radius = 60;
  const stroke = 8;
  
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className=" flex items-center gap-2 w-50">

   
    <div className="flex items-center justify-center ">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
       
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
         stroke="#3b82f6"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.4s ease-in-out' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="18"
          fill="#111827"
        >
          {percentage}%
        </text>
      </svg>
    </div>
    <h3 className="text-[18px]">{name} </h3>
    </div>
  );
}

export default CircularProgress;
