

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b49e520c.js","_app/immutable/chunks/scheduler.e8530197.js","_app/immutable/chunks/index.ae06ff25.js"];
export const stylesheets = [];
export const fonts = [];
