 const questionBank = {
      HTML: [
        { q: "Which HTML element creates a hyperlink?", o: ["<link>", "<a>", "<href>", "<url>"], a: 1, e: "The <a> element creates a hyperlink. Its href attribute specifies the destination." },
        { q: "Which element is used for the largest heading by default?", o: ["<heading>", "<h6>", "<h1>", "<head>"], a: 2, e: "<h1> is the highest-level heading; <h6> is the lowest-level heading." },
        { q: "Which attribute provides alternative text for an image?", o: ["title", "src", "alt", "caption"], a: 2, e: "The alt attribute provides a text alternative for an image." },
        { q: "Which HTML element is used to create an unordered list?", o: ["<ol>", "<ul>", "<li>", "<list>"], a: 1, e: "<ul> creates an unordered list; each item is usually placed in an <li> element." },
        { q: "Which attribute connects a label to a form input?", o: ["name", "for", "target", "action"], a: 1, e: "A label's for attribute should match the input's id." },
        { q: "Where should metadata and the page title normally be placed?", o: ["<body>", "<footer>", "<head>", "<main>"], a: 2, e: "The <head> contains metadata, the title, and linked resources." },
        { q: "Which input type is intended for an email address?", o: ['type="text"', 'type="mail"', 'type="email"', 'type="address"'], a: 2, e: 'type="email" provides email-oriented input and browser validation.' },
        { q: "Which semantic element represents the main page content?", o: ["<main>", "<aside>", "<summary>", "<mark>"], a: 0, e: "<main> represents the document's dominant content." },
        { q: "What does the HTML id attribute identify?", o: ["A reusable group only", "A unique element identifier in the document", "The element's color", "A file path"], a: 1, e: "An id identifies a specific element and should be unique within the document." },
        { q: "Which element embeds JavaScript in an HTML page?", o: ["<javascript>", "<code>", "<script>", "<js>"], a: 2, e: "The <script> element can contain or reference JavaScript." },
        { q: "Which attribute makes a form field mandatory?", o: ["validate", "required", "must", "important"], a: 1, e: "The boolean required attribute prevents normal form submission when the field is missing." },
        { q: "Which declaration tells the browser to use modern HTML parsing?", o: ["<html5>", "<!DOCTYPE html>", "<doctype=5>", "<meta html='5'>"], a: 1, e: "<!DOCTYPE html> declares the HTML document type." },
        { q: "Which element is best for a self-contained article?", o: ["<span>", "<article>", "<b>", "<label>"], a: 1, e: "<article> is intended for self-contained content that can stand on its own." },
        { q: "Which attribute opens a link in a new browsing context?", o: ["new", "window", "target=\"_blank\"", "open=\"tab\""], a: 2, e: 'target="_blank" requests a new tab or window, depending on the browser.' },
        { q: "Which element represents a table row?", o: ["<td>", "<tr>", "<th>", "<table-row>"], a: 1, e: "<tr> defines a row in an HTML table." }
      ],
      CSS: [
        { q: "Which CSS property changes text color?", o: ["font-color", "text-style", "color", "foreground"], a: 2, e: "The color property sets the foreground color of text." },
        { q: "Which selector targets an element with id=\"hero\"?", o: [".hero", "#hero", "hero", "*hero"], a: 1, e: "The # prefix selects an element by its id." },
        { q: "Which declaration creates a Flexbox container?", o: ["position:flex", "display:flex", "flex:true", "layout:flex"], a: 1, e: "display: flex establishes a flex formatting context for the container." },
        { q: "Which property controls space inside an element's border?", o: ["margin", "gap", "padding", "outline"], a: 2, e: "Padding is the space between content and the border." },
        { q: "Which unit is relative to the root element's font size?", o: ["px", "rem", "vh", "%"], a: 1, e: "rem is relative to the root element's font size." },
        { q: "Which pseudo-class applies when a pointer is over an element?", o: [":focus", ":active", ":hover", ":visited"], a: 2, e: ":hover applies while the pointing device designates an element." },
        { q: "Which property rounds an element's corners?", o: ["corner-style", "border-radius", "border-round", "radius"], a: 1, e: "border-radius rounds an element's outer border corners." },
        { q: "Which declaration creates a two-dimensional grid container?", o: ["display:grid", "position:grid", "grid:enabled", "layout:table"], a: 0, e: "display: grid establishes a CSS Grid container." },
        { q: "What is the default position value for most elements?", o: ["relative", "fixed", "absolute", "static"], a: 3, e: "The default position value is static." },
        { q: "Which at-rule is commonly used for responsive breakpoints?", o: ["@screen", "@responsive", "@media", "@device"], a: 2, e: "@media applies styles when media features or conditions match." },
        { q: "Which property controls the stacking order of positioned elements?", o: ["layer", "stack", "z-index", "order-index"], a: 2, e: "z-index controls stacking order within the relevant stacking context." },
        { q: "Which property sets the space between grid tracks?", o: ["grid-gap-only", "gap", "track-space", "padding"], a: 1, e: "gap sets spacing between rows and columns in grid and flex layouts." },
        { q: "Which box-sizing value includes padding and border in the declared width?", o: ["content-box", "border-box", "padding-box", "full-box"], a: 1, e: "With border-box, the declared width includes content, padding, and border." },
        { q: "Which property changes the thickness of text?", o: ["font-weight", "font-style", "text-transform", "text-indent"], a: 0, e: "font-weight controls the weight or boldness of text." },
        { q: "Which declaration centers flex items along the main axis?", o: ["align-items:center", "text-align:center", "justify-content:center", "place-text:center"], a: 2, e: "justify-content aligns flex items along the main axis." }
      ],
      JavaScript: [
        { q: "Which keyword declares a block-scoped variable that can be reassigned?", o: ["const", "let", "static", "define"], a: 1, e: "let declares a block-scoped variable that can be reassigned." },
        { q: "Which operator checks strict equality without type conversion?", o: ["=", "==", "===", "!="], a: 2, e: "=== compares value and type without coercion." },
        { q: "Which method adds an item to the end of an array?", o: ["push()", "pop()", "shift()", "unshift()"], a: 0, e: "push() adds one or more elements to the end of an array." },
        { q: "Which method selects the first element matching a CSS selector?", o: ["getSelector()", "querySelector()", "selectOne()", "findElement()"], a: 1, e: "document.querySelector() returns the first matching element." },
        { q: "What does addEventListener() do?", o: ["Creates an HTML element", "Attaches an event handler", "Deletes an event", "Starts a timer only"], a: 1, e: "addEventListener registers a function to run when a specified event occurs." },
        { q: "Which value represents an intentionally absent object value?", o: ["undefined", "NaN", "null", "false"], a: 2, e: "null is commonly used to represent an intentional absence of a value." },
        { q: "Which array method creates a new array by transforming each item?", o: ["filter()", "map()", "reduce()", "forEach()"], a: 1, e: "map() calls a callback for each element and returns a new array of results." },
        { q: "Which keyword defines a function that can use await inside it?", o: ["async", "defer", "promise", "wait"], a: 0, e: "An async function can use await to pause its execution until a promise settles." },
        { q: "Which method converts a JSON string into a JavaScript value?", o: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.read()"], a: 1, e: "JSON.parse() parses a JSON string into a JavaScript value." },
        { q: "Which event commonly fires when a user submits a form?", o: ["send", "clickform", "submit", "changeform"], a: 2, e: "The submit event fires when a form is submitted." },
        { q: "What does the === operator compare?", o: ["Only data types", "Value and type without coercion", "Only object keys", "Variable names"], a: 1, e: "Strict equality compares values and types without type coercion." },
        { q: "Which method removes the last item from an array and returns it?", o: ["shift()", "slice()", "pop()", "spliceStart()"], a: 2, e: "pop() removes and returns the last array element." },
        { q: "What does setTimeout() do?", o: ["Repeats forever", "Runs a callback after a delay", "Stops all events", "Pauses the whole browser"], a: 1, e: "setTimeout schedules a callback to run after at least the specified delay." },
        { q: "Which keyword is used to handle an error from a try block?", o: ["catch", "error", "rescue", "except"], a: 0, e: "A catch block handles an exception thrown in the associated try block." },
        { q: "What does preventDefault() do in an event handler?", o: ["Removes the event listener", "Stops the browser's default action", "Stops all JavaScript", "Reloads the page"], a: 1, e: "preventDefault() cancels the default browser action when the event is cancelable." }
      ]
    };

    const state = { category: "HTML", time: 15, count: 5, index: 0, score: 0, correct: 0, answered: 0, questions: [], locked: false, remaining: 15, interval: null, finished: false };
    const $ = id => document.getElementById(id);
    const setupScreen = $("setupScreen"), quizScreen = $("quizScreen"), resultScreen = $("resultScreen");
    document.querySelectorAll(".category").forEach(btn => btn.addEventListener("click", () => {
      document.querySelectorAll(".category").forEach(b => b.classList.toggle("selected", b === btn));
      state.category = btn.dataset.category;
    }));
    document.querySelectorAll("#timeOptions button").forEach(btn => btn.addEventListener("click", () => {
      document.querySelectorAll("#timeOptions button").forEach(b => b.classList.toggle("active", b === btn)); state.time = Number(btn.dataset.time);
    }));
    document.querySelectorAll("#countOptions button").forEach(btn => btn.addEventListener("click", () => {
      document.querySelectorAll("#countOptions button").forEach(b => b.classList.toggle("active", b === btn)); state.count = Number(btn.dataset.count);
    }));
    function shuffle(arr) { const copy = [...arr]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
    function startQuiz() {
      stopTimer(); let pool = state.category === "Mixed" ? Object.values(questionBank).flat() : questionBank[state.category];
      state.questions = shuffle(pool).slice(0, Math.min(state.count, pool.length)); state.index = 0; state.score = 0; state.correct = 0; state.answered = 0; state.finished = false;
      setupScreen.classList.add("hidden"); resultScreen.classList.add("hidden"); quizScreen.classList.remove("hidden"); renderQuestion();
    }
    function renderQuestion() {
      if (state.index >= state.questions.length) { finishQuiz(); return; }
      state.locked = false; state.remaining = state.time;
      const q = state.questions[state.index];
      $("categoryTag").textContent = (state.category === "Mixed" ? "MIXED" : state.category.toUpperCase()) + " CHALLENGE";
      $("counter").textContent = `Question ${state.index + 1} of ${state.questions.length}`;
      $("progressFill").style.width = `${state.index / state.questions.length * 100}%`;
      $("questionText").textContent = q.q; $("feedback").textContent = ""; $("feedback").className = "feedback";
      $("answers").innerHTML = "";
      q.o.forEach((option, i) => {
        const btn = document.createElement("button"); btn.className = "answer";
        btn.innerHTML = `<span class="letter">${String.fromCharCode(65 + i)}</span><span></span>`;
        btn.lastElementChild.textContent = option; btn.addEventListener("click", () => chooseAnswer(i)); $("answers").appendChild(btn);
      });
      $("nextBtn").disabled = true; $("nextBtn").textContent = state.index === state.questions.length - 1 ? "View results →" : "Next question →";
      $("scoreValue").textContent = state.score; $("answeredValue").textContent = `${state.answered}/${state.questions.length}`;
      updateTimer(); startTimer();
    }
    function updateTimer() {
      $("timerNumber").textContent = state.remaining;
      $("timerRing").style.setProperty("--timer-angle", `${state.remaining / state.time * 360}deg`);
      $("timerRing").style.background = `conic-gradient(${state.remaining <= 5 ? "var(--red)" : "var(--cyan)"} ${state.remaining / state.time * 360}deg,#ffffff13 0)`;
    }
    function startTimer() { stopTimer(); state.interval = setInterval(() => { if (state.locked || state.finished) return; state.remaining--; updateTimer(); if (state.remaining <= 0) { timeUp(); } }, 1000); }
    function stopTimer() { if (state.interval) { clearInterval(state.interval); state.interval = null; } }
    function chooseAnswer(index) {
      if (state.locked || state.finished) return; state.locked = true; stopTimer(); state.answered++;
      const q = state.questions[state.index]; const buttons = [...$("answers").querySelectorAll(".answer")];
      buttons.forEach((b, i) => { b.disabled = true; if (i === q.a) b.classList.add("correct"); if (i === index && i !== q.a) b.classList.add("wrong"); });
      if (index === q.a) { state.correct++; state.score += 100 + Math.round(state.remaining / state.time * 50); $("feedback").textContent = "Correct! " + q.e; $("feedback").className = "feedback good"; }
      else { $("feedback").textContent = "Not quite. " + q.e; $("feedback").className = "feedback bad"; }
      $("scoreValue").textContent = state.score; $("answeredValue").textContent = `${state.answered}/${state.questions.length}`; $("nextBtn").disabled = false;
    }
    function timeUp() {
      if (state.locked) return; state.locked = true; state.answered++; const q = state.questions[state.index];
      [...$("answers").querySelectorAll(".answer")].forEach((b, i) => { b.disabled = true; if (i === q.a) b.classList.add("correct"); });
      $("feedback").textContent = "Time's up! " + q.e; $("feedback").className = "feedback bad";
      $("answeredValue").textContent = `${state.answered}/${state.questions.length}`; $("nextBtn").disabled = false; stopTimer();
    }
    function advance() { if (!state.locked) return; state.index++; renderQuestion(); }
    function finishQuiz() {
      stopTimer(); state.finished = true; quizScreen.classList.add("hidden"); resultScreen.classList.remove("hidden");
      const total = state.questions.length, max = total * 150, pct = total ? Math.round(state.correct / total * 100) : 0;
      $("finalScore").textContent = state.score; $("maxScore").textContent = max; $("correctCount").textContent = state.correct; $("wrongCount").textContent = total - state.correct; $("accuracy").textContent = pct + "%";
      $("resultIcon").textContent = pct >= 80 ? "🏆" : pct >= 50 ? "🎯" : "💪";
      $("resultTitle").textContent = pct >= 80 ? "Excellent work!" : pct >= 50 ? "Nice effort!" : "Keep practising!";
      $("resultMessage").textContent = `You completed the ${state.category === "Mixed" ? "Mixed" : state.category} quiz. ${pct >= 80 ? "You have a strong grasp of these concepts." : pct >= 50 ? "Review the explanations and try again to improve your score." : "Every attempt helps you improve. Review the answers and give it another go."}`;
      $("progressFill").style.width = "100%";
    }
    function resetQuiz() { stopTimer(); startQuiz(); }
    $("startBtn").addEventListener("click", startQuiz);
    $("nextBtn").addEventListener("click", advance);
    $("skipBtn").addEventListener("click", () => { if (state.locked) return; timeUp(); });
    $("resetBtn").addEventListener("click", resetQuiz);
    $("playAgainBtn").addEventListener("click", startQuiz);
    $("changeCategoryBtn").addEventListener("click", () => { stopTimer(); resultScreen.classList.add("hidden"); quizScreen.classList.add("hidden"); setupScreen.classList.remove("hidden"); });