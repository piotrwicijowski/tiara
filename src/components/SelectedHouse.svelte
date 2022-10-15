<script lang="ts">
    import type { House } from "../utils/houses";
    export let house: House;
</script>

<div class="image-wrapper">
    <img src={`/${house.name.toLowerCase()}.png`} alt={house.name} />
</div>

<style>
    .image-wrapper {
        animation-duration: 0.1s;
        animation-name: animate-show;
    }

    @keyframes animate-show {
        0% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }

    img {
        max-width: 100%;
        border-radius: 5%;
        box-shadow: 0.5em 0.5em 1em rgba(0,0,0,0.2);
    }
</style>
