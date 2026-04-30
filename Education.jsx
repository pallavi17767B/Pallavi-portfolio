function Education() {
  const education = [
    {
      year: "2023 - 2027",
      title: "B.Tech in Computer Engineering",
      place: "Shah & Anchor Kutchhi Engineering College"
    },
    {
      year: "2021 - 2023",
      title: "Higher Secondary Education",
      place: "Science Stream"
    },
    {
      year: "2019 - 2021",
      title: "Secondary Education",
      place: "School Education"
    }
  ];

  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="timeline">
        {education.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;