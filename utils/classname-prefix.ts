/**
 * const cls = classNamePrefix('selector')
 *
 * cls('text') => 'selector-text'
 * cls('text', '!custom-text') => 'selector-text custom-text'
 */
import classnames from "classnames";

export default function classNamePrefix(...prefixes) {
  let prefix = prefixes.join("-");
  return (...cls) => {
    if (cls.length == 0) return prefix || "";
    return classnames(cls)
      .split(/\s+/g)
      .map((c) => {
        if (c[0] === "!") return c.slice(1);
        return prefix ? `${prefix}-${c}` : c;
      })
      .join(" ");
  };
}
