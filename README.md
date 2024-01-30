# Learning Intermediate React

## Components, Composition and Reusability

## Thinking in React

### Spliting the Entire App in Logical Components

App
===NavBar
-------- Logo
-------- Search
-------- NumResults
===Main
-------- ListBox
============ MovieList
---------------- Movie
-------- WatchedBox
============ WatchedSummary
============ WatchedMoviesList
---------------- WatchedMovie

## Todomake the App Working

## Change the title on every movie selected, Using useEffect

## Cleaning Up the useEffect Hook

## Race Condition

## Abort Controller

# Summarising useState

## Create useState

1 - We create a state value to store a value that should rerender the UI when it is changed.
It is used to keep the UI and Data layer in sync.

2 We can create useState hook either by simply giving an initial value Or by providing a function ( where some computation need to be done to fetch the value ex- getting data back from localstorage etc.)

3 - We must ensure that the function must be pure and accept no arguments. Called only on initial render and no subsequent renders.

4 - Simple useState - const [play, setPlay] = useState(true).

5 - Lazy Evaluation - const [count, setCount] = useState( () => localStorage.getItem('count'));

## Update useState

1 - We can Update the state value simply by using the setter function defined in the useState initialization.

--> setCount(900);

2 - As setting state value is Asynchronous ( It takes some time) sometimes it can not return the correct state value Just after setting new state Value, and we get older value of state, Which is called Stale State.

To Avoid this we must use the preffered way of setting useState value depending upon the previous state value

--> setCount(prev => prev + 5);

3 -\*\*\* Make Sure to Not mutate object or arrays , always create new one and replace them on state value.

## Learning Custom Hooks
