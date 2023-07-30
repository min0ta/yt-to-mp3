export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","global.css","icons/download.svg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.ba45a67f.js","app":"_app/immutable/entry/app.6bb28fb5.js","imports":["_app/immutable/entry/start.ba45a67f.js","_app/immutable/chunks/scheduler.e8530197.js","_app/immutable/chunks/singletons.35102a94.js","_app/immutable/entry/app.6bb28fb5.js","_app/immutable/chunks/scheduler.e8530197.js","_app/immutable/chunks/index.ae06ff25.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
