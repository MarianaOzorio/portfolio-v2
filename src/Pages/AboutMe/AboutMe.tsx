import styles from "./AboutMe.module.css";

function AboutMe() {
  const educationList = [
    {
      course: "Comunicação Social - Publicidade e Propaganda",
      institution: "Unifoa",
      graduationYear: "Dez 2015",
    },
    {
      course: "Sistemas pra Internet",
      institution: "SENAC",
      graduationYear: "Mar 2023",
    },
  ];

  return (
    <div className={styles.aboutMeWrapper}>
      <div className={styles.textsContainer}>
        <div className={styles.educationWrapper}>
          <h3>formação</h3>
          {educationList.map((education) => (
            <div key={education.course}>
              <h4>{education.course}</h4>
              <span>{education.institution}</span>
              <p>{education.graduationYear}</p>
            </div>
          ))}
        </div>
        <div className={styles.experiences}>
          <h3>experiência</h3>
          <article className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
            cum quaerat nihil culpa molestias eius, adipisci aspernatur
            accusantium temporibus. Voluptatibus, sequi. Repudiandae error
            provident, perspiciatis sed dolor officiis laborum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsam, magni deserunt,
            officia distinctio, odio esse sint eveniet voluptatem iure nesciunt
            aperiam dolores placeat dignissimos quam quisquam consequuntur
            cupiditate vero velit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam nemo cum quaerat nihil culpa molestias eius,
            adipisci aspernatur accusantium temporibus. Voluptatibus, sequi.
            Repudiandae error provident, perspiciatis sed dolor officiis
            laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam, magni deserunt, officia distinctio, odio esse sint eveniet
            voluptatem iure nesciunt aperiam dolores placeat dignissimos quam
            quisquam consequuntur cupiditate vero velit.
          </article>
        </div>
        <div className={styles.skills}>
          <h3>habilidades</h3>
          <p>
            html5, css3, sass, javascript, typescript, react, react testing,
            cypress, figma, git, metodologias ágeis
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
