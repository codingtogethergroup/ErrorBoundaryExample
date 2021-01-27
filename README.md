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

- Production vs Development
 - On production, instead, the errors will not bubble up, which means any ancestor error handler will only receive errors not explicitly caught by componentDidCatch().
 - On development, the errors will bubble up to window, this means that any window.onerror or window.addEventListener('error', callback) will intercept the errors that have been caught by componentDidCatch().
