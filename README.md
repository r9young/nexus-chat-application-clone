### 21/06/2025

we have been reviewing the AuthForm.tsx. We reviewed these next and react hookers. Especially, the useState (without any State Declaration).


we will contine to reveiw the customerized component - AuthForm.tsx



### 27/06/2025

We still need to focus on the Modal -> SettingModals --> DesktopSideBar

current I am working on the SettingModal/Input

try to understand how to use Input and UseForm hook

https://github.com/r9young/nexus-chat-application-clone/issues/56

we are working on the issue 56 and 58


### 28/06/2025

We have read the Issue 56 - SettingModal/Input

Then we develop a Issue[#58](https://github.com/r9young/nexus-chat-application-clone/issues/58) - understanding the useForm hook

and further, we developed issues#59 how to use the useForm hook


The useForm hook returns an object containing methods and state values that help manage form behavior. You can specify a preset type (FieldValues or a custom interface) to allow any shape of form inputs. It also accepts defaultValues to prefill the form fields.

Since the object returned from useForm is immediately destructured, you can directly use its output—like register, handleSubmit, watch, etc.—in the body and return section of the component without referencing the full object again.



### 30/06/2025

- we finalzied the setting Modal
- we start to create user page, it will be page with all the user but no conversation
- so we create folder - 'users'
- we are working on how to understanding the momery and useCallback react hook function


### 03/07/2025

You are asking me to incorporate the suggested improvements directly into your blog post while keeping your original tone and structure.

Here is your **updated blog with all improvements included**:

---

## Building Conversation Page

### The Relationship Between `/conversations` and `/conversations/[conversationId]`

In this blog, I summarize how the conversation and messaging features work in our chat app, including the structure of routes, database handling with Prisma, and real-time updates using Pusher.

This morning, we started by thinking about how to create the conversation page. Then we realized that it's not as simple as just creating a UI page and connecting it to the backend. First, we realized that we not only need a general conversation page (`/conversations`) but also a dynamic route to display messages for a specific conversation (`/conversations/[conversationId]`).

Things to think about:

* What is `app/conversations/`?
* What is `app/conversations/[conversationId]/`?

Think about the following analogy:

* Conversations are like a block of buildings.
* Each building contains rooms.
* The `conversationId` tells the backend where to show the message — like which room to deliver the message to.
* But all the messages are actually saved in the database.

So when we need it, the system starts delivering the relevant messages.

---

### Starting Point: `lib` Folder

We realized there are many files involved in building the conversation and individual conversation pages. But we decided to start from the `lib` folder, which contains `schema.prisma` and `prismadb.ts`.

---

### `schema.prisma` and `pusher.ts`

* `schema.prisma` contains the schema definitions that define and update the database structure.
* `pusher.ts` is used not only in API routes but also when creating new conversations and broadcasting real-time updates using Pusher.

Here’s what a sample `Message` model looks like in the Prisma schema:

```prisma
model Message {
  id             String      @id @default(uuid())
  body           String
  createdAt      DateTime    @default(now())
  conversation   Conversation @relation(fields: [conversationId], references: [id])
  conversationId String
  sender         User        @relation(fields: [senderId], references: [id])
  senderId       String
}
```

Each message is tied to a conversation and a sender. This allows us to filter messages by `conversationId` when displaying them.

---

### The Whole Process Is Like:

| Step | What Happens                    | Tools Used     |
| ---- | ------------------------------- | -------------- |
| 1    | Save message to database        | Prisma         |
| 2    | Trigger real-time update        | `pusherServer` |
| 3    | Wait/Listen for new message     | `pusherClient` |
| 4    | Receive and display new message | `pusherClient` |

---

### Code in `pusher.ts`

```ts
import PusherServer from 'pusher';
import PusherClient from 'pusher-js';

// PUSHER_APP_ID
// NEXT_PUBLIC_PUSHER_APP_KEY
// PUSHER_SECRET

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: 'ap2',
  useTLS: true,
});

// Example of how to use pusherServer
// e.g. await pusherServer.trigger(conversationId, 'messages:new', newMessage);

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    channelAuthorization: {
      endpoint: '/api/pusher/auth',
      transport: 'ajax',
    },
    cluster: 'ap2',
  }
);
```

---

### Where Do We Get the Values for:

* `PUSHER_APP_ID`
* `NEXT_PUBLIC_PUSHER_APP_KEY`
* `PUSHER_SECRET`

→ You can find them in your Pusher dashboard: [https://dashboard.pusher.com/](https://dashboard.pusher.com/), and set them in the `.env.local` file.

---

### Finally, How Does `pusherServer` Work?

* The backend saves `newMessage` using Prisma.
* The backend uses `pusherServer.trigger(...)` to send data via WebSocket.
* The frontend (UI) uses `pusherClient.subscribe(conversationId)` to listen to the channel.
* The frontend is listening for the `'messages:new'` event.
* When a message arrives, the UI updates live (e.g., by appending it to the chat view).

---

With this setup, we’ve connected the database, real-time messaging, and UI into a smooth, reactive conversation experience.

Let me know if you'd like me to go deeper into any section or turn this into proper documentation.

---

Would you like a diagram version or want to convert this into a Markdown file for your blog repo?


---

7th July 2025

so last week, we have successfully tested the POST function. 


To connect the POST API and Front:[#112](https://github.com/r9young/nexus-chat-application-clone/issues/112)

- What are /conversations/[conversationId] and axios.post('/api/messages', {...}) doing respectively?
- Using the POST /api/messages route for message submission
- Why Form.tsx doesn’t import the POST handler for /api/messages?


We add the POST Request and connect it to the front, but it is not enought. as:

The app tries to POST to /api/conversations to create a new conversation and then navigate to /conversations/[conversationId]. But since no /api/conversations route exists, the POST fails silently, and the UI stays on the loading page — never reaching the conversation page.

