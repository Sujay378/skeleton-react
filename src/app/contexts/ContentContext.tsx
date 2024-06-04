import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type Language = "en" | "es";
type Content<T = Record<string, string>> = T;
type LangContentMap = { [Property in Language]?: Content };

interface IContentContext<
  T extends LangContentMap,
  L extends keyof T = keyof T
> {
  toggleLanguage: (lang: L) => void;
  text: (key: keyof T[L]) => string;
}

interface ContentProviderProps<T extends LangContentMap> {
  contentMap: T;
  defaultLanguage: keyof T;
}

const ContentContext = createContext<unknown | null>(null);

function ContentProvider<T extends LangContentMap>(
  props: PropsWithChildren<ContentProviderProps<T>>
) {
  const [state, setState] = useState(props);
  const activeSet = state.contentMap[state.defaultLanguage];

  const text = useCallback(
    (key: keyof typeof activeSet) => activeSet[key],
    [activeSet]
  );

  const toggleLanguage = useCallback(
    (key: keyof T) => setState((prev) => ({ ...prev, defaultLanguage: key })),
    [setState]
  );

  return (
    <ContentContext.Provider value={{ text, toggleLanguage }}>
      {props.children}
    </ContentContext.Provider>
  );
}

function useContent<T extends LangContentMap>() {
  const context = useContext(ContentContext);

  if (!context) throw new Error("Hook has been called outside context");

  return context as IContentContext<T>;
}

export function createContentStore<T extends LangContentMap>(
  input: ContentProviderProps<T>
) {
  const map = input.contentMap;

  return {
    ContentProvider: (props: PropsWithChildren) => (
      <ContentProvider {...input}>{props.children}</ContentProvider>
    ),
    useContent: useContent as () => IContentContext<typeof map>,
  };
}
