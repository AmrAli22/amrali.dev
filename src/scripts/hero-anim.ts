import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnim(): void {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;

  const lines = hero.querySelectorAll<HTMLElement>('[data-hero-line]');
  const fades = hero.querySelectorAll<HTMLElement>('[data-hero-fade]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce) {
    gsap.set([...lines, ...fades], { clearProps: 'all', opacity: 1, y: 0, yPercent: 0 });
    return;
  }

  gsap.set(lines, { yPercent: 115 });
  gsap.set(fades, { opacity: 0, y: 14 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });
  tl.to(lines, { yPercent: 0, duration: 0.9, stagger: 0.08 }).to(
    fades,
    { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
    '-=0.35'
  );

  gsap.to(hero, {
    scale: 0.965,
    opacity: 0.35,
    transformOrigin: '50% 35%',
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
    },
  });
}
