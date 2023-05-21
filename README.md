Uses https://css-tricks.com/different-ways-to-write-css-in-react/ as a source to test
- https://github.com/GoogleChromeLabs/critters
- https://github.com/callstack/linaria/blob/master/docs/CRITICAL_CSS.md
- https://github.com/theKashey/used-styles


# Results
- total styles: 77k
- total HTML: 112k

| library     | time taken | critical style size | ratio | RPS | Notes                                                                                                 |
|-------------|------------|-------------------|-------|-----|-------------------------------------------------------------------------------------------------------|
| critters    | 181ms      | 23kb              | 30%   | 5   | Based on JSDOM/emulates browser behavior                                                              |
| linaria     | 22ms       | 54kb              | 70%   | 45  |                                                                                                       |
| used styles | 3ms*       | 34kb              | 45%   | 333 | A low level library exposing functions for separate steps allowing optimizations. "Real" time is 38ms |


# Outcome
- `critters` provides the best extraction 
   - ✅minimizing the amount of CSS extracted
   - ⛔️cannot be used in runtime
- `used-styles` provides acceptable extraction
   - ✅sound ratio, extracting just a little more than "actually required"
     - providing helpers to fine tune what shall be extracted or not, for example to skip pseudo-states 
   - ✅can be used in runtime
- `linaria` is not a good choice
  - ⛔️extraction ratio is not acceptable
  - ⛔️cannot hold high load
  - ⛔️bound to a single style file, making it harder to operate with code splitting

# Notes
`critters` uses a full HTML parse managing external and inlined styles automatically discovering and downloading them.
CSS optimizations are sound but slow.
Can handle absoletely any html document.

`linaria` uses single regexp to find used classes and then extract rules matching said classes.
Operation is simple, but no optimizations are present

`used-styles` uses similar approach, but is more aware of which styles "can" be used reducing the number of extracted rules.