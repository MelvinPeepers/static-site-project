import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>

    <h1>Hello!</h1>
    <p>Welcome to my Static Site.</p>
    <p>I’m currently a support engineer at Callcentric, a Voice Over Internet Protocol provider. I provide assistance in a wide variety of areas from on-boarding new customers, billing and product questions, to more technical issues such as debugging Session Initiation Protocol logs, configuring SIP user agents, and helping customers with troubleshooting issues with their devices and networks. Recently I’ve been working with a project manager and providing feedback on new support tools that allow all the support engineers respond faster to customers.</p>
										
    <p>To improve my technical knowledge, I enrolled in Lambda School, learned Full-Stack Web Development and graduated last June. While there I learned Git, HTML, JavaScript and Python. I was able to apply the concepts I learned to develop websites and web apps and deploy them using Netlify.</p>

    <Link to="/page-2/">Go here for my answers.</Link> <br />

  </Layout>
)

export default IndexPage
