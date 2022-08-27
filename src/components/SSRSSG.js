import React from 'react'
import { Link } from 'react-router-dom'

const SSRSSG = () => {
  return (
    <div>
    <Link to="/">Home</Link>
    <h4>Qno9. Ans:</h4>
    Server side rendering (SSR) and Static Site Generation (SSG) are two ways to create websites 
    using a modern front-end stack (getting content from a server API) while preserving SEO 
    friendliness and perceived performance. 
    
    <h5>Server Side Rendering</h5>
    With SSR, the website pages are generated at runtime on the server. This means that the server must 
    be able to execute Node.js to generate the pages. The advantage is that the pages are always 
    up-to-date, but every page view triggers a call to the APIs.<br />


    <b>Pros:</b><br />
    Content is always up-to-date<br />
    No need to trigger a rebuild of the website when content changes<br />

    <b>Cons:</b><br />
    Cannot deploy to a static CDN<br />
    The Time-To-First-Byte is a bit slower because the content is generated on the server for each request<br />

    <b>How to cope with cons:</b><br />
    You may always put a caching layer, like a Varnish server with a short TTL, in front of your website to 
    improve the response time<br />
    Next.js (a framework for SSR with React) understands when your pages don’t need data (no getInitialProps 
    static method) and creates pure static pages that don’t need server processing<br />
    <br />
    <h5>Static Site Generation:</h5>
    With SSG, all the pages are generated at build time as static pages (with some Javascript tricks to 
    load/preload content as fast as possible). The Time-To-First-Byte is the best you can get and you can 
    host your website on a static hosting platform like Netlify.<br />

    The problem is that the content becomes stale, so you need to rebuild the website pages to update it. 
    Netlify or Zeit Now provide hooks to trigger a rebuild from a remote app, like a CMS.<br />

    Since you call the APIs only at build time, you end up calling them fewer times in a day, 
    so that, if you have a cap on the number of API calls, you don’t risk to exceed it.<br />

    The main SSG technologies in the React ecosystem are Gatsby and Next.js (which can do both SSR and SSG).<br />

    <b>Pros:</b><br />
    Really fast website<br />
    Can deploy to a static CDN<br />
    Security: the attack surface of a static website is minimal<br />
    Fewer API calls<br />

    <b>Cons:</b><br />
    If content changes frequently, it may become stale<br />
    Need to trigger a rebuild to update content<br />
    If you have a really big website, build time may be very long<br />

    <b>How to cope with cons:</b><br />
    When you have both stable data (for e-commerce: product description, images, etc.) and frequently changing 
    data (stock quantity) you may do an API call on component load to fetch an updated version of just the 
    frequently changing data. Search engines could crawl the stale data, but it’s not a big problem in this case
    Using this technique, you may also manage authentication and serve a different content to different users
        <br />
        <br />
    <i>SSG sites have the best performance and are good for sites with purely static content like marketing sites. 
    SSR is good for more advanced sites that use more dynamic data without using client side JavaScript.</i></div>
  )
}

export default SSRSSG