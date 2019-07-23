var containerTyped = undefined;
Reveal.addEventListener(
  'container',
  function() {
    if (!containerTyped) {
      containerTyped = new Typed('#container', {
        strings: ['^650コンテナ?'],
        typeSpeed: 40,
      });
    }
  },
  false,
);

var dockerTyped = undefined;
Reveal.addEventListener(
  'docker',
  function() {
    if (!dockerTyped) {
      dockerTyped = new Typed('#docker', {
        strings: ['^650Docker^300って聞いたことあるけど…'],
        typeSpeed: 40,
      });
    }
  },
  false,
);

var msaTyped = undefined;
Reveal.addEventListener(
  'msa',
  function() {
    if (!msaTyped) {
      msaTyped = new Typed('#msa', {
        strings: ['^650マイクラ', 'マイクロサービスアーキテクチャ?'],
        typeSpeed: 40,
        backDelay: 300,
        smartBackspace: true,
      });
    }
  },
  false,
);

var nwTyped = undefined;
Reveal.addEventListener(
  'nw',
  function() {
    if (!nwTyped) {
      nwTyped = new Typed('#nw', {
        strings: ['^650なるほど、^200分からん。'],
        typeSpeed: 40,
      });
    }
  },
  false,
);

var nw2Typed = undefined;
Reveal.addEventListener(
  'nw2',
  function() {
    if (!nw2Typed) {
      nw2Typed = new Typed('#nw2', {
        strings: ['^200なるほど、分からん。'],
        typeSpeed: 40,
      });
    }
  },
  false,
);

var restTsuraiTyped = undefined;
Reveal.addEventListener(
  'rest-tsurai',
  function() {
    if (!restTsuraiTyped) {
      restTsuraiTyped = new Typed('#rest-tsurai', {
        strings: ['^650kube-apiserverのREST API呼ばないといけないのか…'],
        typeSpeed: 20,
      });
    }
  },
  false,
);
