import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import styles from "./styles/randomwalk.scss"
// @ts-ignore
import script from "./scripts/randomwalk.inline"

const RandomWalk: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass)} id="random-walk" aria-label="Go on a random walk">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
      <span>go on a random walk</span>
    </button>
  )
}

RandomWalk.css = styles
RandomWalk.afterDOMLoaded = script

export default (() => RandomWalk) satisfies QuartzComponentConstructor
