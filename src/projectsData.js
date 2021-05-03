import bazarBag from './Images/bazarBag.png'
import paintingnetic from './Images/paintingnetic.png'
import ridePath from './Images/ridePath.png'
import insideTeam from './Images/insideTeam.png'
const projectsData = [
    {
        name: 'Bazar Bag',
        description: `Managed all the routes with React router. Implemented CRUD operation for backend with Express.js and MongoDB for the database. Built home page and displayed all the products from the database. Implemented login system for users with Firebase Auth. Built Admin page for admin. An admin can add more products to the database and delete a product as well. Users can see all the products that have been ordered by themselves.
        `,
        image: bazarBag,
        demo: 'https://bazar-bag.web.app/',
        client: 'https://github.com/shifatConst/bazar-bag-client',
        server: 'https://github.com/shifatConst/bazar-bag-server'
    },
    {
        name: 'Paintingnetic',
        description: 'Managed all the routes with React router.Implemented CRUD operation for backend with Express.js and MongoDB for the database. Implemented login system for users with Firebase Auth. Built different Dashboards for user and admin. Users can give reviews of services and these will show on the home page dynamically. Users can see all the products that have been ordered by themselves. An admin can add more services and these will show on the home page dynamically. An admin can add another admin. An admin can add more products to the database and delete a product as well. An admin can see all the bookings from all the users.',
        image: paintingnetic,
        demo: 'https://paintingnetic.web.app/',
        client: 'https://github.com/shifatConst/paintingnetic-client',
        server: 'https://github.com/shifatConst/paintingnetic-server'
    },
    {
        name: 'Ride Path',
        description: 'Built home page and displayed all the available rides. Integrate ImageBB for hosting all the images. Managed all the route with React router. Created private route for security. Implemented login system for users with Firebase Auth. User can create an account and login with google as well. Implemented google map for search the location.',
        image: ridePath,
        demo: 'https://ride-path.web.app/',
        client: 'https://github.com/shifatConst/ride-path',
        server: 'https://github.com/shifatConst/ride-path'
    },
    {
        name: 'Inside Team',
        description: "Inside Team is a front-end based web application where you can find some top level football clubs from English Premier League. You'll see twenty teams on the home page. All teams will have a team logo and team's name. Also you will see a explore button to know more about the club. The explore button will take you another page where you will see some other information about that particular clubs.The Technologies I have used here are: HTML, CSS, Bootstrap, React, React router, FontAwesome and a API from the SportsDB for fetch the data.",
        image: insideTeam,
        demo: 'https://inside-team.netlify.app/',
        client: 'https://github.com/shifatConst/inside-team',
        server: 'https://github.com/shifatConst/inside-team'
    }
]

export default projectsData;