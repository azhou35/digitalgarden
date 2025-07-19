props:
* to pass data from one component down to its children
* in main App, import "nested" from nested.svelte
	* and <Nested answer={42} />
* in nested.svelte, export let answer 
* Svelte has a way of expression logic
* syntax for if else:
	* {#if count > 10}
	* {:else if count < 5}