/**
 *
 * @param {string} colorHex
 * @returns
 */
export const converHexToRgb = colorHex => {
  const r = parseInt(`${colorHex[1]}${colorHex[2]}`, 16)
  const g = parseInt(`${colorHex[3]}${colorHex[4]}`, 16)
  const b = parseInt(`${colorHex[5]}${colorHex[6]}`, 16)

  return {
    r,
    g,
    b,
    rgb: `rgb(${r}, ${g}, ${b})`,
  }
}
