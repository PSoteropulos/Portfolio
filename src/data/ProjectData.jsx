const ProjectList = [

    // ==================== PROFESSIONAL ====================

    {
        tier: "professional",
        categories: ["professional"],
        id: 100,
        name: "Auction Platform Microservices",
        tech: "Go / Django / Next.js",
        paragraph1: () => (
            <>
                As a founding engineer at <b>Jeff Martin Auctioneers (JMA)</b>, I helped build a distributed, microservices-based auction platform from the ground up &mdash; spanning a custom real-time bidding system, a multi-vertical inventory taxonomy serving thousands of data models, a bidder-registration kiosk, and the customer-facing web frontend, across a 14-service backend.
            </>
        ),
        paragraph2: () => (
            <>
                <b>Technologies utilized:</b> Go, Django, Django REST Framework, Next.js, custom WebSocket/SSE clients, PostgreSQL, Docker Compose. Proprietary client work &mdash; details kept high-level here.
            </>
        ),
        rightCategory1: "Role",
        rightInfo1: () => (
            <>
                Founding Engineer, Apr 2024 &ndash; Jul 2026
            </>
        ),
        rightCategory2: "Code",
        rightInfo2: () => (
            <>
                Private org repos (proprietary)
            </>
        ),
        thumbnail: "assets/img/coming_soon.jpg",
        mainImage: "assets/img/coming_soon.jpg",
    },

    {
        tier: "professional",
        categories: ["professional"],
        id: 101,
        name: "HuntSync",
        tech: "Swift / Django REST / Next.js",
        paragraph1: () => (
            <>
                Collaborating part-time on <a target="_blank" href="https://hunt-sync.com">HuntSync</a>, a hunting-club safety and management SaaS platform &mdash; not my own venture, but an ongoing collaboration contributing full-stack work.
            </>
        ),
        paragraph2: () => (
            <>
                <b>Technologies utilized:</b> Swift (iOS), Django REST Framework, Next.js.
            </>
        ),
        rightCategory1: "URL",
        rightInfo1: () => (
            <>
                <a target="_blank" href="https://hunt-sync.com">hunt-sync.com</a>
            </>
        ),
        rightCategory2: "Code",
        rightInfo2: () => (
            <>
                Private repo
            </>
        ),
        thumbnail: "assets/img/coming_soon.jpg",
        mainImage: "assets/img/coming_soon.jpg",
    },

    {
        tier: "professional",
        categories: ["professional", "javascript"],
        id: 4,
        name: "Salish Invoicing App",
        tech: "MERN",
        paragraph1: () => (
            <>
                Description coming soon.
            </>
        ),
        paragraph2: () => (
            <>
                <b>Technologies utilized:</b> Coming soon.
            </>
        ),
        rightCategory1: "URL",
        rightInfo1: () => (
            <>
                Private App, Demo soon.
            </>
        ),
        rightCategory2: "Code",
        rightInfo2: () => (
            <>
                Private Repo
            </>
        ),
        thumbnail: "assets/img/app_screenshots/salish/salishhome.png",
        mainImage: "assets/img/app_screenshots/salish/salishhome.png",
        modalImage1: "assets/img/app_screenshots/salish/salishnew.png",
        modalImage2: "assets/img/app_screenshots/salish/salishinvoices.png",
        modalImage3: "assets/img/app_screenshots/salish/salishadmin.png"
    },

    // ==================== PERSONAL ====================

    {
        tier: "personal",
        categories: ["personal", "javascript"],
        id: 1,
        name: "moodRING",
        tech: "MERN",
        paragraph1: () => (
            <>
                This is one of my first real fully fledged passion projects. Built with full stack JavaScript (MERN), Spotify APIs, and Bootstrap, <a target="_blank" href="https://moodring.net">moodRING</a> allows users to experience something that harkens back to the golden age of social media. It is the juxtaposition of music, mood tracking, and light social media fun. Users can search for a song, input a verbal description of how the song makes them feel, then adjust some sliders to dial in a color that they associate with that mood and/or song. On The Feed, all entries are displayed, and if logged in a user can click another user's name to see all of the moods they have posted. A logged user can also interact with their own moods to edit or delete them.
            </>)
        ,
        paragraph2: () => (
            <>
                <b>Technologies utilized:</b> ReactJS, NodeJS, ExpressJS, Mongoose, MongoDB, Spotify Web API, Spotify Embed API, Axios, React ContextAPI, React-Router-DOM, Bootstrap, JSON Web Token, Date-FNS, bcrypt, CORS, dotenv, npm, Docker Compose, Cloudflare Tunnels, git, GitHub
            </>
        ),
        rightCategory1: "URL",
        rightInfo1: () => (
            <>
                <a target="_blank" href="https://moodring.net">moodRING</a>
            </>),
        rightCategory2: "Code",
        rightInfo2: () => (
            <>
                <a target="_blank" href="https://github.com/psoteropulos/moodring">GitHub Repo</a>
            </>),
        thumbnail: "assets/img/app_screenshots/moodring/moodringhome.png",
        mainImage: "assets/img/app_screenshots/moodring/moodringhome.png",
        modalImage1: "assets/img/app_screenshots/moodring/moodring1.png",
        modalImage2: "assets/img/app_screenshots/moodring/moodring2.png",
        modalImage3: "assets/img/app_screenshots/moodring/moodring3.png"
    },

    {
        tier: "personal",
        categories: ["personal", "javascript", "python"],
        id: 2,
        name: "Aisop (v1.0)",
        tech: "React + Flask",
        paragraph1: () => (
            <>
                Sojourn Creations collaboration <a target="_blank" href="https://aisop.io" > <b>Aisop</b></a >. Description coming soon.
            </>
        ),
        paragraph2: () => (
            <>
                <b>Technologies utilized:</b> Coming soon.
            </>
        ),
        rightCategory1: "URL",
        rightInfo1: () => (
            <>
                <a target="_blank" href="https://aisop.io">Aisop</a>
            </>
        ),
        rightCategory2: "Code",
        rightInfo2: () => (
            <>
                Private repo. Sorry!
            </>
        ),
        thumbnail: "assets/img/app_screenshots/aisop/aisophome.png",
        mainImage: "assets/img/app_screenshots/aisop/aisophome.png",
        modalImage1: "assets/img/app_screenshots/aisop/aisopgameplay.png",
        modalImage2: "assets/img/app_screenshots/aisop/aisopabout.png",
        modalImage3: "assets/img/app_screenshots/aisop/aisop1.png"
    },

    {
        tier: "personal",
        categories: ["personal", "javascript"],
        id: 3,
        name: "CookBook",
        tech: "MERN",
        paragraph1: () => (
            <>
                Four member group collaboration, <a target="_blank" href="https://cookbookapp.net"><b>CookBook</b></a>. Description coming soon.
            </>
        ),
        paragraph2: () => (
            <>
                <b>Technologies utilized:</b> Coming soon.
            </>
        ),
        rightCategory1: "URL",
        rightInfo1: () => (
            <>
                <a target="_blank" href="https://cookbookapp.net">CookBook</a>
            </>
        ),
        rightCategory2: "Code",
        rightInfo2: () => (
            <>
                <a target="_blank" href="https://github.com/CookBook-Group-Project/CookBook">Repo</a>
            </>
        ),
        thumbnail: "assets/img/app_screenshots/cookbook/cookbookhome.png",
        mainImage: "assets/img/app_screenshots/cookbook/cookbookhome.png",
        modalImage1: "assets/img/app_screenshots/cookbook/cookbook1.png",
        modalImage2: "assets/img/app_screenshots/cookbook/cookbook2.png",
        modalImage3: "assets/img/app_screenshots/cookbook/cookbook4.png"
    },

    {
        tier: "personal",
        categories: ["personal", "javascript", "python", "misc"],
        id: 5,
        name: "Algos",
        tech: "Misc",
        paragraph1: () => (
            <>
                Description coming soon.
            </>
        ),
        paragraph2: () => (
            <>
                <b>Technologies utilized:</b> Coming soon.
            </>
        ),

        rightCategory1: "LeetCode Profile",
        rightInfo1: () => (
            <>
                <a target="_blank" href="https://leetcode.com/Paulsoteropulos/">LeetCode</a>

            </>
        ),
        rightCategory2: "GitHub Repo",
        rightInfo2: () => (
            <>
                <a target="_blank" href="https://github.com/psoteropulos/algopractice">GitHub</a>
            </>
        ),
        thumbnail: "assets/img/app_screenshots/algopractice/githubhome.png",
        mainImage: "assets/img/app_screenshots/algopractice/githubhome.png",
        modalImage1: "assets/img/app_screenshots/algopractice/leetcode.png",
        modalImage2: "assets/img/app_screenshots/algopractice/leetcodeproblem.png",
        modalImage3: "assets/img/app_screenshots/algopractice/repo.png"
    },

    // ==================== COURSEWORK ====================
    // Coding Dojo full-stack certification exam projects. No live demos/repos linked
    // yet -- confirm actual GitHub URLs before wiring up "Code" links for these.

    {
        tier: "coursework",
        categories: ["coursework", "c#"],
        id: 200,
        name: "AdventureDiary",
        tech: "C#",
        paragraph1: () => (<>Coding Dojo coursework project (.NET/C# stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> C#, ASP.NET, Entity Framework.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/dotnet.png",
        mainImage: "assets/img/coming_soon.jpg",
    },
    {
        tier: "coursework",
        categories: ["coursework", "c#"],
        id: 201,
        name: "PunchStarter",
        tech: "C#",
        paragraph1: () => (<>Coding Dojo coursework project (.NET/C# stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> C#, ASP.NET, Entity Framework.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/dotnet.png",
        mainImage: "assets/img/coming_soon.jpg",
    },
    {
        tier: "coursework",
        categories: ["coursework", "java"],
        id: 202,
        name: "NotSteam",
        tech: "Java",
        paragraph1: () => (<>Coding Dojo coursework project (Java/Spring stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> Java, Spring Boot, Spring MVC.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/spring.png",
        mainImage: "assets/img/coming_soon.jpg",
    },
    {
        tier: "coursework",
        categories: ["coursework", "java"],
        id: 203,
        name: "SportsBall",
        tech: "Java",
        paragraph1: () => (<>Coding Dojo coursework project (Java/Spring stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> Java, Spring Boot, Spring MVC.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/spring.png",
        mainImage: "assets/img/coming_soon.jpg",
    },
    {
        tier: "coursework",
        categories: ["coursework", "javascript"],
        id: 204,
        name: "CreatureSanctuary",
        tech: "MERN",
        paragraph1: () => (<>Coding Dojo coursework project (MERN stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> React, Node.js, Express, MongoDB.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/mern.png",
        mainImage: "assets/img/coming_soon.jpg",
    },
    {
        tier: "coursework",
        categories: ["coursework", "javascript"],
        id: 205,
        name: "MegaNodeServer",
        tech: "MERN",
        paragraph1: () => (<>Coding Dojo coursework project (MERN stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> React, Node.js, Express, MongoDB.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/mern.png",
        mainImage: "assets/img/coming_soon.jpg",
    },
    {
        tier: "coursework",
        categories: ["coursework", "javascript"],
        id: 206,
        name: "MovieMaster",
        tech: "MERN",
        paragraph1: () => (<>Coding Dojo coursework project (MERN stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> React, Node.js, Express, MongoDB.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/mern.png",
        mainImage: "assets/img/coming_soon.jpg",
    },
    {
        tier: "coursework",
        categories: ["coursework", "javascript"],
        id: 207,
        name: "RestaurantWrangler",
        tech: "MERN",
        paragraph1: () => (<>Coding Dojo coursework project (MERN stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> React, Node.js, Express, MongoDB.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/mern.png",
        mainImage: "assets/img/coming_soon.jpg",
    },
    {
        tier: "coursework",
        categories: ["coursework", "python"],
        id: 208,
        name: "IdeaCloud",
        tech: "Python",
        paragraph1: () => (<>Coding Dojo coursework project (Python/Flask stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> Python, Flask, Jinja2.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/flask.jpg",
        mainImage: "assets/img/coming_soon.jpg",
    },
    {
        tier: "coursework",
        categories: ["coursework", "python"],
        id: 209,
        name: "PlantPlanter",
        tech: "Python",
        paragraph1: () => (<>Coding Dojo coursework project (Python/Flask stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> Python, Flask, Jinja2.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/flask.jpg",
        mainImage: "assets/img/coming_soon.jpg",
    },
    {
        tier: "coursework",
        categories: ["coursework", "python"],
        id: 210,
        name: "ShowGuide",
        tech: "Python",
        paragraph1: () => (<>Coding Dojo coursework project (Python/Flask stack).</>),
        paragraph2: () => (<><b>Technologies utilized:</b> Python, Flask, Jinja2.</>),
        rightCategory1: "Type",
        rightInfo1: () => (<>Coursework exam project</>),
        rightCategory2: "Code",
        rightInfo2: () => (<>Coming soon</>),
        thumbnail: "assets/img/portfolio/flask.jpg",
        mainImage: "assets/img/coming_soon.jpg",
    },

]

export default ProjectList
