# A Demonstration

This is markdown.  Use it to describe code blocks.

    let fivvr = (x) => {
      return x * 5
    }

It works with tabs...

	let tennr = (x) => {
	  return x * 10
	}

Let's expose these functions to the world.

    module.exports = () => { return tennr(10) + fivvr(5) }