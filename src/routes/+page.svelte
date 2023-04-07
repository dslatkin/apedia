<script>
    const weapons = [
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

    $: weaponIdx = Math.floor(Math.random() * weapons.length);
    $: weapon = weapons[weaponIdx];
</script>

<a href="images/pics/large/{weapon.filename}" target="_blank">
    <img src="images/pics/thumbnail/{weapon.filename}" alt="A {weapon.alt}" />
</a>
