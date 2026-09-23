<script lang="ts">
    import { asset } from '$app/paths';
    import { onMount } from 'svelte';

    type Weapon = {
        filename: string;
        alt: string;
    };

    const weapons: Weapon[] = [
        { filename: 'berdiche.jpg', alt: 'berdiche' },
        { filename: 'claymore.jpg', alt: 'claymore' },
        { filename: 'falchion.gif', alt: 'falchion' },
        { filename: 'flamberge.jpg', alt: 'flamberge' },
        { filename: 'gladius.jpg', alt: 'gladius' },
        { filename: 'khyber.jpg', alt: 'khyber' },
        { filename: 'rapier.jpg', alt: 'rapier' },
        { filename: 'rapierparts.jpg', alt: 'rapierparts' },
        { filename: 'stiletto.jpg', alt: 'stiletto' },
        { filename: 'tegha.jpg', alt: 'tegha' },
    ];

    // Pick in the browser only, so the prerendered page doesn't show one weapon and then swap it.
    let weapon = $state<Weapon>();
    onMount(() => {
        weapon = weapons[Math.floor(Math.random() * weapons.length)];
    });
</script>

{#if weapon}
    <a href={asset(`/images/pics/large/${weapon.filename}`)} target="_blank">
        <img
            src={asset(`/images/pics/thumbnail/${weapon.filename}`)}
            alt="A {weapon.alt}"
        />
    </a>
{/if}
