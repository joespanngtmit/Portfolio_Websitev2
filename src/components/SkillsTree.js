import React, { useEffect } from 'react';
import './SkillsTree.css';

const CherryBlossomTree = () => {
  useEffect(() => {
    // Function to create a petal
    const createPetal = (x, y) => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = (x || Math.random() * 100) + '%'; // Default to random x if x is not provided
      petal.style.top = (y || -10) + 'px'; // Default to random y if y is not provided
      
      const scale = 0.8 + Math.random() * 0.4;
      const rotation = Math.random() * 360;
      petal.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
      
      document.querySelector('.tree-container').appendChild(petal);
      petal.style.animation = `falling ${5 + Math.random() * 5}s linear`;
      
      setTimeout(() => petal.remove(), 10000); // Remove after animation
    };

    // Interval-based petal shower
    const intervalId = setInterval(() => {
      createPetal(); // Create petal at random location
    }, 300);

    // Handle the click event to create petals at specific locations
    const handleBranchClick = (e) => {
      // Get the tree container and branch element
      const treeContainer = document.querySelector('.tree-container');
      const rect = treeContainer.getBoundingClientRect();
      
      // Calculate x and y position relative to the container
      const x = ((e.clientX - rect.left) / rect.width) * 100; // Percentage of the container width
      const y = e.clientY - rect.top; // Exact y position relative to the container
      
      // Generate multiple petals upon click, slightly staggered
      for (let i = 0; i < 10; i++) {
        setTimeout(() => createPetal(x, y), i * 50);
      }
    };

    // Add event listener to each branch element
    document.querySelectorAll('.branch').forEach(branch => {
      branch.addEventListener('click', handleBranchClick);
    });

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      document.querySelectorAll('.branch').forEach(branch => {
        branch.removeEventListener('click', handleBranchClick);
      });
    };
  }, []);

  return (
    <div className="tree-container">
      <svg viewBox="0 0 400 500" width="400" height="500">
        <defs>
          <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#5D4037' }} />
            <stop offset="50%" style={{ stopColor: '#8B4513' }} />
            <stop offset="100%" style={{ stopColor: '#3E2723' }} />
          </linearGradient>
          
          <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#795548' }} />
            <stop offset="50%" style={{ stopColor: '#A0522D' }} />
            <stop offset="100%" style={{ stopColor: '#5D4037' }} />
          </linearGradient>

          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="2" dy="2" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <pattern id="barkTexture" patternUnits="userSpaceOnUse" width="20" height="20">
            <path d="M0 0h20v20H0z" fill="#8B4513" />
            <path d="M0 0l20 20M20 0L0 20" stroke="#6D4C41" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>

        <g className="tree">
          <path className="trunk-shadow"
                d="M200 400 L200 300 C200 250 200 250 200 200"
                fill="none"
                stroke="#3E2723"
                strokeWidth="25"
                strokeLinecap="round"
                opacity="0.3"
                transform="translate(5,5)" />

          <g className="trunk">
            <path d="M200 400 L200 300 C200 250 200 250 200 200"
                  fill="none"
                  stroke="url(#trunkGradient)"
                  strokeWidth="22"
                  strokeLinecap="round" />
            
            <path d="M200 400 L200 300 C200 250 200 250 200 200"
                  fill="none"
                  stroke="#A0522D"
                  strokeWidth="18"
                  strokeLinecap="round"
                  opacity="0.5" />
          </g>

          <g className="primary-branches">
            <path className="branch primary-branch"
                  d="M200 250 C230 230 260 220 300 230"
                  fill="none"
                  stroke="url(#branchGradient)"
                  strokeWidth="15"
                  strokeLinecap="round" />
            
            <path className="branch primary-branch"
                  d="M200 250 C170 230 140 220 100 230"
                  fill="none"
                  stroke="url(#branchGradient)"
                  strokeWidth="15"
                  strokeLinecap="round" />
          </g>

          <g className="secondary-branches">
            <path className="branch secondary-branch"
                  d="M300 230 C320 200 330 180 340 160"
                  fill="none"
                  stroke="url(#branchGradient)"
                  strokeWidth="10"
                  strokeLinecap="round" />
            <path className="branch secondary-branch"
                  d="M300 230 C280 200 270 180 260 160"
                  fill="none"
                  stroke="url(#branchGradient)"
                  strokeWidth="10"
                  strokeLinecap="round" />
            <path className="branch secondary-branch"
                  d="M100 230 C80 200 70 180 60 160"
                  fill="none"
                  stroke="url(#branchGradient)"
                  strokeWidth="10"
                  strokeLinecap="round" />
            <path className="branch secondary-branch"
                  d="M100 230 C120 200 130 180 140 160"
                  fill="none"
                  stroke="url(#branchGradient)"
                  strokeWidth="10"
                  strokeLinecap="round" />
          </g>

          <g className="branch-nodes">
            <circle className="branch-node" cx="200" cy="250" r="12" fill="url(#trunkGradient)" />
            <circle className="branch-node" cx="300" cy="230" r="10" fill="url(#branchGradient)" />
            <circle className="branch-node" cx="100" cy="230" r="10" fill="url(#branchGradient)" />
            
            <circle className="branch-node" cx="340" cy="160" r="8" fill="url(#branchGradient)" />
            <circle className="branch-node" cx="260" cy="160" r="8" fill="url(#branchGradient)" />
            <circle className="branch-node" cx="140" cy="160" r="8" fill="url(#branchGradient)" />
            <circle className="branch-node" cx="60" cy="160" r="8" fill="url(#branchGradient)" />
          </g>

          <g className="blossoms">
            <g className="blossom">
              <circle cx="340" cy="160" r="15" fill="#FFB7C5" />
              <circle cx="340" cy="160" r="5" fill="#FF69B4" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default CherryBlossomTree;
