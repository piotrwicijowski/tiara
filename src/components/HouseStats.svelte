<script lang="ts">
    import type { HouseCapacity } from "../utils/houses";
    export let house: HouseCapacity;
</script>

<div class={`${house.house.name.toLowerCase()} row`}>
    <span>{house.house.name}</span>
    <span class="count">
        <span>{house.count}</span>
        /
        <span>{house.capacity}</span>
    </span>
</div>

<style>
    .row {
        display: flex;
        background-color: var(--background-color);
        padding: 0.5em 1em;
    }
    .gryffindor {
        --background-color: var(--gryffindor-color);
    }
    .hufflepuff {
        --background-color: var(--hufflepuff-color);
    }
    .slytherin {
        --background-color: var(--slytherin-color);
    }
    .ravenclaw {
        --background-color: var(--ravenclaw-color);
    }
    .count {
        margin-left: auto;
    }
</style>
