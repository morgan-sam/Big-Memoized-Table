<h2>Memoized Table Demo</h2>

<p>This is an app for demonstrating the performance enhancement of memoizing large arrays of data.</p>
<p>It can be viewed online <a href='https://morgan-sam.github.io/Memoized-Table-Demo/'>here</a>.</p>

<h3>What is Memoization?</h3>

<p>Memoization is an optimisation technique where the results of expensive function calls are cached. The next time the function is called with the same inputs, it can simply return the stored result without running the calculation again.</p>

<h3>Rendering in React</h3>

<p>In React we reload components every time their prop inputs change.</p>
<p>Often times data is shared across a large amount of components, while only a small amount of those components change their UI as the data changes.</p>
<p>This can lead a large amount of unnecessary renders which slows down the performance of our app. With small data sets this is often negligible, but with larger data sets this can cause significant lag.</p>

<h3>React.memo and useContext</h3>

<p>The <i>memo</i> and <i>useContext</i> hooks both allow you to memoize props for functional components in React. This prevents unnecessary renders and can provide performance gains.
