

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3f855370.js","_app/immutable/chunks/scheduler.e8530197.js","_app/immutable/chunks/index.ae06ff25.js"];
export const stylesheets = ["_app/immutable/assets/2.8e1b84f6.css"];
export const fonts = [];
