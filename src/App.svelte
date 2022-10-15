<script>
    import { Router, Link, Route } from "svelte-routing";
    import Navigation from "./components/Navigation.svelte";
    import Home from "./routes/Home.svelte";
    import Manual from "./routes/Manual.svelte";
    import Selected from "./routes/Selected.svelte";
    import Stats from "./routes/Stats.svelte";
    import { housesStore } from "./services/stores";

    export let url = "";

    housesStore.subscribe(value => {
        console.log(JSON.stringify(value));
    });
</script>

<Router {url}>
    <Navigation></Navigation>
    <div class="main">
        <Route path="stats" component={Stats} />
        <Route path="selected/:id" component={Selected} />
        <Route path="manual" component={Manual} />
        <Route path="/"><Home /></Route>
    </div>
</Router>

<style>
    .main {
        padding: 2em;
        display: flex;
        justify-content: center;
    }
</style>