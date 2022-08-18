import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faGit,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section className="skills">
      <h2>skills</h2>
      <div className="skills-grid">
        <div className="skill-badge">
          <FontAwesomeIcon icon={faHtml5} size="3x" />
        </div>
        <div className="skill-badge">
          <FontAwesomeIcon icon={faCss3} size="3x" />
        </div>
        <div className="skill-badge">
          <FontAwesomeIcon icon={faJs} size="3x" />
        </div>
        <div className="skill-badge">
          <FontAwesomeIcon icon={faReact} size="3x" />
        </div>
        <div className="skill-badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            version="1.1"
            viewBox="0 0 148 90"
            width="82"
          >
            <path
              d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
              fill="black"
              fill-rule="nonzero"
            ></path>
          </svg>
        </div>
        <div className="skill-badge">
          <FontAwesomeIcon icon={faNodeJs} size="3x" />
        </div>
        <div className="skill-badge">
          <svg
            width="278"
            height="278"
            viewBox="0 0 278 278"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M161.323 28.6444C150.537 15.8469 141.249 2.84945 139.351 0.149971C139.151 -0.0499903 138.852 -0.0499903 138.652 0.149971C136.754 2.84945 127.466 15.8469 116.68 28.6444C24.0981 146.721 131.261 226.406 131.261 226.406L132.16 227.006C132.959 239.303 134.957 257 134.957 257H138.951H142.946C142.946 257 144.944 239.403 145.743 227.006L146.642 226.306C146.741 226.406 253.905 146.721 161.323 28.6444ZM138.951 224.606C138.951 224.606 134.158 220.507 132.859 218.408V218.207L138.652 89.6326C138.652 89.2326 139.251 89.2326 139.251 89.6326L145.044 218.207V218.408C143.745 220.507 138.951 224.606 138.951 224.606Z"
              fill="#012C37"
            />
          </svg>
        </div>
        <div className="skill-badge">
          <p>Express</p>
        </div>
        <div className="skill-badge">
          <FontAwesomeIcon icon={faGit} size="3x" />
        </div>
        <div className="skill-badge">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </div>
        <div className="skill-badge">
          <FontAwesomeIcon icon={faFigma} size="3x" />
        </div>
        <div className="skill-badge">
          <svg
            fill="#012C37"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100px"
            height="100px"
          >
            {" "}
            <path d="M 6 4 C 4.9 4 4 4.9 4 6 L 4 44 C 4 45.1 4.9 46 6 46 L 44 46 C 45.1 46 46 45.1 46 44 L 46 6 C 46 4.9 45.1 4 44 4 L 6 4 z M 29 14 C 35.07 14 40 18.93 40 25 C 40 31.07 35.07 36 29 36 L 24 36 L 19.5 36 C 14.26 36 10 31.74 10 26.5 C 10 21.26 14.26 17 19.5 17 C 20.11 17 20.699297 17.059922 21.279297 17.169922 C 23.269297 15.209922 25.99 14 29 14 z M 29 16 C 26.94 16 24.970859 16.700703 23.380859 17.970703 C 24.030859 18.300703 24.639219 18.700859 25.199219 19.130859 C 26.319219 18.390859 27.63 18 29 18 C 32.86 18 36 21.14 36 25 C 36 28.86 32.86 32 29 32 C 25.89 32 23.740937 29.650156 21.460938 27.160156 C 20.880938 26.520156 20.300937 25.889063 19.710938 25.289062 C 19.320938 24.899062 18.679063 24.899063 18.289062 25.289062 C 17.899062 25.679062 17.899062 26.320937 18.289062 26.710938 C 18.869063 27.280937 19.430234 27.899766 19.990234 28.509766 L 21.039062 29.650391 C 22.289063 30.980391 23.609922 32.229062 25.169922 33.039062 C 26.299922 33.629062 27.56 34 29 34 C 33.96 34 38 29.96 38 25 C 38 20.04 33.96 16 29 16 z M 19.5 19 C 15.36 19 12 22.36 12 26.5 C 12 30.64 15.36 34 19.5 34 C 20.44 34 21.360703 33.830234 22.220703 33.490234 C 21.580703 32.990234 20.989219 32.450156 20.449219 31.910156 C 20.139219 31.970156 19.82 32 19.5 32 C 16.47 32 14 29.53 14 26.5 C 14 23.47 16.47 21 19.5 21 C 21.78 21 23.700391 23.009063 25.400391 24.789062 C 25.710391 25.109062 25.999063 25.420938 26.289062 25.710938 C 26.679062 26.100938 27.320937 26.100938 27.710938 25.710938 C 28.100938 25.320938 28.100938 24.679063 27.710938 24.289062 C 27.430938 24.009062 27.139609 23.710156 26.849609 23.410156 C 26.049609 22.560156 25.160156 21.639375 24.160156 20.859375 C 23.700156 20.489375 23.219219 20.160859 22.699219 19.880859 C 21.729219 19.340859 20.67 19 19.5 19 z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Skills;
