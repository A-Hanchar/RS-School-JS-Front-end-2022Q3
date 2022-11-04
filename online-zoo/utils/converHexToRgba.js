import { converHexToRgb } from "./converHexToRgb.js"

/**
 *
 * @param {string} colorHex
 * @param {number} number // 0 => 100 (%)
 * @returns
 */
export const converHexToRgba = (colorHex, alfa) => {
  const { r, g, b } = converHexToRgb(colorHex)

  return `rgba(${r}, ${g}, ${b}, ${alfa / 100})`
}
