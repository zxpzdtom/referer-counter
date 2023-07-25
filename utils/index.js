export function generateSvg(text) {
  const rectWidth = 29;
  const rectHeight = 29;
  const rectMargin = 32;
  let rectAndText = "";

  for (let i = 0; i < text.length; i++) {
    const x = i * rectMargin;
    const char = text[i];
    // 非数字和字母的偏移小一点
    const horizontalOffset = !char.match(/[0-9a-zA-Z]/) ? 2 : 7;

    const rect = `<rect fill="#000000" x="${x}" y="0.5" width="${rectWidth}" height="${rectHeight}"/>`;
    const tspan = `<tspan x="${x + horizontalOffset}" y="22">${char}</tspan>`;
    const textElement = `<text font-family="Courier" font-size="24" font-weight="normal" fill="#00FF13">${tspan}</text>`;

    rectAndText += rect + textElement;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${rectMargin * text.length}px" height="30px" version="1.1">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        ${rectAndText}
      </g>
    </svg>
  `;

  return svg;
}
