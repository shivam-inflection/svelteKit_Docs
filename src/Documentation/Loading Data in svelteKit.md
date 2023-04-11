# SvelteKit
![Svelte-Kit](https://upload.wikimedia.org/wikipedia/commons/9/9b/Svelte-kit-horizontal.svg)

# Loading Data in Sveltekit

# page Data
- A +page.svelte file have a siblings or relation with +page.js or +page.ts whatever you can say that exports a load function,the load function return value that we can catch or getting value inside a +page.svelte through a data.

- instead of returned data if we are use top-level promises will be awaited , which makes it easy to return multiple promises without creating waterfall Suppose their is two promises they both running in a parllel

# data-sveltekit-preload-data
- data-sveltekit-preload-data this is a new but before this data-sveltkit-prefetch is their
-  prefetch is oldest one and preloadData is new one
-  import {prefetch} from '$app/navigation'      prefetch('/some-route') instead of 
-  import {preloadData}  from '$app/navigation'  preloadData('/some-route')
- by using data-sveltekit-preload-data attribute also we can control the behaviour that have one of two values
-   "hover" - basically when we hover a perticular link that preloading start automatically and on mobile when we tap on that link that time it will take to preloading
-    "tap" - means preloading will start as soon as possible  touchstart or mousedown
-    by Default project template has a data-sveltekit-preload -data = "hover" attribute applied on body that means every link inside of body gets work like preloadData means preloading start automatically when you hover the link
- Code link for loading data https://github.com/shivam-inflection/svelteKit_Docs/tree/main/src/routes/loading-data









