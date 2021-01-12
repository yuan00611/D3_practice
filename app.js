async function draw() {
	const dataset = await d3.json('data.json')

    let dimensions = {
    	width: 800,
    	height: 800
    }

    // Draw Image
    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', dimensions.width)
      .attr('height', dimensions.height)

    svg.append('circle')
      .attr('r', 15)
}

draw()