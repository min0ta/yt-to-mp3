

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a52a9d5c.js","_app/immutable/chunks/scheduler.e8530197.js","_app/immutable/chunks/index.ae06ff25.js","_app/immutable/chunks/singletons.35102a94.js"];
export const stylesheets = [];
export const fonts = [];
