import { useEffect, useRef } from 'react'

const DEFAULT_EVENTS = ['mousedown', 'touchstart']

type EventType = MouseEvent | TouchEvent

export function useClickOutside<T extends HTMLDivElement = HTMLDivElement>(
  handler: () => void,
  events?: string[] | null,
  nodes?: (HTMLDivElement | null)[]
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const listener = (event: EventType) => {
      const { target } = event
      if (Array.isArray(nodes)) {
        const shouldIgnore =
          (target as HTMLDivElement).hasAttribute('data-ignore-outside-clicks') ||
          (!document.body.contains(target as Node) && (target as HTMLDivElement).tagName !== 'HTML')
        const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node))
        shouldTrigger && !shouldIgnore && handler()
      } else if (ref.current && !ref.current.contains(target as Node)) {
        handler()
      }
    }

    ;(events || DEFAULT_EVENTS).forEach((event) => document.addEventListener(event, listener as EventListener))

    return () => {
      ;(events || DEFAULT_EVENTS).forEach((event) => document.removeEventListener(event, listener as EventListener))
    }
  }, [handler, nodes, events])

  return ref
}
