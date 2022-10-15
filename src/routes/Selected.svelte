<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";
    import SelectedHouse from "../components/SelectedHouse.svelte";
    import { housesStore } from "../services/stores";
    import { houses } from "../utils/houses";

    export let id;
    const selectedHouse = houses.find((house) => house.id == id);
    const audioSource = `/audio_houses_${selectedHouse.name.toLowerCase()}.wav`;
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
</script>

<Link to="/">
    <SelectedHouse house={selectedHouse}></SelectedHouse>
</Link>

<audio src={audioSource} bind:this={audio} />
