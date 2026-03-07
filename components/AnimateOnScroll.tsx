'use client';

import { useRef, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Variant =
  | 'fadeUp'
  | 'fadeIn'
  | 'fadeUpStagger'
  | 'scaleReveal'
  | 'scaleRevealStagger'
  | 'slideFromLeft'
  | 'slideFromRight'
  | 'blurReveal'
  | 'clipReveal';

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  stagger?: number;
};

const ST = { start: 'top 85%',
  toggleActions: 'play none none none' as const };

function getAnimationConfig(variant: Variant, delay: number) {
  switch (variant) {
    case 'scaleReveal':
      return {
        from: { opacity: 0, scale: 0.92 },
        to: { opacity: 1, scale: 1, duration: 0.9, delay, ease: 'power3.out' },
      };
    case 'slideFromLeft':
      return {
        from: { opacity: 0, x: -60 },
        to: { opacity: 1, x: 0, duration: 0.8, delay, ease: 'power3.out' },
      };
    case 'slideFromRight':
      return {
        from: { opacity: 0, x: 60 },
        to: { opacity: 1, x: 0, duration: 0.8, delay, ease: 'power3.out' },
      };
    case 'blurReveal':
      return {
        from: { opacity: 0, filter: 'blur(12px)' },
        to: { opacity: 1, filter: 'blur(0px)', duration: 1, delay, ease: 'power2.out' },
      };
    case 'clipReveal':
      return {
        from: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        to: { opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 1, delay, ease: 'power3.inOut' },
      };
    case 'fadeUpStagger':
    case 'scaleRevealStagger':
      return null;
    case 'fadeIn':
      return {
        from: { opacity: 0 },
        to: { opacity: 1, duration: 0.8, delay, ease: 'power2.out' },
      };
    case 'fadeUp':
    default:
      return {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out' },
      };
  }
}

export function AnimateOnScroll({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  stagger = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (variant === 'fadeUpStagger') {
        const childEls = el.querySelectorAll(':scope > *');
        gsap.fromTo(
          childEls,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, ...ST },
          }
        );
      } else if (variant === 'scaleRevealStagger') {
        const childEls = el.querySelectorAll(':scope > *');
        gsap.fromTo(
          childEls,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, ...ST },
          }
        );
      } else {
        const config = getAnimationConfig(variant, delay);
        if (config) {
          gsap.fromTo(el, config.from, {
            ...config.to,
            scrollTrigger: { trigger: el, ...ST },
          });
        }
      }
    }, el);

    return () => ctx.revert();
  }, [variant, delay, stagger]);

  return (
    <div ref={ref} className={cn(className, (variant === 'slideFromLeft' || variant === 'slideFromRight') && 'overflow-x-hidden')}>
      {children}
    </div>
  );
}
