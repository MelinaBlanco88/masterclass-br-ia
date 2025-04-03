import './style.css'
import AOS from 'aos'
import { CountUp } from 'countup.js'

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
})

// Initialize counters
const counters = [
  { id: 'counter1', end: 500 },
  { id: 'counter2', end: 15 },
  { id: 'counter3', end: 200 }
]

counters.forEach(counter => {
  new CountUp(counter.id, counter.end, {
    duration: 3,
    useEasing: true,
    useGrouping: true,
  }).start()
})

// Add parallax effect to hero section
document.addEventListener('mousemove', (e) => {
  const hero = document.querySelector('.hero')
  const { clientX, clientY } = e
  const x = (clientX - window.innerWidth / 2) / 50
  const y = (clientY - window.innerHeight / 2) / 50
  
  hero.style.backgroundPosition = `${x}px ${y}px`
})