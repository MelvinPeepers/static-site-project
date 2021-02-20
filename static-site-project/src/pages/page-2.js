import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h1>My answers to the Take-Home exercise:</h1>
    <ol>
      <li>
        <p>Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you solved it.</p>
        <p>Answer</p>
      </li>

      <li>
        <p>What did you think of our service during the time you used it? Provide either some constructive criticism or some points that impressed you. Be honest! “It sucked” isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;)</p>
        <p>Answer</p>
      </li>

      <li>
        <p>Rank your 5 favorite, and 5 least favorite, activities from this list: <a href='https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6'>List of choices</a></p>
        <p>Answer</p>
      </li>

      <li>
        <p>Provide a link to documentation for a technical/developer-focused product, which you think are well done, and briefly explain why you think they are well done.</p>
        <p>Answer</p>
      </li>

      <li>
        <p>Why do you think SSL/HTTPS is important?</p>
        <p>Answer</p>
      </li>

      <li>
        <p>Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical internet end-users.</p>
        <p>Answer</p>
      </li>

      <li>
        <p>A customer writes in saying their “site won’t build”. Compose:</p>
        <p>Answer</p>
      </li>

      <li>
        <p> (optional/bonus) Can you set up a redirect from “/netlify/anything” to <a href="https://www.google.com/search?q=anything">https://www.google.com/search?q=anything</a></p>
        <p>Answer</p>
      </li>

      <li>
        <p>(optional/bonus) Could you give us a suggestion to improve this test or the job posting?</p>
        <p>Answer</p>
      </li>
    </ol>
    



    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
