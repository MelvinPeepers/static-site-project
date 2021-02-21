import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>

    <h2>Take-Home Exercise</h2>
    <ol>
      <li>
        <h4>Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you solved it.</h4>

        <p>From the list provided, I decided to go with Gatsby to build my static site. I saw that it’s based on React, which I’m most familiar with and I’ve heard of it before (although never used it) so I know it’s popular with developers. Searching Netlify, I found a step-by-step guide for setting up and deploying Gatsby <a href='https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify' rel='noreferrer' target='_blank'>here</a>. The guide was updated on March 24th, 2020, so I believe it’s fairly current.</p>

        <p>I created a repository on <a href='https://github.com/MelvinPeepers/static-site-project/tree/main/static-site-project'rel='noreferrer' target='_blank'>Github</a> for my project and cloned it locally. I also set up a branch that I worked from before pushing to Main.</p>

        <p>I had set up a default configuration of Gatsby by following the ‘Install Gatsby’ section of the Netlify guide. The guide was accurate, easy to follow, and the Gatsby Default Starter site launched locally. With the site working locally, I set out to deploy to Netlify.</p>

        <p>Since I had started with setting up my Github repository first, I skipped the section on ‘Creating your Git Repo’ and went to ‘Connecting to Netlify’. I didn’t anticipate that my directory would be slightly different and the first deployment failed. Reviewing the deploy logs, I saw that the gatsby build command couldn’t be found, which lead me to believe that since I nested my Gatsby files within another folder (static-site-project/static-site-project) I needed to add static-site-project to the ‘Base directory’ for my Deploy settings. After performing the change, the second deploy was a success.</p>

        <p>Within the Netlify settings, I changed my site name to <a href='https://mels-static-site.netlify.app/' rel='noreferrer' target='_blank'>mels-static-site</a>. I also added a custom favicon, after going over the <a href='https://www.gatsbyjs.com/tutorial/' rel='noreferrer' target='_blank'>Gatsby documentation</a> to learn the basics.</p>
      </li>

      <li>
        <h4>What did you think of our service during the time you used it? Provide either some constructive criticism or some points that impressed you. Be honest! “It sucked” isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;)</h4>

        <p>I love how Netlify has great documentation for seemly all the services and features that are provided. The documentation I've come across is easy to follow, with step-by-step instructions that accurately show what needs to be done to get up and running. I was surprised how pain-free and quick it was to get the Gatsby site deployed. In the past, I've run into issues where I didn't configure the Deploy settings properly and would get a 'Page Not Found'.</p>

        <p>By researching on the Netlify Community forums I was able to find solutions to those deploy issues. Which is another great service that Netlify offers.</p>
      </li>

      <li>
        <h4>Rank your 5 favorite, and 5 least favorite, activities from this list:</h4>

        <p className='list-text'>Here is my list of my 5 most favorite things to do:</p>

        <ul className='favorite-list'>
          <li>Dig through server logs to troubleshoot a customer's website behavior</li>
          <li>Write and maintain documentation for our software and blog posts for our website.</li>
          <li>Spot trends across many cases to improve Netlify's product and service</li>
          <li>Work with the development team to help design a new feature based on feedback from customers</li>
          <li>Help train and onboard new support teammates</li>
        </ul>

        <p className='list-text'>Here is my list of my 5 least favorite things to do:</p>

        <ul className='favorite-list'>
          <li>Respond to Netlify customers on Twitter</li>
          <li>Engage multiple users at once via chat to answer their questions and troubleshoot problems</li>
          <li>Deliver a talk to many people you don't know at a conference or meetup</li>
          <li>Create video tutorials to help teach users a specific feature or use case</li>
          <li>Receive occasional phone calls requesting support from our highest-value customers</li>
        </ul>
      </li>
      
      <li>
        <h4>Provide a link to documentation for a technical/developer-focused product, which you think are well done, and briefly explain why you think they are well done.</h4>

        <p>I think <a href='https://reactjs.org/docs/getting-started.html' rel='noreferrer' target='_blank'>React docs</a> are very well done. What I like about them is that the docs have a live JSX editor that allows you to perform small code edits and see how the code works without any setup on your end. This allows you to quickly try some examples. The tutorials in the docs also clearly explain what you're building and the sets and code to build it. The code examples are clutter-free and easy to read.</p>
      </li>

      <li>
        <h4>Why do you think SSL/HTTPS is important?</h4>

        <p>I think SSL (Secure Sockets Layer) and HTTPS are important as they protect passwords, personal and financial information on the internet. Without a secure internet, there would be a lot less confidence in doing just about anything online.</p>
      </li>

      <li>
        <h4>Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical internet end-users.</h4>
        <p>I think two major challenges around DNS configuration for less-technical internet end-users is the amount of time it takes for DNS to be updated and that DNS records can be stored in cache which can also slow down DNS being updated.</p>

        <p>It can take up to 72 hours (although usually no more than 48 hours) for all DNS registries to be updated with new information. Additionally, ISP can cache DNS records to speed up browsing which can inadvertently slow down DNS from updating for users of the ISP.</p>
      </li>

      <li>
        <h4>A customer writes in saying their “site won’t build”. Compose:</h4>
        <p>Hey @username,</p>

        <p>I would look over this support guide (https://community.netlify.com/t/support-guide-frequently-encountered-problems-during-builds/213), which explains some troubleshooting tips that may help you with your build issue.</p> 

        <p>We also recommend searching the forums with any build errors you have encountered as the question may have been asked by someone else.</p>

        <p>If you’re unable to find a solution, please provide as much information as you can on what you have already tried, the error you’re seeing, build settings and the deploy log. Thanks!</p>
      </li>

      <li>
        <h4>Can you set up a redirect from “/netlify/anything” to <a href='https://www.google.com/search?q=anything'>https://www.google.com/search?q=anything</a></h4>
        <a href='/netlify/anything'>My redirect</a>
      </li>

      <li>
        <h4>Could you give us a suggestion to improve this test or the job posting?</h4>
        <p>Answer</p>
      </li>
    </ol>
    



    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
