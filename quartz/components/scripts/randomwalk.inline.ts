import { FullSlug, resolveRelative } from "../../util/path"

document.addEventListener("nav", () => {
  const btn = document.getElementById("random-walk")
  if (!btn) return

  const fullSlug = document.body.dataset.slug! as FullSlug

  async function go() {
    const data = await fetchData
    const slugs = Object.keys(data).filter(
      (s) => !s.startsWith("tags/") && s !== "index" && s !== "404",
    ) as FullSlug[]
    if (slugs.length === 0) return
    const pick = slugs[Math.floor(Math.random() * slugs.length)]
    const targ = resolveRelative(fullSlug, pick)
    window.spaNavigate(new URL(targ, window.location.toString()))
  }

  btn.removeEventListener("click", go)
  btn.addEventListener("click", go)
  window.addCleanup?.(() => btn.removeEventListener("click", go))
})
