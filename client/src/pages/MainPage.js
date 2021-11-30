import React from "react";

const MainPage = () => {
  return (
    <div>
      <article class="appIntroduction">
        <img
          src="https://image.freepik.com/free-vector/students-learning-foreign-language-with-vocabulary_74855-11070.jpg"
          alt="Words learning"
        />
        <h3>Learn New English Words Faster</h3>
        <p>
          Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis
          tincidunt id aliquet risus feugiat in. Auctor augue mauris augue neque
          gravida in fermentum et. Feugiat in fermentum urna.
        </p>
        <span>
          Images from
          <a href="https://www.freepik.com/">Freepik</a>
        </span>
        <button className="login-btn btn">Log In to Start</button>
        <button className="signin-btn btn">Create Account</button>
      </article>
    </div>
  );
};

export default MainPage;
