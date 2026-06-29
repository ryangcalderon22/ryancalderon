import { useInView } from '../hooks/useInView'

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, inView] = useInView()

  const transforms = {
    up: 'translateY(28px)',
    down: 'translateY(-28px)',
    left: 'translateX(28px)',
    right: 'translateX(-28px)',
    none: 'none',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : transforms[direction],
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function StaggerChildren({ children, stagger = 100, direction = 'up', className = '' }) {
  const [ref, inView] = useInView()

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : direction === 'up' ? 'translateY(24px)' : 'translateX(24px)',
                transition: `opacity 0.6s ease ${i * stagger}ms, transform 0.6s ease ${i * stagger}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
