import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore
} from 'react';



function basicStore<Store>(initialValue: Store): {
  get: () => Store,
  set: (value: Partial<Store>) => void,
  subscribe: (callback: () => void) => () => void
} {
  const store = useRef(initialValue)

  const subscriber = useRef(new Set<() => void>());
  const get = useCallback(() => store.current, [])

  const set = useCallback((value: Partial<Store>) => {
    store.current = {...store.current, ...value};
    console.log(24, store.current, value);
    subscriber.current.forEach(result => result());
  }, [])

  const subscribe = useCallback((dispatch: () => void) => {
    subscriber.current.add(dispatch);
    return () => subscriber.current.delete(dispatch);
  }, [])

  return {
    get,
    set,
    subscribe
  }
}

type StoreContextType = ReturnType<typeof basicStore>;

const StoreContext = createContext<StoreContextType | null>(null);

export function useFastStore<SelectorOutput>(selector: (store: any) => SelectorOutput):
  [SelectorOutput, (value: Partial<any>) => void] {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore必须在ContextProvider中使用');
  }
  const state = useSyncExternalStore(context.subscribe, () => selector(context.get()));
  // const [value, setValue] = useState(selector(context.get()));
  //
  // useEffect(() => {
  //   context.subscribe(() => setValue(selector(context.get())))
  // }, [])
  return [state, context.set];
}

export function FastContextProvider<Store>({value, children}: { value: Store; children: ReactNode }) {
  return (
    <StoreContext.Provider value={basicStore(value)}>
      {children}
    </StoreContext.Provider>
  )
}
