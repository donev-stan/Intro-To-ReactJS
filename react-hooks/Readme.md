# useState Hook
- For storing.

- Can only be used in function components. Classes have their own way to do it.

- Must execute in the same order (e.g. Cannot be put inside if checks, functions, loops or nested. Cannot be called conditionally)


# useEffect Hook
- For side effects.


# useMemo Hook
- Caching vlaues.

- Better performance.

- Every memo hook is saved on the memory so can't be used everywhere.

- Updating state in react will rerender the entire component.


# useRef Hook
- Similar to useState (presists between renders of the component).

- DIFFERENCE: useRef doesn't cause the component to rerender when it gets changed unlike useState.

- To reference elements inside html. Each element has ref attribute



