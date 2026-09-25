<script lang="ts">
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    import { tw } from '$lib/tw';

    let { accessKey }: { accessKey: string } = $props();

    const ENDPOINT = 'https://api.web3forms.com/submit';

    let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
    let errorMessage = $state('');

    // Without JavaScript the form posts straight to Web3Forms, which then sends the visitor here.
    let redirect = $derived(new URL(resolve('/contact/sent'), page.url).href);

    async function submit(
        event: SubmitEvent & { currentTarget: HTMLFormElement },
    ) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        data.delete('redirect');

        status = 'sending';
        try {
            const response = await fetch(ENDPOINT, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: data,
            });
            const result: { message?: string } = await response.json();
            if (response.ok) {
                status = 'sent';
                form.reset();
            } else {
                status = 'error';
                errorMessage =
                    result.message ?? 'Your message could not be sent.';
            }
        } catch {
            status = 'error';
            errorMessage = 'Something went wrong. Please try again.';
        }
    }

    const label = tw('mb-1 block font-bold');
    const field = tw(
        'block w-full border border-black bg-white px-3 py-2 text-black',
    );
</script>

<section
    aria-labelledby="send-a-message"
    class="mt-8 border border-black bg-teal p-4 sm:p-6"
>
    <h2 id="send-a-message" class="mb-4 text-lg font-bold uppercase">
        Send a Message
    </h2>

    <div aria-live="polite">
        {#if status === 'sent'}
            <p class="font-bold">Thanks! Your message has been sent.</p>
        {:else if status === 'error'}
            <p class="mb-4 font-bold text-red">{errorMessage}</p>
        {/if}
    </div>

    {#if status !== 'sent'}
        <form
            action={ENDPOINT}
            method="POST"
            onsubmit={submit}
            class="flex flex-col gap-4"
        >
            <input type="hidden" name="access_key" value={accessKey} />
            <input type="hidden" name="redirect" value={redirect} />
            <input
                type="hidden"
                name="subject"
                value="New message from the Akarrian Encyclopedia"
            />
            <input
                type="hidden"
                name="from_name"
                value="Akarrian Encyclopedia"
            />
            <input
                type="checkbox"
                name="botcheck"
                class="hidden"
                tabindex="-1"
            />

            <div>
                <label for="contact-name" class={label}>Name</label>
                <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autocomplete="name"
                    required
                    class={field}
                />
            </div>
            <div>
                <label for="contact-email" class={label}>Email</label>
                <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    required
                    class={field}
                />
            </div>
            <div>
                <label for="contact-message" class={label}>Message</label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    required
                    class={field}></textarea>
            </div>

            <p>
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    class="border border-black bg-green-dark px-5 py-2 font-bold uppercase hover:bg-blue hover:text-white disabled:opacity-60"
                >
                    {status === 'sending' ? 'Sending...' : 'Send'}
                </button>
            </p>
        </form>
    {/if}
</section>
