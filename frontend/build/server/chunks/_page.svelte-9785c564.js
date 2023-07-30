import { c as create_ssr_component, v as validate_component, m as missing_component, d as add_attribute, e as escape, i as is_promise, n as noop } from './ssr-174b2124.js';

const css$8 = {
  code: "header.svelte-wjiq3o.svelte-wjiq3o{width:100%;height:80px;display:flex;justify-content:space-between;align-items:center;background-color:var(--primary);padding:0 clamp(20px, 8vw, 55px);font-size:1.05em}.logo-container.svelte-wjiq3o.svelte-wjiq3o{font-weight:400}.center.svelte-wjiq3o.svelte-wjiq3o{display:flex;align-items:center}header.svelte-wjiq3o svg.svelte-wjiq3o{width:50px}header.svelte-wjiq3o span.svelte-wjiq3o{font-family:'Fira Sans', sans-serif;font-weight:500;color:#cbcbcb}@media(min-width: 750px){header.svelte-wjiq3o.svelte-wjiq3o{padding:0 130px;font-size:1.5em}header.svelte-wjiq3o svg.svelte-wjiq3o{width:60px}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<header class="svelte-wjiq3o" data-svelte-h="svelte-xqmszl"><div class="logo-container center svelte-wjiq3o"><svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" stroke="#d1fff0" class="svelte-wjiq3o"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"><path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#c5c5c5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg> <span class="svelte-wjiq3o">YtToMp3</span></div> <div class="center svelte-wjiq3o"><span class="svelte-wjiq3o">Contact us</span> <svg viewBox="0 0 24 24" fill="none" class="svelte-wjiq3o"><path d="M21 9V3M17 9V3M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="#c5c5c5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg></div> </header>`;
});
const css$7 = {
  code: "footer.svelte-x2cw6s{width:100%;height:60px;background-color:var(--primary)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<footer class="svelte-x2cw6s" data-svelte-h="svelte-qpz7vw"></footer>`;
});
const css$6 = {
  code: "button.svelte-jrtzla{color:var(--text);font-size:1rem;font-weight:600;width:clamp(60px, 20%, 120px);border-radius:15px;background-color:var(--secondary);box-shadow:1px 3px 5px #5f5f5f;cursor:pointer}button.svelte-jrtzla:active{background-color:var(--secondaryPressed);box-shadow:1px 2px 3px #5f5f5f}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { createLink } = $$props;
  if ($$props.createLink === void 0 && $$bindings.createLink && createLink !== void 0)
    $$bindings.createLink(createLink);
  $$result.css.add(css$6);
  return `<button class="svelte-jrtzla" data-svelte-h="svelte-1uc7x7m">Convert</button>`;
});
const css$5 = {
  code: ".svelte-k7ly4t{display:flex;color:var(--text);font-family:'Fira Sans', sans-serif;background:none}.helper.svelte-k7ly4t{width:clamp(130px, 90%, 600px);border-radius:2px;background-color:var(--secondary);margin-top:10px;box-shadow:1px 3px 5px rgb(136, 136, 136);justify-content:space-between;padding:5px 15px;height:55px}.group.svelte-k7ly4t{font-size:0.8rem;flex-direction:column;align-items:center;justify-content:space-between}.option.svelte-k7ly4t{justify-content:center;align-items:center;font-size:1rem;width:50px;height:25px;border-inline:1px rgba(255, 255, 255, 0.15) solid;cursor:pointer}.selected.svelte-k7ly4t{background-color:var(--secondaryPressed)}",
  map: null
};
const Helper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clear } = $$props;
  let { paste } = $$props;
  let { setMp3 } = $$props;
  let { setMp4 } = $$props;
  let { target } = $$props;
  if ($$props.clear === void 0 && $$bindings.clear && clear !== void 0)
    $$bindings.clear(clear);
  if ($$props.paste === void 0 && $$bindings.paste && paste !== void 0)
    $$bindings.paste(paste);
  if ($$props.setMp3 === void 0 && $$bindings.setMp3 && setMp3 !== void 0)
    $$bindings.setMp3(setMp3);
  if ($$props.setMp4 === void 0 && $$bindings.setMp4 && setMp4 !== void 0)
    $$bindings.setMp4(setMp4);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  $$result.css.add(css$5);
  return `<div class="helper svelte-k7ly4t"><div class="group svelte-k7ly4t">target
        <div class="svelte-k7ly4t"><button class="${"option " + escape(target === "mp3" ? "selected" : null, true) + " svelte-k7ly4t"}">mp3</button> <button class="${"option " + escape(target === "mp4" ? "selected" : null, true) + " svelte-k7ly4t"}">mp4</button></div></div> <div class="group svelte-k7ly4t">actions
        <div class="svelte-k7ly4t"><button class="option svelte-k7ly4t" data-svelte-h="svelte-pkb1oj">clear</button> <button class="option svelte-k7ly4t" data-svelte-h="svelte-1glzy9n">paste</button></div></div> </div>`;
});
const css$4 = {
  code: "picture.svelte-i8lbne,img.svelte-i8lbne,source.svelte-i8lbne{object-fit:cover;aspect-ratio:1.7777;max-width:360px;width:100%;background-color:rgb(209, 209, 209);border-top-left-radius:15px;border-top-right-radius:15px}@media(min-width: 600px){picture.svelte-i8lbne,img.svelte-i8lbne,source.svelte-i8lbne{height:270px;max-width:480px}}",
  map: null
};
function handleUrl(url, quality) {
  const arr = url.split("/");
  const last = arr.pop();
  const ext = last?.split(".").pop();
  arr.push(`${quality}qdefault.${ext}`);
  return arr.join("/");
}
const Imgloader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { thumb } = $$props;
  if ($$props.thumb === void 0 && $$bindings.thumb && thumb !== void 0)
    $$bindings.thumb(thumb);
  $$result.css.add(css$4);
  return `<picture class="svelte-i8lbne"><source${add_attribute("srcset", handleUrl(thumb, "h"), 0)} media="(min-width: 400px)" class="svelte-i8lbne"> <img decoding="async"${add_attribute("src", handleUrl(thumb, "m"), 0)} alt="" class="svelte-i8lbne"> </picture>`;
});
const css$3 = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');.preview.svelte-1lr5qeq.svelte-1lr5qeq{border:1px #959595 solid;border-radius:15px;margin:50px 0;font-family:'Inter', sans-serif;color:hsl(0, 0%, 40%);display:flex;flex-direction:column;align-items:center}.preview.svelte-1lr5qeq div.svelte-1lr5qeq{background-color:#e9e9e9;border-bottom-left-radius:15px;border-bottom-right-radius:15px}.text.svelte-1lr5qeq.svelte-1lr5qeq{width:100%;max-width:360px;padding:15px 15px}@media(min-width:600){.text.svelte-1lr5qeq.svelte-1lr5qeq{max-width:480px}}.progress.svelte-1lr5qeq.svelte-1lr5qeq{overflow:hidden;border-radius:7px;width:120px;height:15px;box-shadow:1px 1px 4px rgba( 0, 0, 0, 0.2 );background:linear-gradient(#a1a1a1, #8d8c8c)}.value.svelte-1lr5qeq.svelte-1lr5qeq{position:relative;z-index:1000;height:100%;background:linear-gradient(var(--secondary), var(--secondaryPressed))}.rolly.svelte-1lr5qeq.svelte-1lr5qeq{position:relative;margin-top:27px;rotate:15deg;width:100px;height:3px;background-color:#c0c0c0;animation:s-5vM2haeXPK5E-roll 1s linear infinite}@keyframes svelte-1lr5qeq-roll{0%{top:-50px\n    }100%{top:-10px\n    }}.error.svelte-1lr5qeq.svelte-1lr5qeq{width:clamp(120px, 30vw, 360px);margin-top:15px;border-radius:5px;background-color:#c72b2b;padding:15px;text-align:center;color:var(--text)}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  let { target } = $$props;
  let val = 0;
  function getResult(res) {
    if (!res) {
      return "";
    }
    const url = URL.createObjectURL(res);
    const a = document.createElement("a");
    a.href = url;
    a.download = `video.${target}`;
    a.click();
    URL.revokeObjectURL(url);
    return "";
  }
  async function newFetch() {
    const q = await fetch(link);
    const reader = q.body?.getReader();
    const contentLength = q.headers.get("Content-Length");
    if (!contentLength) {
      return;
    }
    let recieveddLen = 0;
    let chuncks = [];
    while (true) {
      const { done, value } = await reader?.read();
      if (done) {
        break;
      }
      chuncks.push(value);
      recieveddLen += value.length;
      val = recieveddLen / +contentLength * 100 | 0;
      console.log(val);
    }
    return new Blob(chuncks);
  }
  async function ping() {
    const url = link.split("?url=")[1];
    const regex = /^(https:\/\/www\.){0,1}youtube\.com\/watch\?v=[a-zA-Z0-9_-]{11}/;
    if (!regex.test(url)) {
      return Promise.reject("Not valid url");
    }
    const res = await fetch(`https://yt-to-mp3-backend.onrender.com/ping?url=${url}`).then((response) => response.json());
    if (res.err) {
      return Promise.reject(res.err);
    }
    return res;
  }
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  $$result.css.add(css$3);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="loading-circle"></div> `;
    }
    return function(result) {
      return ` <div class="preview svelte-1lr5qeq">${validate_component(Imgloader || missing_component, "svelte:component").$$render($$result, { thumb: result.thumb }, {}, {})} <div style="width:100%" class="svelte-1lr5qeq"><div class="text svelte-1lr5qeq"><span><b>${escape(result.title)}</b><br>${escape(result.author)}</span></div></div></div> ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ` <div style="display:flex; justify-content:center"> <div class="progress svelte-1lr5qeq" style="width:100px"><div class="value svelte-1lr5qeq" style="${"width:" + escape(val, true) + "px"}"></div> <div class="rolly svelte-1lr5qeq"></div> <div class="rolly svelte-1lr5qeq"></div></div></div> `;
        }
        return function(res) {
          return ` ${escape(getResult(res))} `;
        }(__value2);
      }(newFetch())} `;
    }(__value);
  }(ping())}`;
});
const css$2 = {
  code: ".container.svelte-1r8tvri{width:100%;align-items:center;display:flex;flex-direction:column}.input.svelte-1r8tvri{display:flex;justify-content:space-between;width:clamp(130px, 90%, 600px);height:50px}input.svelte-1r8tvri{width:75%;border-radius:15px;outline:var(--secondary) 2px solid;padding:3px 10px;font-size:1.15rem;background-color:inherit;color:#7f7f7f}input.svelte-1r8tvri:focus{outline:none;box-shadow:0 0 7px var(--secondary);color:#0f0f0f}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { setLink } = $$props;
  let { setLoad } = $$props;
  let { setTarget } = $$props;
  let { target } = $$props;
  let input;
  async function paste() {
    input = await navigator.clipboard.readText();
  }
  function clear() {
    input = "";
  }
  function setMp3() {
    setTarget("mp3");
  }
  function setMp4() {
    setTarget("mp4");
  }
  function createLink() {
    setLoad(null);
    const targ = target === "mp4" ? "video" : "audio";
    setLink(`https://yt-to-mp3-backend.onrender.com/${targ}?url=${input}`);
    setTimeout(
      () => {
        setLoad(Loading);
      },
      0
    );
  }
  if ($$props.setLink === void 0 && $$bindings.setLink && setLink !== void 0)
    $$bindings.setLink(setLink);
  if ($$props.setLoad === void 0 && $$bindings.setLoad && setLoad !== void 0)
    $$bindings.setLoad(setLoad);
  if ($$props.setTarget === void 0 && $$bindings.setTarget && setTarget !== void 0)
    $$bindings.setTarget(setTarget);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  $$result.css.add(css$2);
  return `<div class="container svelte-1r8tvri"><div class="input svelte-1r8tvri"><input type="text" placeholder="Paste your youtube URL..." class="svelte-1r8tvri"${add_attribute("value", input, 0)}> ${validate_component(Button, "Button").$$render($$result, { createLink }, {}, {})}</div> ${validate_component(Helper, "Helper").$$render($$result, { clear, paste, setMp3, setMp4, target }, {}, {})} </div>`;
});
const css$1 = {
  code: ".wrapper.svelte-qxzls6.svelte-qxzls6{margin-top:50px}.grid.svelte-qxzls6.svelte-qxzls6{display:grid;grid-template-columns:repeat(1, 1fr);gap:clamp(20px, 8vw, 200px)}.grid.svelte-qxzls6 div.svelte-qxzls6{border-radius:25px;aspect-ratio:1;width:max(150px,12vw);background-color:rgb(226, 226, 226);box-shadow:4px 4px 25px rgb(139, 139, 139)}@media(min-width:360px){.grid.svelte-qxzls6.svelte-qxzls6{grid-template-columns:repeat(2, 1fr)}}@media(min-width:700px){.grid.svelte-qxzls6.svelte-qxzls6{grid-template-columns:repeat(3, 1fr)}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="wrapper svelte-qxzls6" data-svelte-h="svelte-1nn9vti"><div class="grid svelte-qxzls6"><div class="svelte-qxzls6"></div> <div class="svelte-qxzls6"></div> <div class="svelte-qxzls6"></div> <div class="svelte-qxzls6"></div> <div class="svelte-qxzls6"></div> <div class="svelte-qxzls6"></div></div> </div>`;
});
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap');:root{--primary:rgb(80, 80, 80);--secondary:#2095b3;--secondaryPressed:#197991;--text:#ddd}.wrapper.svelte-196yo9u{min-height:100vh;min-height:100svh;display:flex;flex-direction:column}.main.svelte-196yo9u{display:flex;flex-grow:1;align-items:center;flex-direction:column;background-color:#fafafa;padding:25px 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let load = null;
  function setLoad(arg) {
    load = arg;
  }
  let link = "";
  function setLink(arg) {
    link = arg;
  }
  let target = "mp4";
  function setTarget(arg) {
    target = arg;
  }
  $$result.css.add(css);
  return `<div class="wrapper svelte-196yo9u">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="main svelte-196yo9u">${validate_component(Input, "Input").$$render($$result, { setLink, setLoad, setTarget, target }, {}, {})} ${validate_component(load || missing_component, "svelte:component").$$render($$result, { link, target }, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9785c564.js.map
