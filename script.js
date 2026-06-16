//your code here

function majorElement(arr)
{
	let map=new Map()
	for(let i of arr)
		{
			if(map.has(i))
			{
				map.set(i,map.get(i)+1)
			}
			else
			{
				map.set(i,1)
			}
		}
	for(let [key,value] of map)
		{
			if(map.get(key)>Math.floor(arr.length/2))
			{
				return key
			}
		}
}

module.exports = majorElement;