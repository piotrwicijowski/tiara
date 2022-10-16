<script>
    import { onMount } from "svelte";
    import SelectedHouse from "../components/SelectedHouse.svelte";
    import { housesStore, useCustomAudio } from "../services/stores";
    import { houses } from "../utils/houses";

    export let id;
    const selectedHouse = houses.find((house) => house.id == id);

    const audioSource = `/audio_houses_${selectedHouse.name.toLowerCase()}${$useCustomAudio ? '2' : ''}.wav`;
    let audio;
    onMount(async () => {
        audio?.play();
    });

    housesStore.update((houses) => {
        const house = houses.find((h) => h.house.id === parseInt(id));
        if (house) {
            house.count++;
        }
        return houses;
    });

    function goBack() {
        history.back();
    }
</script>

<button on:click={goBack}>
    <SelectedHouse house={selectedHouse}></SelectedHouse>
</button>

<audio src={audioSource} bind:this={audio} />

<style>
    button {
        background: none;
        padding: 0;
        border-radius: 0;
    }
    button:hover {
        border-color: transparent;
    }
</style>
