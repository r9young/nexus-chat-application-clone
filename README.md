# 10th July 2025

## 1. Prop Drilling vs. Forwarding Props

**What you learned:**
Prop drilling involves passing data through each intermediate component via props, while forwarding props is how you implement it.

**Issue:**
Uncertain when prop drilling becomes an anti-pattern and available alternatives.

**Detailed Solution:**

* Use prop drilling for shallow component trees (one or two levels).
* For deep or complex hierarchies, utilize React Context or global state management libraries like Redux or Zustand to avoid complex prop chains.

**Example:**

```jsx
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

**Reference:** [Issue #136](https://github.com/r9young/nexus-chat-application-clone/issues/136)



## 2. Triggering ImageModal

**What you learned:**
The modal is triggered by an `onClick` event in the Image component, updating state.

**Issue:**
Couldn't trace the state update from click to modal opening.

**Detailed Solution:**

1. Image component sets `selectedImage` state on click.
2. Parent component uses `useEffect` to monitor `selectedImage`; sets `isOpen` true when image is selected.
3. Pass `isOpen`, `onClose`, and `src={selectedImage}` to ImageModal.
4. Closing the modal resets `selectedImage` to null.

**Reference:** [Issue #135](https://github.com/r9young/nexus-chat-application-clone/issues/135)



## 3. Code Review: ImageModal

### 3.1 {children} Error

**What you learned:**
Reusable components must render the `{children}` prop.

**Issue:**
Modal component was empty due to missing `{children}` prop.

**Detailed Solution:**

```tsx
function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="content" onClick={e => e.stopPropagation()}>
        {children} {/* <- required for rendering content */}
      </div>
    </div>
  );
}
```

**Reference:** [Issue #134](https://github.com/r9young/nexus-chat-application-clone/issues/134)

### 3.2 Explicit Prop Definitions

**What you learned:**
Components should declare their own prop interfaces explicitly for clarity and safety.

**Issue:**
Questioned redundancy in redeclaring shared props.

**Detailed Solution:**

* Explicit local prop declaration provides clarity and type safety.
* Ensures component reusability and easier debugging.

```tsx
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => { … };
```

**Reference:** [Issue #134](https://github.com/r9young/nexus-chat-application-clone/issues/134)

### 3.3 Prop-Drilling Clarification

**What you learned:**
Clarified when to use prop drilling versus Context.

**Issue:**
Needed further conceptual clarity.

**Detailed Solution:**
Refer to detailed explanation provided under Issue #1; consider Context for complex scenarios.

**Reference:** [Issue #136](https://github.com/r9young/nexus-chat-application-clone/issues/136)



## 4. Conversation\_Page\_Rebuilt

### 4.1 Destructuring Props

**What you learned:**
ES6 destructuring syntax for cleaner, readable code.

**Issue:**
Uncertainty about using curly braces for destructuring (`{ isLast, data }`).

**Detailed Solution:**

* Curly braces destructure props directly for simpler reference.
* Without destructuring, you'd have to reference `props.isLast` and `props.data` explicitly.

**Reference:** [Issue #132](https://github.com/r9young/nexus-chat-application-clone/issues/132)

### 4.2 Using useSession()

**What you learned:**
Proper handling of authentication with NextAuth's `useSession()` hook.

**Issue:**
How to manage unauthenticated states safely.

**Detailed Solution:**

```tsx
const { data: session, status } = useSession();

if (status === 'loading') return <Spinner />;
if (status === 'unauthenticated') router.push('/login');

