import React, { useEffect, useRef } from 'react';

const Portfolio = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create stars
    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fill();
        
        // Update star position
        star.x += star.vx / 30;
        star.y += star.vy / 30;
        
        // Wrap the stars around the canvas
        if (star.x < 0 || star.x > canvas.width) star.x = canvas.width - star.x;
        if (star.y < 0 || star.y > canvas.height) star.y = canvas.height - star.y;
      });
      
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animate();

    // Clean up
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full bg-black"
      />
      <div className="relative z-10 max-w-4xl mx-auto p-4 text-white">
        <header className="text-center mb-8">
          <div className="mb-4">
            <img 
              src="/api/placeholder/300/300" 
              alt="Deepak VR" 
              className="rounded-full w-48 h-48 mx-auto object-cover border-4 border-white"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Deepak VR</h1>
          <p className="text-xl">Data Engineer | Mentor | Motivational Speaker</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I'm a passionate Data Engineer, Data Analyst, and a budding Cloud Engineer with 6 years of experience. 
            Currently working at Manuh Solutions Pvt Ltd, I specialize in turning raw data into actionable insights. 
            I'm also a co-founder of MH Doodle Solutions, established in August 2024. My mission is to empower others 
            by sharing my expertise and creating a collaborative learning environment in the ever-evolving tech landscape.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Data Engineering</li>
            <li>Data Analysis</li>
            <li>RDBMS</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Google BigQuery</li>
            <li>SQL</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Senior Data Engineer</h3>
              <p>Manuh Solutions | August 2023 - Present</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Co-founder</h3>
              <p>MH Doodle Solutions | August 2024 - Present</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
              <p>Boston Harbor Consulting | January 2022 - June 2023</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Programming Analyst</h3>
              <p>Shakti Infosolutions Pvt Ltd | March 2020 - December 2021</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Engineering - BE, Mechanical Engineering</h3>
            <p>Mohamed Sathak A.J.College Of Engineering | 2011 - 2015</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Mobile: 8778688005<br />
            Email: deepak.vr3011@gmail.com<br />
            LinkedIn: www.linkedin.com/in/deepak-vr-9521001a1
          </p>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
