import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{ margin: '.8rem auto', maxWidth: 620 }}>
    <div>
      <h1>
        About me
      </h1>
      <p>
        I'm a front-end web developer, with my greatest focus on JS/Angular/Ionic. I've always had a passion for knowledge of all
        kinds. Now, I'm excited for the potential for web applications to manage complexity and transmit
        useful knowledge to users.
      </p>
      <p>

        Outside of coding, I'm a <a href="http://www.cross-tables.com/results.php?p=1822">tournament Scrabble player</a>,
        and I wrote <a href="resource/the-devil-in-the-shape-of-a-german-causes-and-conceptions.html">an award-winning essay</a> about European
        witch trials.
      </p>
      <p>
        If you're looking for my resume, it's <a href="http://www.volucris.space/resource/QuinnJamesResume.pdf">here (PDF)</a>.
      </p>

    </div>

    <div>
      <h1>Technologies</h1>
      <p>
        I'm most experienced with modern <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>
      , <a href="https://www.typescriptlang.org/">TypeScript</a>,
      and <a href="http://angular.io/">Angular</a>.
      I've built an app, <a href="http://mondain.herokuapp.com">Mondain Words</a>, using Typescript, Angular, and <a href="https://ionicframework.com/">Ionic</a>                            with a <a href="https://firebase.google.com/">Firebase</a> backend. The app also uses <a href="https://github.com/angular/angularfire2">AngularFire</a>                            for authentication.
    </p>
    <p>
      I also have some experience with non-JS languages. For data and string manipulation, I
      like <a href="https://www.python.org/">Python</a>&mdash;I used it to coerce SQLite data into JSON and then rearrange that data for Mondain.
      I also spent a good deal of time with C#/.NET.
    </p>

  </div>
  <div>
    <h1>Projects</h1>

    <ul>
      <li>
        <p>
          <a href="http://mondainwords.herokuapp.com">
            <b>
              Mondain Words
            </b>
          </a>
          : A web app to practice unscrambling words. Ionic/Angular/Typescript/Firebase.
          Success in Scrabble requires the accumulation of a vast amount of information, and some
          way to manage that complexity. The goal of Mondain is to improve the state of the art
          in that areas. This app is still in an alpha stage of development. Source code <a href="https://github.com/quinnajames/mondain-ionic">here</a>.
        </p>
      </li>
      <li>
        <p>
          <a href="http://www.volucris.space/kanji-quiz/kanji.html">
            Kanji Quiz
          </a>
          : Practice recognizing Japanese kanji characters. Customize whether
          to respond with English or Japanese <i>on</i> or <i>kun</i> readings, and the font size.
          JS/JQuery. Source code <a href="https://github.com/quinnajames/kanji-quiz">here.</a>
      </p>
    </li>
    <li>
      <p>
        <b>Lexcheck</b> (<a href="https://github.com/quinnajames/lexcheck">GitHub source</a>):
          A small Python utility to check typographical errors in lists against
          a lexicon you provide. Useful for word game players preparing study lists, for instance.
        </p>
      </li>

      <li>
        <p>
          <b>
            Ancient Blocks
          </b> (<a href="https://github.com/quinnajames/ancient_blocks">GitHub source</a>):
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
          Twitter: <a href="https://twitter.com/quinnajames">quinnajames</a>
      </p>
    </li>
    <li>
      <p>
        Github: <a href="https://github.com/quinnajames/">quinnajames</a>
    </p>
  </li>

  <li>
    <p>
      LinkedIn: <a href="https://www.linkedin.com/in/quinnjamestech/">
      Quinn James
    </a>
  </p>
</li>
<li>
  <p>
    Email: <a href="mailto:quinn@quinnjames.net">quinn@quinnjames.net</a>
</p>
</li>
<li>
  <p>
    Phone: (843) 209-6331
  </p>
</li>
</ul>

</div>
<div>
  This site was built with <a href="https://www.gatsbyjs.org/">Gatsby.js</a> and <a href="https://kyleamathews.github.io/typography.js/">Typography.</a>

</div>
</div>
)

export default IndexPage