const user = session?.user;
```

**Reference:** [Issue #133](https://github.com/r9young/nexus-chat-application-clone/issues/133)

### 4.3 Building seenList

**What you learned:**
Managing read receipts effectively.

**Issue:**
Needed method to track users who viewed messages.

**Detailed Solution:**

* Use an array (e.g., `seenBy: string[]`) on message objects.
* Add user IDs to the array upon message viewing.
* Use `.includes(userId)` for conditional UI rendering.

**Reference:** [Issue #131](https://github.com/r9young/nexus-chat-application-clone/issues/131)

### 4.4 Click Flow in Image

**What you learned:**
Tracking event propagation and state updates.

**Issue:**
Clarity on `onClick` event flow.

**Detailed Solution:**

* Child triggers `onSelect(src)`.
* Parent updates `selectedImage` and sets `isOpen`.
* Event propagation controlled by stopping events in modal content.

**Reference:** [Issue #131](https://github.com/r9young/nexus-chat-application-clone/issues/131)

### 4.5 ImageModal & onClick

**What you learned:**
Understanding data flow between components.

**Issue:**
Unsure about source of `src` prop for ImageModal.

**Detailed Solution:**

* `src` managed by parent component state and passed to ImageModal.

**Reference:** [Issue #131](https://github.com/r9young/nexus-chat-application-clone/issues/131)

### 4.6 Triggering ImageModal to Open

**What you learned:**
Modal visibility state lifecycle.

**Issue:**
Ensuring a single source of truth for modal state.

**Detailed Solution:**

* Maintain modal open state (`isOpen`) in the parent component.
* Reset state on modal close.

**Reference:** [Issue #131](https://github.com/r9young/nexus-chat-application-clone/issues/131)



## 5. About useSession()

**What you learned:**
Session data management and null-safety.

**Issue:**
Safe access of session data.

**Detailed Solution:**

* Always handle loading/unauthenticated states explicitly.

**Reference:** [Issue #133](https://github.com/r9young/nexus-chat-application-clone/issues/133)



## 6. Destructuring in MessageBox

**What you learned:**
Benefits of destructuring in components.

**Issue:**
Confusion about curly braces syntax.

**Detailed Solution:**

* `{}` syntax destructures props for direct access, avoiding repetitive code.

**Reference:** [Issue #132](https://github.com/r9young/nexus-chat-application-clone/issues/132)



## Consolidated Takeaways

* Use prop drilling only for shallow trees; prefer Context or state management libraries for deeper structures.
* Always forward `{children}` explicitly.
* Guard session-dependent logic with checks.
* Track UI events for clarity on state updates.
* Embrace destructuring for cleaner and concise code.


---


# 11th July 2025

### Issue Summary for July 11, 2025

1. **Question:** Code Review: Three Routes
   **Answer:** No response yet (issue still open).
   **Link:** [Issue #146](https://github.com/r9young/nexus-chat-application-clone/issues/146)

2. **Question:** Review PUSH Code
   **Answer:** No response yet (issue still open).
   **Link:** [Issue #144](https://github.com/r9young/nexus-chat-application-clone/issues/144)

3. **Question:** pusherClient methods
   **Answer:** Comment by r9young: “Yes, we need to further review it.”
   **Link:** [Issue #141](https://github.com/r9young/nexus-chat-application-clone/issues/141)

4. **Question:** To Understand `pusherClient.subscribe(conversationId)`
   **Answer:** Comment by r9young: “Yes, we need to further review it.”
   **Link:** [Issue #140](https://github.com/r9young/nexus-chat-application-clone/issues/140)

5. **Question:** Code Review: actionGetMessage
   **Answer:** Provides a full walkthrough of each line in the Prisma query, including explanations for `where`, `include`, and `orderBy` clauses, along with suggestions to improve readability.
   **Link:** [Issue #145](https://github.com/r9young/nexus-chat-application-clone/issues/145)

6. **Question:** How the connection between the client and server happens through an API endpoint
   **Answer:** Clarifies the client's PUSH handshake using the `/api/pusher/auth` endpoint; explains the authentication flow and how the server authorizes connections.
   **Link:** [Issue #143](https://github.com/r9young/nexus-chat-application-clone/issues/143)

7. **Question:** What is PUSH
   **Answer:** Defines PUSH versus traditional polling, includes real-world examples (e.g., chat apps, live notifications, stock tickers), and provides a diagram illustrating the push communication flow.
   **Link:** [Issue #142](https://github.com/r9young/nexus-chat-application-clone/issues/142)

8. **Question:** What is the effect of `current`?
   **Answer:** Explains effects of `myRef.current?.scrollIntoView()`, `.focus()`, and `.getBoundingClientRect()` with appropriate usage scenarios.
   **Link:** [Issue #139](https://github.com/r9young/nexus-chat-application-clone/issues/139)

9. **Question:** What is the effect of `useRef`?
   **Answer:** Describes how `useRef` creates an object with a `.current` property, allowing direct DOM manipulation without modifying DOM element properties directly.
   **Link:** [Issue #138](https://github.com/r9young/nexus-chat-application-clone/issues/138)

### Summary

On July 11, 2025, nine issues were created. Four issues remain open without substantive replies, while five closed issues have detailed self-answered explanations provided by the repository owner.
