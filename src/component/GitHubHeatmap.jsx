import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../style/git.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // Optional for default styles

const GitHubHeatmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
    });
  }, []);

  const [contributions, setContributions] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year

  
  // Function to fetch contributions based on the selected year
  const fetchContributions = async (year) => {
    const username = "vikraman1653763"; // Your GitHub username

    // Set start and end dates for the selected year
    const startDate = new Date(year, 0, 1); // January 1st of the selected year
    const endDate = new Date(year + 1, 0, 0); // December 31st of the selected year

    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection(from: "${startDate.toISOString()}", to: "${endDate.toISOString()}") {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        console.error("Failed to fetch data:", response.statusText);
        return;
      }

      const data = await response.json();
      const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;

      // Flatten the data into a single array of contributions
      const formattedData = weeks
        .flatMap((week) => week.contributionDays)
        .map((day) => ({
          date: day.date,
          count: day.contributionCount,
        }));

      setContributions(formattedData);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  // Fetch contributions when the component mounts or when the year changes
  useEffect(() => {
    fetchContributions(selectedYear);
  }, [selectedYear]);

  // Apply Tippy.js tooltips after the component is rendered
  useEffect(() => {
    tippy('[data-tooltip]', {
      content: (el) => el.getAttribute('data-tooltip'),
      theme: 'light',
      delay:[500,100],
      placement: 'top',
    });
  }, [contributions]);

  return (
    <section className="git-box">
      <div className="git-container">
        <h2 className="git-title">Days I Code</h2>

        <section className="git-commit" data-aos="fade-up">
          <CalendarHeatmap
            startDate={new Date(selectedYear, 0, 1)} // January 1st of the selected year
            endDate={new Date(selectedYear + 1, 0, 0)} // December 31st of the selected year
            values={contributions}
            tooltipDataAttrs={(value) => ({
              'data-tooltip': value
                ? `Contributions: ${value.count} on ${new Date(value.date).toLocaleDateString()}`
                : 'No contributions',
            })}
            classForValue={(value) => {
              if (!value || value.count === 0) {
                return "color-empty";
              }
              return `color-scale-${Math.min(value.count, 4)}`;
            }}
          />
        </section>

        {/* Buttons to change the year */}
        <div className="git-btn">
          <button onClick={() => setSelectedYear(2023)} data-aos="fade-up" data-aos-delay="100">
            2023
          </button>
          <button onClick={() => setSelectedYear(2024)} data-aos="fade-up" data-aos-delay="200">
            2024
          </button>
          <button onClick={() => setSelectedYear(2025)} data-aos="fade-up" data-aos-delay="300">
            2025
          </button>
        </div>
      </div>
    </section>
  );
};

export default GitHubHeatmap;
