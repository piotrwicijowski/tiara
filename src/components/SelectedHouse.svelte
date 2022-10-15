<script lang="ts">
    import type {House} from "../utils/houses";
    export let house: House;
</script>

<div>
    <img src={`/${house.name.toLowerCase()}.png`} alt={house.name}/>
</div>