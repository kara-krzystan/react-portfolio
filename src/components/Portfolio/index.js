import React from 'react';
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section class="portfolio d-flex flex-column">

      <div class="card p-2">
        <img class="card-img-top"
          src={`${process.env.PUBLIC_URL}LookUp-new.png`}
          alt="lookUp"
        />
        <div class="card-body">
        <Link to={{ pathname: "https://github.com/kara-krzystan/lookup-by-ben-kara-kristin" }} target="_blank">
            <button>GitHub</button>
          </Link>
          <Link to={{ pathname: "https://benmcrae5.github.io/lookup-by-ben-kara-kristin" }} target="_blank">
            <button>Website</button>
          </Link>
        </div>
      </div>
      <div class="card p-2">
        <img class="card-img-top"
          src={`${process.env.PUBLIC_URL}make-a-point-app.png`}
          alt="lookUp"
        />
        <div class="card-body">
        <Link to={{ pathname: "https://github.com/kara-krzystan/Team-Project-Wk15" }} target="_blank">
            <button>GitHub</button>
          </Link>
          <Link to={{ pathname: "https://team-project-wk15.herokuapp.com/" }} target="_blank">
            <button>Website</button>
          </Link>
        </div>
      </div>
      <div class="card p-2">
        <img class="card-img-top"
          src={`${process.env.PUBLIC_URL}placeholder_3_600.jpg`}
          alt="lookUp"
        />
        <div class="card-body">
        <Link to={{ pathname: "https://github.com/kara-krzystan" }} target="_blank">
            <button>GitHub</button>
          </Link>
          <Link to={{ pathname: "https://github.com/kara-krzystan" }} target="_blank">
            <button>Website</button>
          </Link>
        </div>
      </div>


    </section>


  );
}

export default Portfolio;
