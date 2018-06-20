import React from 'react'
import Link from 'gatsby-link'
import resume from './Quinn.pdf'
console.log(resume);

const IndexPage = () => (

  <div style={{ margin: '.8rem auto', maxWidth: 620 }}>
    <div>
      <h1>
        About me
      </h1>
      <p>
      I am a front­end focused web developer/engineer. I am primarily developing in modern JavaScript (ES6), 
      using Vue and Angular. I have experience with .NET, Ionic and Flask. I want to build cool stuff!
      </p>
      <p>

        Outside of coding, I'm a <a href="http://www.cross-tables.com/results.php?p=1822" target="_blank">tournament Scrabble player</a>.
      </p>
      <p>
        If you're looking for my resume, it's <a href={resume}>here (PDF)</a>.
      </p>

    </div>

  <div>
    <h1>Projects</h1>

    <ul>
    <li>
        <p>
          <a href="http://featurerequester.herokuapp.com" target="_blank">
            <b>
              Feature Requester
            </b>
          </a>
          : This is a fairly simple project using Knockout.js and Flask. It allows you to create, update and delete
          product feature requests and display them in an attractive layout. No login is required.
          (<a href="https://github.com/quinnajames/mondain-ionic" target="_blank">GitHub source</a>)
        </p>
      </li>
      <li>
        <p>
          <a href="http://mondain.herokuapp.com" target="_blank">
            <b>
              Mondain Words
            </b>
          </a>
          : A web app to practice unscrambling words. Ionic, Angular, Typescript, Firebase.
          Success in Scrabble requires the accumulation of a vast amount of information, and some
          way to manage that complexity. The goal of Mondain is to improve the state of the art
          in those areas. You do need to login with an email address to try it.
          (<a href="https://github.com/quinnajames/feature_requester" target="_blank">GitHub source</a>)
        </p>
      </li>
    </ul>

  </div>
  <div>
    <h1>Other Projects</h1>
    <ul>
    <li>
      <p>
        <b>Lexcheck</b> (<a href="https://github.com/quinnajames/lexcheck" target="_blank">GitHub source</a>):
          A small Python utility to check typographical errors in lists against
          a lexicon you provide. Useful for word game players preparing study lists, for instance.
        </p>
      </li>

      <li>
        <p>
          <b>
            Ancient Blocks
          </b> (<a href="https://github.com/quinnajames/ancient_blocks" target="_blank">GitHub source</a>):
          A minigame made in C++ with the Allegro game library.
        </p>
      </li>
    </ul>

  </div>
  <div>
    <h1>
      Contact me
    </h1>
    <ul>
      <li>
        <p>
          Email: <a href="mailto:quinn@quinnjames.net">quinn@quinnjames.net</a>
      </p>
      </li>
      <li>
        <p>
          Phone: (843) 209<span>-6331</span>
        </p>
      </li>
      <li>
        <p>
          Twitter: <a href="https://twitter.com/quinnajames" target="_blank">quinnajames</a>
      </p>
    </li>
    <li>
      <p>
        GitHub: <a href="https://github.com/quinnajames/" target="_blank">quinnajames</a>
    </p>
  </li>

  <li>
    <p>
      LinkedIn: <a href="https://www.linkedin.com/in/quinnjamestech/" target="_blank">
      Quinn James
    </a>
  </p>
</li>
</ul>

</div>
<div>
  This site was built with the help of <a href="https://www.reactjs.org/" target="_blank">React</a>, <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and <a href="https://kyleamathews.github.io/typography.js/" target="_blank">Typography.</a>

</div>
</div>
)

export default IndexPage
