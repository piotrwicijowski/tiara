<script>
    import { onMount } from "svelte";
    import { houses } from "../utils/houses";


    export let id;
    const selectedHouse = houses.find(house => house.id == id);
    const audioSource = `/audio_houses_${selectedHouse.name.toLowerCase()}.wav`
    let audio;
	onMount(async () => {
        audio?.play();
	});
</script>

{selectedHouse.name}

<audio src="{audioSource}" bind:this={audio}></audio>