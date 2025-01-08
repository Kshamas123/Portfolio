import React from 'react';
import { motion } from 'framer-motion';
import "./about.css";

const techStack = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'JavaScript', img: 'https://th.bing.com/th/id/OIP.ZZaV8f0-sI1l6dcdApuE6gHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { name: 'C', img: 'https://th.bing.com/th/id/OIP.tmWtQr0CuaNw13CHQ4P6OAHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { name: 'Java', img: 'https://th.bing.com/th/id/OIP._Lm_T3scKhVEVFC54gcRxwHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { name: 'C++', img: 'https://th.bing.com/th/id/OIP.c9BbPNmGFrhbXYTdOTG6FAHaFj?w=260&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { name: 'HTML', img: 'https://th.bing.com/th/id/OIP.CYAMXqfgsWg3Ix91RJbbYAHaHa?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { name: 'CSS', img: 'https://th.bing.com/th/id/OIP.zzMiltvXJNgFUDhNAXAYFAHaFj?w=244&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    ],
  },
  {
    category: 'Libraries/Frameworks',
    items: [
      { name: 'React.js', img: 'https://th.bing.com/th/id/OIP.9c0Aadk9V1TemVqw7fByyQHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { name: 'Express.js', img: 'https://th.bing.com/th/id/OIP.Cq3Bv0bbB4WIIekFUX3sNwHaED?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { name: 'Node.js', img:'https://th.bing.com/th/id/OIP.gcEdib5QdIi3XqO9Qww-vwAAAA?w=320&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
      { name: 'Bootstrap', img: 'https://img.freepik.com/premium-vector/bootstrap-flat-logo-vector-illustration_582637-461.jpg?w=1060'}
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', img: 'https://th.bing.com/th/id/OIP.dlACmv4j53eRimrqJrCQwQHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    ],
  },
];

function About() {
  return (
    <div className="App">
      <motion.div className="carousel">
        <motion.div className="carousel-inner">
          {techStack.map((category) => (
            <motion.div key={category.category} className="tech-category">
              <h3>{category.category}</h3>
              <div className="tech-items">
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="tech-item"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src={item.img} // Use the dynamic image path here
                      alt={item.name}
                      className="tech-icon"
                    />
                    <p>{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
           <motion.div
          className="quote"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="quote-text">"Learning never ends"</h3>
        </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;


