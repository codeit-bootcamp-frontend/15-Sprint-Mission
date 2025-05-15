import facepaint from "facepaint";

const breackpoints = [740, 1200, 1920];

const mq = facepaint(breackpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default mq;
