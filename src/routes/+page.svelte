<script>
	import { Geolocation } from '@capacitor/geolocation';

    	let loc = null;
    	async function getCurrentPosition(){
        const res = await Geolocation.getCurrentPosition()
        loc = res
    	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
	<h3>Does Capacitor work?</h3>
    <h1>Geolocation</h1>
    <p>Your location is:</p>
    <p>Latitude: {loc?.coords.latitude}</p>
    <p>Longitude: {loc?.coords.longitude}</p>

    <button on:click={getCurrentPosition}>
        Get Current Location
    </button>
</div>

<div>
<h4>Further instructions for mobile + capacitor</h4>
<p>In order to get Sveltekit on mobile, you need to make some changes to our project. First thing is to update your capacitor.config.ts file webDir config option to “build”. This is to convert our sveltekit app to a static app that outputs built binaries to the "build" folder.</p>
<p>Next you need to change the svelte adapter to "static" from "auto". you might need to install the static adapter if its not their already:</p>
<code>yarn add @sveltejs/adapter-static</code>
<p>
after that you can change the svelte.config.ts file to include 
</p>
<code>import adapter from '@sveltejs/adapter-static';</code>
<p>Next you'll need to set the prerender flag to true so sveltekit renders statically. you can do this by adding the following line to your <code>+layout.ts</code> file.</p>
<code>export const prerender = true;</code>
<p>Then you can just continue to add your platfroms and build</p>
<code>
yarn add @capacitor/android <br>
yarn add @capacitor/ios <br>
npx cap add android <br>
npx cap add ios <br>
npm run build <br>
npx cap sync <br>
</code>


</div>

<style>
    div {
        padding-top: 50px;
    }
</style>