// const data = [10, 20, 30, 40, 50]

// const el = d3
//   .select('ul')
//   .selectAll('li')
//   .data(data)
//   .join('li') //to match the exact number of the data
//   .text(d => d) //display data!

// const el = d3
//   .select('ul')
//   .selectAll('li')
//   .data(data)
//   .join(
//     enter => {
//     	return enter.append('li')
//     	  .style('color', 'purple')
//     },
//     update => update.style('color', 'green'),
//     exit => exit.remove()
//   ) 
//   .text(d => d) //display data!

// const el = d3
//   .select('ul')
//   .selectAll('li')
//   .data(data)
//   .text(d => d) //display data!

// el.enter()
//   .append('li')
//   .text(d => d)

// el.exit().remove()  

// console.log(el);

// const pD3 = d3.select('p')

// d3.json('data.json').then((data) => {
// 	console.log(data)
// })

async function getData(){
	const data = await d3.json('data.json')
	// const data = await d3.csv('data.csv')
	console.log(data)
}
getData()








