# README

- React Error Boundary usage

```ts
<ErrorBoundary key={refreshKey} FallbackComponent={FallbackComponent}>
	<ThrowError />
</ErrorBoundary>
```

> 1. use key to refresh the ErrorBoundary State
> 2. FallbackComponent for error fallback

- lifecircle hooks

  1.  getDerivedStateFromError

  > 1.This lifecycle is invoked after an error has been thrown by a descendant component.

  > 2.  code

      ```ts
      static getDerivedStateFromError(error) {
      return { error };
      }
      ```

  2.  componentDidCatch

  > 1.  Excuted at commit phase, so side-effects are permmited
