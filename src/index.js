import Reveal from 'reveal.js';
import HighlightPlugin from 'reveal.js/plugin/highlight/plugin';
// import Highlight from 'reveal.js/plugin/highlight/highlight.esm';
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
// import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/solarized.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './main.css';

// const deck = new Reveal({
//     highlight: {
//         highlightOnLoad: false
//     },
//     plugins: [ Markdown, Highlight ],
// });
// deck.initialize();
// deck.on("mapShow", function mapListener() {
//     const _iframe = document.querySelector("iframe");
//     function fragmentShown(event) {
//         const {fragment} = event;
//         if (!fragment) return;
//         const action = fragment.getAttribute("action");
//         console.log("[fragmentShown]", action);
//         if (!_iframe || !_iframe.contentWindow) return;
//         if (!_iframe.contentWindow.hasOwnProperty(action)) return;
//         _iframe.contentWindow[action]();
//     }
//     deck.on("fragmentshown", fragmentShown);
//     deck.on("slidechanged", function unmount() {
//         // Event fired at the same time when this state event is triggered
//         if (document.body.classList.contains("mapShow")) return;
//         // deck.off("mapShow", mapListener);
//         deck.off("fragmentshown", fragmentShown);
//         deck.off("slidechanged", unmount);
//     });
// });

Reveal.initialize({
    highlight: {
        // highlightOnLoad: false
        beforeHighlight: hljs => hljs.configure({
            languageDetectRe: /\b([\w-]+?)-code\b/i,
        }),
    },
    // plugins: [ Markdown, Highlight ],
    plugins: [ HighlightPlugin() ],
});
// .then(() => {
//     const highlightjs = Reveal.getPlugin('highlight');
//     const 
// });