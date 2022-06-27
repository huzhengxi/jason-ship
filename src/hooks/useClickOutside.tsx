/**
 * Created by Tiger on 11/05/2022.
 */
import {RefObject, useEffect} from "react";

export default function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      handler(event)
    }
    document.addEventListener('click', listener)
    return () => document.removeEventListener('click', listener)
  })
}
