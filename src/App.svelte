<script>
    import { Route, Router } from "svelte-routing";
    import Navigation from "./components/Navigation.svelte";
    import Home from "./routes/Home.svelte";
    import Manual from "./routes/Manual.svelte";
    import Selected from "./routes/Selected.svelte";
    import Stats from "./routes/Stats.svelte";

    export let url = "";
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