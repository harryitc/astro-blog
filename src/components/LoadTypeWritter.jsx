import Typewriter from "typewriter-effect/dist/core";
const LoadTypeWritter = ({ idLoadWritter }) => {
  var app = document.getElementById(idLoadWritter);
  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(1000)
    .typeString(`Welcome to <strong>Harryitc's Blog</strong>!`)
    .pauseFor(200)
    .deleteChars(7)
    .typeString(
      "<strong>s Blog</strong>! A place for insights and inspiration."
    )
    .pauseFor(200)
    .deleteAll()
    .typeString("Discover amazing tips and stories about life.")
    .pauseFor(200)
    .deleteAll()
    .typeString("Learn and grow with us every day!")
    .pauseFor(200)
    .deleteAll()
    .typeString("Stay curious. Explore the world of knowledge.")
    .pauseFor(200)
    .deleteAll()
    .typeString("Thank you for being part of our journey!")
    .pauseFor(200)
    .start();
  return ``;
};

export default LoadTypeWritter;
