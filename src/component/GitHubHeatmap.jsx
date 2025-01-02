import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import '../style/git.css';
const Github = () => {
const[gitYear,setGitYear]=useState(2024);
  const username = "vikraman1653763";
  const theme = {
    light: ["#ffffff56", "#99fdda", "#5dfcc4", "#00ffa6", "#02a069"],
    dark: ["#1e1e1e", "#2d333b", "#144620", "#0e4429", "#006d32"]
  };

  const labels = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    legend: {
      less: "Less",
      more: "More"
    }
  };

  return (
    <section id="git-cont">
      <h2 className='git-title'>Days I Code</h2>
        <div style={{ marginBottom: '2rem' }}>
          <h3 className='git-year'>{gitYear}</h3>
          <div className='git-conty'>

          <GitHubCalendar
            username={username}
            year={gitYear}
            blockMargin={3}
            blockRadius={3}
            blockSize={14}
            colorScheme="light"
            labels={labels}
            theme={theme}
            showWeekdayLabels={["Mon", "Wed", "Fri"]}
           
            />
            </div>

      <div className='year-container'>
      <button className='year-btn' onClick={() => setGitYear(2023)}>2023</button>
  <button className='year-btn' onClick={() => setGitYear(2024)}>2024</button>
  <button className='year-btn' onClick={() => setGitYear(2025)}>2025</button>
      </div>
        </div>
    </section>
  );
};

export default Github;
